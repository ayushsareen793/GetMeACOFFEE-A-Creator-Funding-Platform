import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import connectDB from "@/db/connectDb";
import Payment from "@/models/Payment";

export const POST= async(req)=>{
    await connectDB()
    let body=await req.formData()
    body=Object.fromEntries(body)


    //check kro ki razorpayid h ki nhi server pe
let p=await Payment.findOne({oid: body.razorpay_order_id})
if (!p) {
    return NextResponse.json({ success: false, message: "order id not found" }, { status: 404 })
    
}

//verify the payment
let xx=validatePaymentVerification({"order_id":body.razorpay_order_id,"payment_id":body.razorpay_payment_id},body.razorpay_signature,process.env.KEY_SECRET)

if (xx) {
    //update kro payment status kro
    const updatepayment=await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:"true"},{new:true})

    return NextResponse.redirect(new URL(`/${updatepayment.to_user}?paymentdone=true`, req.url), 303)
    
}
else{
    return NextResponse.json({success:false,message:"Payment Verification Failed"})
}

}