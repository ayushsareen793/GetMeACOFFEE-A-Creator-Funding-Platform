import crypto from "crypto"
import connectDB from "@/db/connectDb"
import Payment from "@/models/Payment"
import WebhookEvent from "@/models/WebhookEventModel"

export const dynamic = 'force-dynamic'

export async function POST(req) {
  const body = await req.text()
  const signature = req.headers.get('x-razorpay-signature')
  const eventId = req.headers.get('x-razorpay-event-id')

  // spoofy payments check: verify this request genuinely came from Razorpay 
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(body)
    .digest('hex')

  if (expectedSignature !== signature) {
    console.log('Webhook signature mismatch - rejecting request')
    return Response.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const payload = JSON.parse(body)
  console.log('Webhook event:', payload.event)
  await connectDB()

  //  check for duplicate payments- skip if we've already processed this exact event 
  try {
    await WebhookEvent.create({ eventId, event: payload.event })
  } catch (err) {
    if (err.code === 11000) {
      // duplicate key error = this eventId already exists = already processed
      console.log('Duplicate webhook event, skipping:', eventId)
      return Response.json({ received: true }, { status: 200 })
    }
    throw err
  }

  // for sucessful payemnt
  if (payload.event === 'payment.captured') {
    const orderId = payload.payload.payment.entity.order_id
    const payment = await Payment.findOne({ oid: orderId })

    if (!payment) {
      console.log('No matching payment found for order:', orderId)
      return Response.json({ received: true }, { status: 200 })
    }

    if (payment.done) {
      console.log('Payment already marked done, skipping:', orderId)
      return Response.json({ received: true }, { status: 200 })
    }

    await Payment.findOneAndUpdate({ oid: orderId }, { done: true })
    console.log('Payment marked done via webhook:', orderId)
  }

  // for failed payment 
  // this just confirms server-side (for logging/monitoring) that Razorpay also saw the failure
  if (payload.event === 'payment.failed') {
    const orderId = payload.payload.payment.entity.order_id
    const payment = await Payment.findOne({ oid: orderId })

    if (!payment) {
      console.log('No matching payment found for failed order:', orderId)
      return Response.json({ received: true }, { status: 200 })
    }
    console.log('Payment failed, confirmed via webhook:', orderId)
  }

  return Response.json({ received: true }, { status: 200 })
}













