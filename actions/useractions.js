"use server"
import Razorpay from "razorpay"
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
    await Payment.create({ oid: x.id, amount: amount/100, to_user: to_username, name: paymentform.name, message: paymentform.message })
    return { ...x, key: process.env.NEXT_PUBLIC_KEY_ID}
}

export const fetchuser = async (username) => {
    await connectDB()
    let u = await User.findOne({ username: username })
    if (!u) return null  //  agr object nhi mila to  null error
    let user = u.toObject({ flattenObjectIds: true })  // fixed typo 
     user._id = user._id?.toString()
    user.createdAt = user.createdAt?.toISOString()//string ke form me pass ho rha h 
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
        createdAt: payment.createdAt?.toISOString(),// string ke form me pass ho rha h
        updatedAT: payment.updatedAT?.toISOString(), 
    }))
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDB()
    let ndata = JSON.parse(data) //parse krta h data ko string ke form me 
    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username })
        // only block the save if that username belongs to someone else — not if it's your own doc under your new username
        if (u && u.email !== ndata.email) {
            return { error: "username already exists" }
        }
    }
    await User.updateOne({ email: ndata.email }, ndata)
    return { success: true } // let the frontend know it actually worked
}



// explaination in plain terms:

// initiate → Someone wants to send you money. This creates a payment order with Razorpay, and saves a "pending payment" entry in the database. Then it gives the frontend what it needs to show the actual payment popup.
// fetchuser → Someone visits your profile page. This goes and fetches your user info from the database so the page can show your name, photo, etc.
// fetchpayments → This fetches your top 10 highest payments received, so they can be shown on your page (like "top supporters").
// updateProfile → You edited your profile (name, username, etc.) and hit save. This checks if your new username is free, and if yes, updates your info in the database.


// This file = the part of your code that talks to the database.
// Your frontend (the page someone sees and clicks buttons on) can't directly touch the database — that would be unsafe, and also Next.js doesn't let it work that way. So whenever your frontend needs to save something or get something, it calls one of these functions, and these functions do the actual work with the database.
// Think of it like a waiter in a restaurant:

// You (the client/frontend) tell the waiter what you want
// The waiter (this file) goes to the kitchen (database) and either brings food (data) back, or tells the kitchen to cook something new (save data)