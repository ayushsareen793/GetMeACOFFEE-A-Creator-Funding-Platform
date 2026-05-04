"use client"
import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()
  return (
    <div className="bg-[#0c0c0e] min-h-screen text-white">

      {/* Hero */}
      <div className="relative flex flex-col items-center justify-center text-center px-8 pt-20 pb-16 overflow-hidden">
        <div className="absolute w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(109,99,255,0.07)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="flex items-center gap-2 bg-[#a78bfa]/8 border border-[#a78bfa]/20 text-[#a78bfa] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-7">
          <div className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
          For Creators
        </div>

        <h1 className="text-5xl font-extrabold tracking-tighter leading-[1.05] mb-5">
          Fund your passion<br />
          <span className="bg-linear-to-r from-[#a78bfa] to-[#818cf8] bg-clip-text text-transparent">
            one coffee at a time
          </span>
        </h1>

        <p className="text-[#555] text-[15px] leading-relaxed max-w-md mb-8">
          A crowd funding platform for creators. Get funded by your fans and followers and keep doing what you love.
        </p>

        <div className="flex gap-2.5">
         
          <button  onClick={() => session ? router.push("/dashboard") : router.push("/Login")}
          className="bg-linear-to-br from-[#6c63ff] to-[#a78bfa] text-white font-semibold text-sm px-7 py-3 rounded-xl transition-all duration-200 hover:opacity-85 hover:-translate-y-px">
            Start here
          </button>
         
          <button onClick={()=>{router.push("/about")}} className="bg-white/4 border border-white/1 text-[#a0a0b8] hover:bg-white/8 hover:text-[#d0d0f0] text-sm px-7 py-3 rounded-xl transition-all duration-200">
            About Us
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent mx-10"/>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-[#6c63ff] mb-3">How it works</p>
        <h2 className="text-center text-[30px] font-extrabold tracking-tight text-[#f0f0f8] mb-12">
          Your fans can buy you a <span className="text-[#444]">coffee</span>
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {[
            { src: "man.gif", title: "Fund Yourself", desc: "Your fans are always available to help you grow" },
            { src: "coin.gif", title: "Earn Freely", desc: "Receive direct contributions without limits" },
            { src: "group.gif", title: "Build Community", desc: "Grow a loyal audience that supports you" },
          ].map((item, i) => (
            <div key={i} className="bg-[#111118] border border-white/6 hover:border-[#a78bfa]/20 hover:bg-[#13131e] hover:-translate-y-1 rounded-[18px] p-7 text-center transition-all duration-250 group">
              <div className="w-14 h-14 bg-[#6c63ff]/10 border border-[#6c63ff]/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <img src={item.src} width={34} alt="" />
              </div>
              <h3 className="font-bold text-[15px] text-[#e0e0f0] mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#555] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent mx-10" />

      {/* About */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-[#6c63ff] mb-3">About us</p>
        <h2 className="text-center text-[30px] font-extrabold tracking-tight text-[#f0f0f8] mb-12">
          Know more <span className="text-[#444]">about us</span>
        </h2>

        <div className="grid grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#6c63ff]/8 border border-[#6c63ff]/20 text-[#a78bfa] text-[12px] font-semibold px-3 py-1 rounded-full mb-5">
              Our mission
            </div>
            <p className="text-[#555] text-[15px] leading-[1.85] mb-5">
              Our platform is built to empower creators by giving them a simple and reliable way to receive support from their audience. We believe every creator deserves recognition and the opportunity to grow.
            </p>
            <p className="text-[#555] text-[15px] leading-[1.85]">
              With seamless payments and secure transactions, we bridge the gap between creators and their supporters, building a strong and supportive community.
            </p>
          </div>

          <div className="rounded-[18px] overflow-hidden border border-white/8 shadow-[0_0_60px_rgba(0,0,0,0.6)]">
            <iframe
              width="100%" height="280"
              src="https://www.youtube.com/embed/6w6ndoe3UH4?si=C3Ix55y9rJt4Zhtz"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>

    </div>
  )
}
