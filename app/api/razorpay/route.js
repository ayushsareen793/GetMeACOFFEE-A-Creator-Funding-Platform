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
    return NextResponse.error("order id not found")
    
}



//verify the payment
let xx=validatePaymentVerification({"order_id":body.razorpay_order_id,"payment_id":body.razorpay_payment_id},body.razorpay_signature,process.env.KEY_SECRET)

if (xx) {
    //update kro payment status kro
    const updatepayment=await Payment.findOneAndUpdate({oid:body.razorpay_order_id},{done:"true"},{new:true})

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_URL}/${updatepayment.to_user}?paymentdone=true`)
    
}
else{
    return NextResponse.json({success:false,message:"Payment Verification Failed"})
}

}