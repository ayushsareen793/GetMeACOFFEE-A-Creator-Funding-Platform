"use server"
import Razorpay from "razorpay"
import { getServerSession } from "next-auth"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"

export const initiate = async (amount, to_username, paymentform) => {
    await connectDB()
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })

    let options = {
        amount: Number.parseInt(amount),
        currency: "INR",
    }
    let x = await instance.orders.create(options)
    await Payment.create({ oid: x.id, amount: amount / 100, to_user: to_username, name: paymentform.name, message: paymentform.message })
    return { ...x, key: process.env.NEXT_PUBLIC_KEY_ID }
}

export const fetchuser = async (username) => {
    await connectDB()
    let user = await User.findOne({ username: username }).lean()
    if (!user) return null
    //browser ko secret nhi bhejna
    delete user.razorpaysecret   
    user._id = user._id?.toString()
    user.createdAt = user.createdAt?.toISOString()
    user.updatedAt = user.updatedAt?.toISOString()
    return user
}

export const fetchpayments = async (username) => {
    await connectDB()
    let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(10).lean()
    return p.map((payment) => ({
        ...payment,
        _id: payment._id?.toString(),
        to_user: payment.to_user?.toString(),
        createdAt: payment.createdAt?.toISOString(),
        updatedAT: payment.updatedAT?.toISOString(),
    }))
    return p
}

// oldusername is still accepted (the dashboard passes it) but the real current username is read from the database, so the browser can't fake it
export const updateProfile = async (data, oldusername) => {
    // khali loggedin creators hi update kr skte h 
    const session = await getServerSession()
    if (!session?.user?.email) {
        return { error: "You must be logged in to update your profile." }
    }
    const email = session.user.email

    await connectDB()
    let ndata = JSON.parse(data)
    if (!ndata.username || !ndata.username.trim()) {
        return { error: "Username cannot be empty" }
    }
    const newUsername = ndata.username.trim()

    const current = await User.findOne({ email })
    if (!current) {
        return { error: "Could not find your account to update — try logging out and back in." }
    }

    if (current.username !== newUsername) {
        let u = await User.findOne({ username: newUsername })
        if (u && u.email !== email) {
            return { error: "username already exists" }
        }
    }

    // only these fields can be changed, so nobody can slip extra fields (or another email) into the update
    const update = {
        name: ndata.name,
        username: newUsername,
        profilepic: ndata.profilepic,
        coverpic: ndata.coverpic,
        bio: typeof ndata.bio === "string" ? ndata.bio.slice(0, 500) : ndata.bio,
        razorpayid: ndata.razorpayid,
        updatedAt: new Date(),
    }
    // the dashboard never receives the saved secret, so an empty box means "unchanged", not "erase it"
    if (typeof ndata.razorpaysecret === "string" && ndata.razorpaysecret.trim() !== "") {
        update.razorpaysecret = ndata.razorpaysecret
    }

    const result = await User.updateOne({ email }, { $set: update })
    if (result.matchedCount === 0) {
        return { error: "Could not find your account to update — try logging out and back in." }
    }

    // payments are stored by username, so move them to the new username or the supporters list goes empty
    if (current.username !== newUsername) {
        await Payment.updateMany({ to_user: current.username }, { $set: { to_user: newUsername } })
    }

    return { success: true }
}

// explaination in plain terms:

// initiate → Someone wants to send you money. This creates a payment order with Razorpay, and saves a "pending payment" entry in the database. Then it gives the frontend what it needs to show the actual payment popup.
// fetchuser → Someone visits your profile page. This goes and fetches your user info from the database so the page can show your name, photo, etc.
// fetchpayments → This fetches your top 10 highest payments received, so they can be shown on your page (like "top supporters").
// updateProfile → You edited your profile (name, username, etc.) and hit save. This checks if your new username is free, and if yes, updates your info in the database with $set (so it actually writes), and confirms a document was really found and changed.

// This file = the part of your code that talks to the database.
// Your frontend (the page someone sees and clicks buttons on) can't directly touch the database — that would be unsafe, and also Next.js doesn't let it work that way. So whenever your frontend needs to save something or get something, it calls one of these functions, and these functions do the actual work with the database.
// Think of it like a waiter in a restaurant:

// You (the client/frontend) tell the waiter what you want
// The waiter (this file) goes to the kitchen (database) and either brings food (data) back, or tells the kitchen to cook something new (save data)