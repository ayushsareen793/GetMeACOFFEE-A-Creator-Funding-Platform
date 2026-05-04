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
        if (u) {
            return { error: "username already exists" }
        }
    }
    await User.updateOne({ email: ndata.email }, ndata)
}
