
"use client"
import React, { useState } from 'react'
import { useEffect } from 'react'
import Script from 'next/script'
import { fetchuser, initiate, fetchpayments } from '@/actions/useractions'
import { useSession } from 'next-auth/react'

const PaymentPage = ({ username }) => {
  const [paymentform, setpaymentform] = useState({name:"",message:"",amount:""})
  const [currentuser, setcurrentuser] = useState({})
  const [payments, setpayments] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const handlechange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  const getData = async (params) => {
    let u = await fetchuser(username)
    setcurrentuser(u)
    let dbpayments = await fetchpayments(username)
    setpayments(dbpayments)
    console.log(u, dbpayments);
  }

  const pay = async (amount) => {
    let a = await initiate(amount, username, paymentform)
    let orderID = a.id

    var options = {
      "key": process.env.NEXT_PUBLIC_KEY_ID,
      "amount": amount,
      "currency": "INR",
      "name": "Get Me A Coffee",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": orderID,
      "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
      "prefill": {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "+919876543210"
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#3399cc"
      }
    }
     var rzp1 = new Razorpay(options);
        rzp1.open();
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"/>

      {/* image section */}
      <div className="cover w-full relative">
        <img className='object-fill w-full h-96' src={currentuser?.coverpic}></img>
        <div className='flex items-center justify-center'>
          <img className='border border-white absolute top-75 rounded-2xl items-center' width={150} height={150} src={currentuser?.profilepic} alt="" />
        </div>
      </div>

      <div className='flex justify-center items-center my-20 flex-col'>
        <div className='text-2xl font-bold mb-1'>
          {username}
        </div>
        <p className="text-[13px] text-[#555] mb-1">All videos are sent anonymously</p>

        <div className="flex items-center gap-5 my-4">
          <div className="text-center">
            <div className="text-[16px] font-bold text-[#d0d0f0]">141</div>
            <div className="text-[11px] text-[#444] mt-0.5">Posts</div>
          </div>
          <div className="w-px h-7 bg-white/[0.07]" />
          <div className="text-center">
            <div className="text-[16px] font-bold text-[#d0d0f0]">600</div>
            <div className="text-[11px] text-[#444] mt-0.5">Members</div>
          </div>
          <div className="w-px h-7 bg-white/[0.07]" />
          <div className="text-center">
            <div className="text-[16px] font-bold text-[#d0d0f0]">₹{payments.reduce((a,b)=>a+b.amount,0)}</div>
            <div className="text-[11px] text-[#444] mt-0.5">Funds Raised</div>
          </div>
           <div className="w-px h-7 bg-white/[0.07]" />
          <div className="text-center">
            <div className="text-[16px] font-bold text-[#d0d0f0]">{payments.length}</div>
            <div className="text-[11px] text-[#444] mt-0.5">No. of Payments</div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-col">
          <button className="bg-linear-to-br from-[#6c63ff] to-[#a78bfa] text-white font-semibold text-sm px-7 py-2.5 rounded-xl transition-all duration-200 hover:opacity-85 hover:-translate-y-px">
            Join Membership
          </button>
          <button className="mt-2.5 bg-white/4 border border-white/9 text-[#a0a0b8] hover:bg-white/8 hover:border-[#a78bfa]/25 hover:text-[#d0d0f0] text-sm px-6 py-2.5 rounded-xl transition-all duration-200">
            See Membership Options
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className='h-px bg-linear-to-r from-transparent via-white/7 to-transparent w-1/2 mb-12 mx-auto'></div>

      <div className='flex justify-center mb-15 gap-4 mx-auto w-[90%]'>

        {/* supporter list */}
        <div className="bg-[#111118] border border-white/6 rounded-[20px] p-6 w-1/2">
          <h2 className="text-[17px] font-bold text-[#e0e0f0] text-center mb-5 flex items-center justify-center gap-2">
            <span className="w-7 h-7 bg-[#6c63ff]/10 border border-[#6c63ff]/20 rounded-lg flex items-center justify-center text-[12px]">★</span>
            Top 10 Supporters
          </h2>
          <ul className="space-y-0">
            {payments.length === 0 && (
              <li className="text-center text-[#444] text-[13px] py-4">No payments yet</li>
            )}
            {payments.map((p, i) => (
              <li key={i} className="flex items-center gap-3 py-2.5 border-b border-white/4 last:border-0">
                <div className="w-8 h-8 rounded-[10px] bg-linear-to-br from-[#6c63ff]/30 to-[#a78bfa]/15 border border-[#a78bfa]/20 flex items-center justify-center text-[11px] font-bold text-[#a78bfa] shrink-0">
                  {p.name ? p.name.slice(0, 2).toUpperCase() : "??"}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-[#d0d0f0]">{p.name}</div>
                  <div className="text-[11px] text-[#444]">{p.message || "No message"}</div>
                </div>
                <div className="text-[13px] font-bold text-[#a78bfa]">₹{p.amount}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Make a Payment */}
        <div className="bg-[#111118] border border-white/6 rounded-[20px] p-6 w-1/2">
          <h2 className="text-[17px] font-bold text-[#e0e0f0] text-center mb-5 flex items-center justify-center gap-2">
            <span className="w-7 h-7 bg-[#6c63ff]/10 border border-[#6c63ff]/20 rounded-lg flex items-center justify-center text-[12px]">♥</span>
            Make a Payment
          </h2>

          <div className="flex flex-col gap-5 mt-6">
            <input onChange={handlechange} value={paymentform.name} name='name' type="text" placeholder="Enter Your name" className="w-full bg-[#0c0c14] border border-white/[0.07] focus:border-[#a78bfa]/35 focus:ring-2 focus:ring-[#6c63ff]/10 rounded-xl px-4 py-3 text-[13px] text-[#e0e0f0] placeholder:text-[#444] outline-none transition-all duration-200" />
            <input onChange={handlechange} value={paymentform.message} name='message' type="text" placeholder="Leave a message" className="w-full bg-[#0c0c14] border border-white/[0.07] focus:border-[#a78bfa]/35 focus:ring-2 focus:ring-[#6c63ff]/10 rounded-xl px-4 py-3 text-[13px] text-[#e0e0f0] placeholder:text-[#444] outline-none transition-all duration-200" />
            <input onChange={handlechange} value={paymentform.amount} type="text" name='amount' placeholder="Amount (₹)" className="w-full bg-[#0c0c14] border border-white/[0.07] focus:border-[#a78bfa]/35 focus:ring-2 focus:ring-[#6c63ff]/10 rounded-xl px-4 py-3 text-[13px] text-[#e0e0f0] placeholder:text-[#444] outline-none transition-all duration-200" />
            <button onClick={() => pay(Number.parseInt(paymentform.amount * 100))} type="button" className="w-full mt-1 bg-linear-to-br from-[#6c63ff] to-[#a78bfa] text-white font-semibold text-sm py-3 rounded-xl transition-all duration-200 hover:opacity-85 hover:-translate-y-px" disabled={paymentform.name?.length<3 || paymentform.message?.length<4 || paymentform.amount?.length<1}>
              Pay Now
            </button>
          </div>

          <div className='flex gap-5 mt-5'>
            <button className="mt-2.5 bg-white/4 border border-white/9 text-[#a0a0b8] hover:bg-white/8 hover:border-[#a78bfa]/25 hover:text-[#d0d0f0] text-sm px-6 py-2.5 rounded-xl transition-all duration-200" onClick={() => pay(1000)}>Pay ₹10</button>
            <button className="mt-2.5 bg-white/4 border border-white/9 text-[#a0a0b8] hover:bg-white/8 hover:border-[#a78bfa]/25 hover:text-[#d0d0f0] text-sm px-6 py-2.5 rounded-xl transition-all duration-200" onClick={() => pay(3000)}>Pay ₹30</button>
            <button className="mt-2.5 bg-white/4 border border-white/9 text-[#a0a0b8] hover:bg-white/8 hover:border-[#a78bfa]/25 hover:text-[#d0d0f0] text-sm px-6 py-2.5 rounded-xl transition-all duration-200" onClick={() => pay(5000)}>Pay ₹50</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default PaymentPage