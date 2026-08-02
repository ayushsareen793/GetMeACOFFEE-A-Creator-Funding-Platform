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
  }, [username])

  const handlechange = (e) => {
    setpaymentform({ ...paymentform, [e.target.name]: e.target.value })
  }

  //to fetch username
  const getData = async (params) => {
    let u = await fetchuser(username)
    setcurrentuser(u)
    let dbpayments = await fetchpayments(username)
    setpayments(dbpayments)

    console.log(u, dbpayments);
  }

  // to count the number of supporters
  const supporterCount = new Set(payments.map(p => p.name)).size

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
      "prefill": { "name": paymentform.name, "email": "", "contact": "" },
      "notes": { "address": "Razorpay Corporate Office" },
      "theme": { "color": "#3399cc" }
    }
    var rzp1 = new Razorpay(options);
    rzp1.open();
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"/>

      <div className="bg-black min-h-screen text-white">

        {/* Cover and Profile  */}
        <div className="relative w-full">
          <img className="object-cover w-full h-48 sm:h-64 md:h-80" src={currentuser?.coverpic} />
          <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
            <div className="border-4 border-[#9333ea] bg-black [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)]">
              <img width={120} height={120} src={currentuser?.profilepic} alt="" className="block w-20 h-20 sm:w-28 sm:h-28 md:w-30 md:h-30"/>
            </div>
          </div>
        </div>

        {/*creator name  */}
        <div className="flex flex-col items-center text-center pt-16 sm:pt-20 pb-12 px-6 sm:px-10 md:px-16 border-b-2 border-[#9333ea]/20">
          <div className="inline-flex items-center gap-2 bg-[#9333ea]/10 border border-[#9333ea]/25 text-[#a855f7] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
            Creator
          </div>
          <h1 className="font-black leading-none tracking-[-0.04em] text-[clamp(32px,7vw,60px)] mb-4">{username}</h1>
          <p className="text-[#555] text-[13px] uppercase tracking-[0.08em] mb-10">All contributions are sent anonymously</p>

          {/* Stats */}
          <div className="grid grid-cols-3 border-t-2 border-[#9333ea]/20 w-full max-w-md sm:max-w-none sm:w-auto">
            <div className="pt-6 pr-3 sm:pr-10 border-r-2 border-[#9333ea]/20">
              <div className="text-[20px] sm:text-[28px] font-black tracking-[-0.03em] leading-none text-white">{supporterCount}</div>
              <div className="text-[10px] sm:text-[11px] text-[#555] uppercase tracking-[0.08em] mt-1">Supporters</div>
            </div>
            <div className="pt-6 px-3 sm:px-10 border-r-2 border-[#9333ea]/20">
              <div className="text-[20px] sm:text-[28px] font-black tracking-[-0.03em] leading-none text-white">₹{payments.reduce((a,b)=>a+b.amount,0)}</div>
              <div className="text-[10px] sm:text-[11px] text-[#555] uppercase tracking-[0.08em] mt-1">Funds Raised</div>
            </div>
            <div className="pt-6 pl-3 sm:pl-10">
              <div className="text-[20px] sm:text-[28px] font-black tracking-[-0.03em] leading-none text-white">{payments.length}</div>
              <div className="text-[10px] sm:text-[11px] text-[#555] uppercase tracking-[0.08em] mt-1">Payments</div>
            </div>
          </div>
        </div>

        {/* About This Creator / Bio */}
        <div className="px-6 sm:px-10 md:px-16 py-10 md:py-14 border-b-2 border-[#9333ea]/20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#9333ea] mb-3">About This Creator</p>
            {currentuser?.bio ? (
              <p className="text-[#ccc] text-[14px] sm:text-[15px] leading-relaxed whitespace-pre-line">
                {currentuser.bio}
              </p>
            ) : (
              <p className="text-[#444] text-[13px] italic">
                This creator hasn't added a bio yet.
              </p>
            )}

            {/* optional content type tags, if you add a contentTypes array to the schema */}
            {currentuser?.contentTypes?.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {currentuser.contentTypes.map((tag, i) => (
                  <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-[#a855f7] bg-[#9333ea]/10 border border-[#9333ea]/30 px-3 py-1.5 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/*  divider */}
        <div className="h-px mx-6 sm:mx-10 bg-linear-to-r from-transparent via-white/7 to-transparent" />

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 px-6 sm:px-10 md:px-16 py-10 md:py-16">

          {/* Top Supporters */}
          <div className="bg-black border-2 border-[#9333ea] p-5 sm:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#9333ea] mb-2">Leaderboard</p>
            <h2 className="font-black tracking-[-0.03em] text-white text-2xl mb-8">Top 10 <span className="text-[#444]">Supporters</span></h2>

            {payments.length === 0 && (
              <div className="text-center text-[#333] text-[13px] uppercase tracking-[0.08em] py-10 border-t border-[#9333ea]/15">No payments yet</div>
            )}

            <ul className="flex flex-col">
              {payments.map((p, i) => (
                <li key={i} className="flex items-center gap-4 py-3.5 border-b border-[#9333ea]/10">
                  <div className="w-9 h-9 bg-[#9333ea]/10 border-2 border-[#9333ea]/30 flex items-center justify-center text-[11px] font-black text-[#a855f7] shrink-0 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]">
                    {p.name ? p.name.slice(0, 2).toUpperCase() : "??"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[13px] font-black text-[#e0e0f0] tracking-[-0.01em]">{p.name}</div>
                    <div className="text-[11px] text-[#444] uppercase tracking-[0.06em] truncate">{p.message || "No message"}</div>
                  </div>
                  <div className="text-[14px] font-black text-[#a855f7] shrink-0">₹{p.amount}</div>
                </li>
              ))}
            </ul>
          </div>


          {/* Make a Payment */}
          <div className="bg-black border-2 border-[#9333ea] p-5 sm:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#9333ea] mb-2">Support</p>
            <h2 className="font-black tracking-[-0.03em] text-white text-2xl mb-8">Make a <span className="text-[#444]">Payment</span></h2>

            <div className="flex flex-col gap-4">
              <div>
                <label className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Your Name</label>
                <input onChange={handlechange} value={paymentform.name} name="name" type="text" placeholder="Enter your name" className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-[#9333ea]/40 focus:border-[#a855f7] focus:outline-none transition-colors placeholder:text-[#333] [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]" />
              </div>
              <div>
                <label className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Message</label>
                <input onChange={handlechange} value={paymentform.message} name="message" type="text" placeholder="Leave a message" className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-[#9333ea]/40 focus:border-[#a855f7] focus:outline-none transition-colors placeholder:text-[#333] [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]" />
              </div>
              <div>
                <label className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Amount (₹)</label>
                <input onChange={handlechange} value={paymentform.amount} name="amount" type="text" placeholder="Amount (₹)" className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-[#9333ea]/40 focus:border-[#a855f7] focus:outline-none transition-colors placeholder:text-[#333] [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]" />
              </div>

              <div className="flex gap-3">
                <button onClick={() => pay(1000)} className="flex-1 sm:flex-none bg-black border-2 border-[#9333ea]/40 hover:border-[#a855f7] hover:bg-[#0d0d18] text-[#888] hover:text-white font-bold text-[12px] uppercase tracking-[0.08em] px-4 sm:px-6 py-2.5 transition-colors cursor-pointer [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">Pay ₹10</button>
                <button onClick={() => pay(3000)} className="flex-1 sm:flex-none bg-black border-2 border-[#9333ea]/40 hover:border-[#a855f7] hover:bg-[#0d0d18] text-[#888] hover:text-white font-bold text-[12px] uppercase tracking-[0.08em] px-4 sm:px-6 py-2.5 transition-colors cursor-pointer [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">Pay ₹30</button>
              </div>

              <button onClick={() => pay(Number.parseInt(paymentform.amount * 100))} type="button" disabled={paymentform.name?.length<3 || paymentform.message?.length<4 || paymentform.amount?.length<1} className="w-full bg-[#9333ea] hover:bg-[#a855f7] disabled:opacity-30 disabled:cursor-not-allowed text-white font-bold text-[12px] uppercase tracking-[0.08em] py-4 mt-1 transition-colors border-none cursor-pointer [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">Pay Now</button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default PaymentPage

