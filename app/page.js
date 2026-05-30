
"use client"
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function page() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="bg-black min-h-screen text-white" >

      {/* ── Hero ── */}
      <div className=" bg-black grid grid-cols-2 min-h-screen overflow-hidden">

        {/* Left */}
        <div className="flex flex-col justify-center px-16 py-20 relative z-10">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#9333ea]/10 border border-[#9333ea]/25 text-[#a855f7] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 mb-7 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
            For creators everywhere
          </div>

          <h1
            className="font-black leading-[0.92] tracking-[-0.04em] mb-8"
            style={{ fontSize: "clamp(64px, 8vw, 100px)" }}
          >
            Fund Your<br />
            <span className="text-[#a855f7]">Passion</span><br />
            <span className="text-[#333]">One Coffee At A Time</span>
          </h1>

          <div className="border-l-4 border-[#9333ea] pl-5 mb-10">
            <p className="text-[#cccccc] text-[16px] leading-[1.7] max-w-120">
              A crowd funding platform for creators. Get funded by your fans and followers and keep doing what you love.
            </p>
          </div>

          <div className="flex gap-4 mb-16 flex-wrap">
            <button
              onClick={() => session ? router.push("/dashboard") : router.push("/Login")}
              className="bg-[#9333ea] hover:bg-[#a855f7] text-white font-bold text-[12px] uppercase tracking-[0.08em] px-10 py-4.5 transition-colors border-none cursor-pointer"
              style={{ clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)" }}
            >
              Start Here
            </button>
            <button
              onClick={() => router.push("/about")}
              className="bg-black border-2 border-[#9333ea] hover:bg-[#9333ea]/10 text-white font-bold text-[12px] uppercase tracking-[0.08em] px-10 py-4.5 transition-colors cursor-pointer"
            >
              About Us
            </button>
          </div>

          {/* Promise to creators */}
          <div className="grid grid-cols-3" style={{ borderTop: "2px solid rgba(147,51,234,0.2)" }}>
            <div className="pt-6 pr-6" style={{ borderRight: "2px solid rgba(147,51,234,0.2)" }}>
              <img src="https://img.icons8.com/color/48/like--v1.png" width={22} height={22} alt="" className="mb-2" />
              <div className="text-[15px] font-black tracking-[-0.02em] leading-snug text-white">Your Work</div>
              <div className="text-[11px] text-[#555] uppercase tracking-[0.08em] mt-1">Always yours, always valued</div>
            </div>
            <div className="pt-6 px-6" style={{ borderRight: "2px solid rgba(147,51,234,0.2)" }}>
              <img src="https://img.icons8.com/color/48/conference-call.png" width={22} height={22} alt="" className="mb-2" />
              <div className="text-[15px] font-black tracking-[-0.02em] leading-snug text-white">Your Audience</div>
              <div className="text-[11px] text-[#555] uppercase tracking-[0.08em] mt-1">Fans who truly care</div>
            </div>
            <div className="pt-6 pl-6">
              <img src="https://img.icons8.com/color/48/money-bag.png" width={22} height={22} alt="" className="mb-2" />
              <div className="text-[15px] font-black tracking-[-0.02em] leading-snug text-white">Your Money</div>
              <div className="text-[11px] text-[#555] uppercase tracking-[0.08em] mt-1">Every rupee, no cuts</div>
            </div>
          </div>
        </div>

        {/* Right — geometric shapes */}
        <div className="relative overflow-hidden bg-[#0d0d12]">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(147,51,234,0.12) 0%, transparent 65%)" }} />
          <div className="absolute border-2 border-[#9333ea]/50 w-50 h-50 rotate-45" style={{ top: "60px", left: "40px" }} />
          <div className="absolute w-42.5 h-42.5 rotate-45" style={{ background: "rgba(76,29,149,0.35)", top: "78px", left: "100px" }} />
          <div className="absolute w-45 h-45" style={{ background: "rgba(100,40,180,0.5)", clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", top: "50px", right: "70px" }} />
          <div className="absolute w-32.5 h-11.5 bg-[#9333ea] flex items-center justify-center z-10 text-white text-[22px] font-black" style={{ top: "208px", left: "98px" }}></div>
          <div className="absolute w-47.5 h-47.5" style={{ background: "rgba(76,29,149,0.25)", transform: "rotate(15deg)", bottom: "90px", right: "110px" }} />
          <div className="absolute w-65 h-65 border-2 border-[#a78bfa]/30" style={{ transform: "rotate(12deg)", bottom: "40px", right: "20px" }} />
          <div className="absolute w-37.5 h-37.5 border border-[#9333ea]/40" style={{ transform: "rotate(-8deg)", bottom: "130px", left: "70px" }} />
          <div className="absolute w-12.5 h-12.5 bg-[#9333ea]/60" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", top: "320px", right: "50px" }} />
          <div className="absolute w-20 h-20 rounded-full border-2 border-dashed border-[#9333ea]/35" style={{ bottom: "200px", left: "40px" }} />
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px mx-10" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 50%,transparent)" }} />

      {/* ── Features ── */}
      <div className="max-w-225 mx-auto px-10 py-20">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.18em] text-[#9333ea] mb-3">How it works</p>
        <h2 className="text-center font-black tracking-[-0.03em] text-white mb-12" style={{ fontSize: "clamp(22px,3vw,30px)" }}>
          Your fans can buy you a <span className="text-[#444]">coffee</span>
        </h2>

        <div className="grid grid-cols-3 gap-10">

          {/* Card 1 */}
          <div
            className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default"
            style={{ margin: "-1px" }}
          >
            <div
              className="w-15 h-15 bg-[#9333ea]/10 border-2 border-[#9333ea]/25 flex items-center justify-center mx-auto mb-5"
              style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
            >
              <img src="man.gif" width={32} alt="" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Fund Yourself</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Your fans are always available to help you grow</p>
          </div>

          {/* Card 2 */}
          <div
            className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default"
            style={{ margin: "-1px" }}
          >
            <div
              className="w-15 h-15 bg-[#9333ea]/10 border-2 border-[#9333ea]/25 flex items-center justify-center mx-auto mb-5"
              style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
            >
              <img src="coin.gif" width={32} alt="" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Earn Freely</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Receive direct contributions without limits</p>
          </div>

          {/* Card 3 */}
          <div
            className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default"
            style={{ margin: "-1px" }}
          >
            <div
              className="w-15 h-15 bg-[#9333ea]/10 border-2 border-[#9333ea]/25 flex items-center justify-center mx-auto mb-5"
              style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
            >
              <img src="group.gif" width={32} alt="" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Build Community</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Grow a loyal audience that supports you</p>
          </div>

        </div>
      </div>

      {/* Divider*/}
      <div className="h-px mx-10" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 50%,transparent)" }} />

      {/* About us section*/}
      <div className="max-w-225 mx-auto px-10 py-20">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.18em] text-[#9333ea] mb-3">About us</p>
        <h2 className="text-center font-black tracking-[-0.03em] text-white mb-12" style={{ fontSize: "clamp(22px,3vw,30px)" }}>
          Know more <span className="text-[#444]">about us</span>
        </h2>

        <div className="grid grid-cols-2  items-center gap-17">
          <div>
            <div className="inline-flex items-center bg-[#6c63ff]/10 border border-[#6c63ff]/25 text-[#a855f7] text-[11px] font-black px-3 py-1.25 uppercase tracking-[0.08em] mb-5 rounded-sm">
              Our mission
            </div>
            <p className="text-[#666] text-[15px] leading-[1.85] mb-5">
              Our platform is built to empower creators by giving them a simple and reliable way to receive support from their audience. We believe every creator deserves recognition and the opportunity to grow.
            </p>
            <p className="text-[#666] text-[15px] leading-[1.85]">
              With seamless payments and secure transactions, we bridge the gap between creators and their supporters, building a strong and supportive community.
            </p>
          </div>

          <div
            className="overflow-hidden border-2 border-[#9333ea] rounded-sm"
            style={{ boxShadow: "0 0 40px rgba(147,51,234,0.2)" }}
          >
            <iframe
              width="100%"
              height="280"
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
  );
}