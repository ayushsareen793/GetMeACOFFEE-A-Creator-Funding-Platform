"use client"
import React from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter()
  const { data: session } = useSession()

  const handlebutton = () => {
    if (!session) {
      router.push("/Login")
    }
    else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="bg-black min-h-screen text-white">

      {/* ── Hero — two-col split like homepage ── */}
      <div className="bg-black grid grid-cols-2 min-h-screen overflow-hidden">

        {/* Left */}
        <div className="flex flex-col justify-center px-16 py-20 relative z-10">

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#9333ea]/10 border border-[#9333ea]/25 text-[#a855f7] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 mb-7 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
            Our Story
          </div>

          <h1
            className="font-black leading-[0.92] tracking-[-0.04em] mb-8"
            style={{ fontSize: "clamp(64px, 8vw, 100px)" }}
          >
            Supporting<br />
            <span className="text-[#a855f7]">Creators</span><br />
            <span className="text-[#333]">Everywhere</span>
          </h1>

          <div className="border-l-4 border-[#9333ea] pl-5 mb-10">
            <p className="text-[#cccccc] text-[16px] leading-[1.7] max-w-120">
              GetMeACoffee is a simple, beautiful platform where fans support the creators they love. No subscriptions. No complexity. Just genuine appreciation.
            </p>
          </div>

          <div className="flex gap-4 mb-16 flex-wrap">
            <button
              onClick={handlebutton}
              className="bg-[#9333ea] hover:bg-[#a855f7] text-white font-bold text-[12px] uppercase tracking-[0.08em] px-10 py-4.5 transition-colors border-none cursor-pointer"
              style={{ clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)" }}
            >
              Start Here
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
          <div className="absolute w-47.5 h-47.5" style={{ background: "rgba(76,29,149,0.25)", transform: "rotate(15deg)", bottom: "90px", right: "110px" }} />
          <div className="absolute w-65 h-65 border-2 border-[#a78bfa]/30" style={{ transform: "rotate(12deg)", bottom: "40px", right: "20px" }} />
          <div className="absolute w-37.5 h-37.5 border border-[#9333ea]/40" style={{ transform: "rotate(-8deg)", bottom: "130px", left: "70px" }} />
          <div className="absolute w-12.5 h-12.5 bg-[#9333ea]/60" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", top: "320px", right: "50px" }} />
          <div className="absolute w-20 h-20 rounded-full border-2 border-dashed border-[#9333ea]/35" style={{ bottom: "200px", left: "40px" }} />
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px mx-10" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 50%,transparent)" }} />

      {/* ── Mission ── */}
      <div className="max-w-225 mx-auto px-10 py-20">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#9333ea] mb-3">Our Mission</p>
        <h2 className="font-black tracking-[-0.03em] text-white mb-12" style={{ fontSize: "clamp(22px,3vw,30px)" }}>
          Your fans can support your <span className="text-[#444]">passion</span>
        </h2>

        <div className="grid grid-cols-3 gap-10">

          <div
            className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default"
          >
            <div
              className="w-15 h-15 bg-[#9333ea]/10 border-2 border-[#9333ea]/25 flex items-center justify-center mx-auto mb-5"
              style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
            >
              <img src="https://img.icons8.com/?size=160&id=58915&format=png" alt="" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Zero Friction</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Supporters land on your page, pick an amount and send — done. No account needed.</p>
          </div>

          <div
            className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default"
          >
            <div
              className="w-15 h-15 bg-[#9333ea]/10 border-2 border-[#9333ea]/25 flex items-center justify-center mx-auto mb-5"
              style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
            >
              <img src="https://img.icons8.com/color/48/combo-chart.png" alt="" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Full Dashboard</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Track your supporters, messages and earnings all in one clean place.</p>
          </div>

          <div
            className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default"
          >
            <div
              className="w-15 h-15 bg-[#9333ea]/10 border-2 border-[#9333ea]/25 flex items-center justify-center mx-auto mb-5"
              style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
            >
              <img src="https://img.icons8.com/color/48/lock-2.png" alt="" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Always Secure</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">OAuth login and encrypted sessions keep your data safe at all times.</p>
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px mx-10" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 50%,transparent)" }} />

      {/* ── What we offer — left text, right cards ── */}
      <div className="max-w-225 mx-auto px-10 py-20">
        <div className="grid grid-cols-2 gap-17 items-start">

          {/* Left */}
          <div className="sticky top-20">
            <div className="inline-flex items-center bg-[#9333ea]/10 border border-[#9333ea]/25 text-[#a855f7] text-[11px] font-black px-3 py-1.5 uppercase tracking-[0.08em] mb-5">
              What we offer
            </div>
            <h2 className="font-black tracking-[-0.03em] text-white mb-6" style={{ fontSize: "clamp(28px,3.5vw,42px)" }}>
              Everything you need to<br /><span className="text-[#a855f7]">get supported</span>
            </h2>
            <div className="border-l-4 border-[#9333ea] pl-5">
              <p className="text-[#666] text-[15px] leading-[1.85]">
                We believe every creator deserves to be supported for the value they bring. Whether you&apos;re a writer, artist, developer, or musician — your work matters.
              </p>
            </div>
          </div>

          {/* Right — stacked feature rows */}
          <div className="flex flex-col gap-4">

            <div className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] px-7 py-5 flex items-center gap-5 transition-all duration-200 hover:-translate-y-0.5 cursor-default">
              <div
                className="w-12 h-12 bg-[#9333ea]/10 border-2 border-[#9333ea]/25 flex items-center justify-center shrink-0"
                style={{ clipPath: "polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,0 100%)" }}
              >
                <img src="https://img.icons8.com/?size=160&id=dhtaSUStrLtV&format=png" alt="" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="font-black text-[14px] text-[#e0e0f0] tracking-[-0.01em] mb-0.5">Razorpay Payments</h3>
                <p className="text-[12px] text-[#505068] leading-[1.6]">Secure, fast payments in INR. Supporters pay any custom amount with ease.</p>
              </div>
            </div>

            <div className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] px-7 py-5 flex items-center gap-5 transition-all duration-200 hover:-translate-y-0.5 cursor-default">
              <div
                className="w-12 h-12 bg-[#9333ea]/10 border-2 border-[#9333ea]/25 flex items-center justify-center shrink-0"
                style={{ clipPath: "polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,0 100%)" }}
              >
                <img src="https://img.icons8.com/color/48/paint-palette.png" alt="" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="font-black text-[14px] text-[#e0e0f0] tracking-[-0.01em] mb-0.5">Beautiful Pages</h3>
                <p className="text-[12px] text-[#505068] leading-[1.6]">Customise your profile, cover photo, and bio. Your page, your vibe.</p>
              </div>
            </div>

            <div className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] px-7 py-5 flex items-center gap-5 transition-all duration-200 hover:-translate-y-0.5 cursor-default">
              <div
                className="w-12 h-12 bg-[#9333ea]/10 border-2 border-[#9333ea]/25 flex items-center justify-center shrink-0"
                style={{ clipPath: "polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,0 100%)" }}
              >
                <img src="https://img.icons8.com/color/48/lightning-bolt.png" alt="" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="font-black text-[14px] text-[#e0e0f0] tracking-[-0.01em] mb-0.5">Instant Setup</h3>
                <p className="text-[12px] text-[#505068] leading-[1.6]">Sign up and personalise using your GitHub account in minutes.</p>
              </div>
            </div>

            <div className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] px-7 py-5 flex items-center gap-5 transition-all duration-200 hover:-translate-y-0.5 cursor-default">
              <div
                className="w-12 h-12 bg-[#9333ea]/10 border-2 border-[#9333ea]/25 flex items-center justify-center shrink-0"
                style={{ clipPath: "polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,0 100%)" }}
              >
                <img src="https://img.icons8.com/color/48/nothing-found.png" alt="" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="font-black text-[14px] text-[#e0e0f0] tracking-[-0.01em] mb-0.5">No Platform Cut</h3>
                <p className="text-[12px] text-[#505068] leading-[1.6]">Every rupee your supporter sends goes straight to you. Always.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px mx-10" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 50%,transparent)" }} />

      {/* ── How it works ── */}
      <div className="max-w-225 mx-auto px-10 py-20">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#9333ea] mb-3">How it works</p>
        <h2 className="font-black tracking-[-0.03em] text-white mb-12" style={{ fontSize: "clamp(22px,3vw,30px)" }}>
          Three steps to start <span className="text-[#444]">earning support</span>
        </h2>

        <div className="grid grid-cols-3 gap-10">

          <div
            className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-8 transition-all duration-200 hover:-translate-y-1 cursor-default"
            style={{ clipPath: "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)" }}
          >
            <div className="text-[#9333ea]/30 font-black text-[36px] tracking-[-0.04em] leading-none mb-4">01</div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">First Log In</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Sign up with Google or GitHub, add your name, bio, and email. You are good to go.</p>
          </div>

          <div
            className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-8 transition-all duration-200 hover:-translate-y-1 cursor-default"
            style={{ clipPath: "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)" }}
          >
            <div className="text-[#9333ea]/30 font-black text-[36px] tracking-[-0.04em] leading-none mb-4">02</div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Create A Profile</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Add your cover pic, name, and email in the dashboard to get your page live.</p>
          </div>

          <div
            className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-8 transition-all duration-200 hover:-translate-y-1 cursor-default"
            style={{ clipPath: "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)" }}
          >
            <div className="text-[#9333ea]/30 font-black text-[36px] tracking-[-0.04em] leading-none mb-4">03</div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Receive Support</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Supporters visit your page, leave a message and pay. Funds arrive in your account.</p>
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px mx-10" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 50%,transparent)" }} />

      {/* ── Testimonials — left label, right cards ── */}
      <div className="max-w-225 mx-auto px-10 py-20">
        <div className="grid grid-cols-2 gap-17 items-start">

          {/* Left */}
          <div>
            <div className="inline-flex items-center bg-[#9333ea]/10 border border-[#9333ea]/25 text-[#a855f7] text-[11px] font-black px-3 py-1.5 uppercase tracking-[0.08em] mb-5">
              Creators love us
            </div>
            <h2 className="font-black tracking-[-0.03em] text-white mb-6" style={{ fontSize: "clamp(28px,3.5vw,42px)" }}>
              What people are<br /><span className="text-[#a855f7]">saying</span>
            </h2>
            <div className="border-l-4 border-[#9333ea] pl-5">
              <p className="text-[#666] text-[15px] leading-[1.85]">
                Thousands of creators trust GetMeACoffee to connect with their audience and grow their work every day.
              </p>
            </div>
          </div>

          {/* Right — stacked testimonials */}
          <div className="flex flex-col gap-4">

            <div className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-7 transition-all duration-200">
              <p className="text-[13px] text-[#505068] leading-[1.65] mb-5">&ldquo;Set it up in two minutes. My first coffee came in the same day. This platform just works.&rdquo;</p>
              <div className="flex items-center gap-3" style={{ borderTop: "1px solid rgba(147,51,234,0.2)", paddingTop: "14px" }}>
                <div
                  className="w-10 h-10 bg-[#9333ea]/10 border-2 border-[#9333ea]/30 flex items-center justify-center text-[11px] font-black text-[#a855f7] shrink-0"
                  style={{ clipPath: "polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,0 100%)" }}
                >AK</div>
                <div>
                  <div className="text-[13px] font-black text-[#e0e0f0] tracking-[-0.01em]">xxyx</div>
                  <div className="text-[11px] text-[#555] uppercase tracking-[0.06em]">Indie developer</div>
                </div>
              </div>
            </div>

            <div className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-7 transition-all duration-200">
              <p className="text-[13px] text-[#505068] leading-[1.65] mb-5">&ldquo;I just wanted a simple tip jar. This is exactly that — no nonsense, just love from my readers.&rdquo;</p>
              <div className="flex items-center gap-3" style={{ borderTop: "1px solid rgba(147,51,234,0.2)", paddingTop: "14px" }}>
                <div
                  className="w-10 h-10 bg-[#9333ea]/10 border-2 border-[#9333ea]/30 flex items-center justify-center text-[11px] font-black text-[#a855f7] shrink-0"
                  style={{ clipPath: "polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,0 100%)" }}
                >SR</div>
                <div>
                  <div className="text-[13px] font-black text-[#e0e0f0] tracking-[-0.01em]">xxzz</div>
                  <div className="text-[11px] text-[#555] uppercase tracking-[0.06em]">Fiction writer</div>
                </div>
              </div>
            </div>

            <div className="bg-black border-2 border-[#9333ea] hover:border-[#a855f7] hover:bg-[#0d0d18] p-7 transition-all duration-200">
              <p className="text-[13px] text-[#505068] leading-[1.65] mb-5">&ldquo;The messages my supporters leave make my day. GetMeACoffee feels personal in a way others don&apos;t.&rdquo;</p>
              <div className="flex items-center gap-3" style={{ borderTop: "1px solid rgba(147,51,234,0.2)", paddingTop: "14px" }}>
                <div
                  className="w-10 h-10 bg-[#9333ea]/10 border-2 border-[#9333ea]/30 flex items-center justify-center text-[11px] font-black text-[#a855f7] shrink-0"
                  style={{ clipPath: "polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,0 100%)" }}
                >VN</div>
                <div>
                  <div className="text-[13px] font-black text-[#e0e0f0] tracking-[-0.01em]">zzzxx</div>
                  <div className="text-[11px] text-[#555] uppercase tracking-[0.06em]">Music producer</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="h-px mx-10" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 50%,transparent)" }} />

      {/* ── CTA — two-col split ── */}
      <div className="grid grid-cols-2 overflow-hidden">

        {/* Left */}
        <div className="flex flex-col justify-center px-16 py-20">
          <div className="inline-flex items-center gap-2 bg-[#9333ea]/10 border border-[#9333ea]/25 text-[#a855f7] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 mb-7 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
            Get started today
          </div>

          <h2
            className="font-black leading-[0.92] tracking-[-0.04em] mb-8"
            style={{ fontSize: "clamp(44px,6vw,72px)" }}
          >
            Ready to earn<br />
            <span className="text-[#a855f7]">what you</span><br />
            <span className="text-[#333]">deserve?</span>
          </h2>

          <div className="border-l-4 border-[#9333ea] pl-5 mb-10">
            <p className="text-[#cccccc] text-[16px] leading-[1.7] max-w-sm">
              Join GetMeACoffee and start getting recognition and support from the people who love your work.
            </p>
          </div>

          <div>
            <button
              onClick={handlebutton}
              className="bg-[#9333ea] hover:bg-[#a855f7] text-white font-bold text-[12px] uppercase tracking-[0.08em] px-10 py-4.5 transition-colors border-none cursor-pointer"
              style={{ clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)" }}
            >
              Create your page — it&apos;s free
            </button>
          </div>
        </div>

        {/* Right — geometric shapes */}
        <div className="relative overflow-hidden bg-[#0d0d12]" style={{ minHeight: "420px" }}>
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(147,51,234,0.12) 0%, transparent 65%)" }} />
          <div className="absolute border-2 border-[#9333ea]/50 w-40 h-40 rotate-45" style={{ top: "40px", left: "50px" }} />
          <div className="absolute w-32 h-32 rotate-45" style={{ background: "rgba(76,29,149,0.35)", top: "55px", left: "105px" }} />
          <div className="absolute w-36 h-36" style={{ background: "rgba(100,40,180,0.45)", clipPath: "polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)", top: "40px", right: "60px" }} />
          <div className="absolute w-44 h-44 border-2 border-[#a78bfa]/25" style={{ transform: "rotate(12deg)", bottom: "30px", right: "30px" }} />
          <div className="absolute w-28 h-28 border border-[#9333ea]/35" style={{ transform: "rotate(-8deg)", bottom: "80px", left: "60px" }} />
          <div className="absolute w-10 h-10 bg-[#9333ea]/60" style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", top: "220px", right: "55px" }} />
          <div className="absolute w-16 h-16 rounded-full border-2 border-dashed border-[#9333ea]/30" style={{ bottom: "140px", left: "35px" }} />
        </div>
      </div>

    </div>
  )
}

export default AboutPage