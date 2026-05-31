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
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <div className="bg-black min-h-screen text-white">

      <div className="bg-black grid grid-cols-2 min-h-screen overflow-hidden">

        {/* Left */}
        <div className="flex flex-col justify-center px-16 py-20 relative z-10">

          <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 mb-7 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            Our Story
          </div>

          <h1 className="font-black leading-[0.92] tracking-[-0.04em] mb-8 text-[clamp(64px,8vw,100px)]">
            Supporting<br />
            <span className="text-purple-400">Creators</span><br />
            <span className="text-[#333]">Everywhere</span>
          </h1>

          <div className="border-l-4 border-purple-600 pl-5 mb-10">
            <p className="text-[#cccccc] text-[16px] leading-[1.7] max-w-120">
              GetMeACoffee is a simple, beautiful platform where fans support the creators they love. No subscriptions. No complexity. Just genuine appreciation.
            </p>
          </div>

          <div className="flex gap-4 mb-16 flex-wrap">
            <button onClick={handlebutton} className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-[12px] uppercase tracking-[0.08em] px-10 py-4.5 transition-colors border-none cursor-pointer [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
              Start Here
            </button>
          </div>

          {/* Promise to creators */}
          <div className="grid grid-cols-3 border-t-2 border-purple-600/20">
            <div className="pt-6 pr-6 border-r-2 border-purple-600/20">
              <img src="https://img.icons8.com/color/48/like--v1.png" width={22} height={22} alt="" className="mb-2" />
              <div className="text-[15px] font-black tracking-[-0.02em] leading-snug text-white">Your Work</div>
              <div className="text-[11px] text-[#555] uppercase tracking-[0.08em] mt-1">Always yours, always valued</div>
            </div>
            <div className="pt-6 px-6 border-r-2 border-purple-600/20">
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

        {/* Geometric design */}
        <div className="relative overflow-hidden bg-[#0d0d12]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(147,51,234,0.12)_0%,transparent_65%)]" />
          <div className="absolute border-2 border-purple-600/50 w-50 h-50 rotate-45 top-15 left-[40px10" />
          <div className="absolute w-42.5 h-42.5 rotate-45 bg-purple-900/35 top-20 left-25" />
          <div className="absolute w-45 h-45 bg-[rgba(100,40,180,0.5)] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] top-12.5 right-17.5" />
          <div className="absolute w-32.5 h-11.5 bg-purple-600 flex items-center justify-center z-10 text-white text-[22px] font-black top-52 left-24.5" />
          <div className="absolute w-47.5 h-47.5 bg-purple-900/25 rotate-15 bottom-22.5 right-27.5" />
          <div className="absolute w-65 h-65 border-2 border-purple-400/30 rotate-12 bottom-10 right-5" />
          <div className="absolute w-37.5 h-37.5 border border-purple-600/40 -rotate-[8deg] bottom-32.5 left-17.5" />
          <div className="absolute w-12.5 h-12.5 bg-purple-600/60 [clip-path:polygon(50%_0%,100%_100%,0%_100%)] top-80 right-12.5" />
          <div className="absolute w-20 h-20 rounded-full border-2 border-dashed border-purple-600/35 bottom-50 left-10" />
        </div>
      </div>

      {/* divider */}
      <div className="h-px mx-10 bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* mission */}
      <div className="max-w-225 mx-auto px-10 py-20">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-purple-600 mb-3">Our Mission</p>
        <h2 className="font-black tracking-[-0.03em] text-white mb-12 text-[clamp(22px,3vw,30px)]">
          Your fans can support your <span className="text-[#444]">passion</span>
        </h2>

        <div className="grid grid-cols-3 gap-10">

          <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default">
            <div className="w-15 h-15 bg-purple-600/10 border-2 border-purple-600/25 flex items-center justify-center mx-auto mb-5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
              <img src="https://img.icons8.com/?size=160&id=58915&format=png" alt="" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Zero Friction</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Supporters land on your page, pick an amount and send — done. No account needed.</p>
          </div>

          <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default">
            <div className="w-15 h-15 bg-purple-600/10 border-2 border-purple-600/25 flex items-center justify-center mx-auto mb-5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
              <img src="https://img.icons8.com/color/48/combo-chart.png" alt="" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Full Dashboard</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Track your supporters, messages and earnings all in one clean place.</p>
          </div>

          <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default">
            <div className="w-15 h-15 bg-purple-600/10 border-2 border-purple-600/25 flex items-center justify-center mx-auto mb-5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
              <img src="https://img.icons8.com/color/48/lock-2.png" alt="" className="w-8 h-8 object-contain" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Always Secure</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">OAuth login and encrypted sessions keep your data safe at all times.</p>
          </div>

        </div>
      </div>

      {/* divider */}
      <div className="h-px mx-10 bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* What we offer section*/}
      <div className="max-w-225 mx-auto px-10 py-20">
        <div className="grid grid-cols-2 gap-17 items-start">

          <div className="sticky top-20">
            <div className="inline-flex items-center bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-black px-3 py-1.5 uppercase tracking-[0.08em] mb-5">
              What we offer
            </div>
            <h2 className="font-black tracking-[-0.03em] text-white mb-6 text-[clamp(28px,3.5vw,42px)]">
              Everything you need to<br /><span className="text-purple-400">get supported</span>
            </h2>
            <div className="border-l-4 border-purple-600 pl-5">
              <p className="text-[#666] text-[15px] leading-[1.85]">
                We believe every creator deserves to be supported for the value they bring. Whether you&apos;re a writer, artist, developer, or musician — your work matters.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">

            <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] px-7 py-5 flex items-center gap-5 transition-all duration-200 hover:-translate-y-0.5 cursor-default">
              <div className="w-12 h-12 bg-purple-600/10 border-2 border-purple-600/25 flex items-center justify-center shrink-0 [clip-path:polygon(0_0,calc(100%-7px)_0,100%_7px,100%_100%,0_100%)]">
                <img src="https://img.icons8.com/?size=160&id=dhtaSUStrLtV&format=png" alt="" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="font-black text-[14px] text-[#e0e0f0] tracking-[-0.01em] mb-0.5">Razorpay Payments</h3>
                <p className="text-[12px] text-[#505068] leading-[1.6]">Secure, fast payments in INR. Supporters pay any custom amount with ease.</p>
              </div>
            </div>

            <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] px-7 py-5 flex items-center gap-5 transition-all duration-200 hover:-translate-y-0.5 cursor-default">
              <div className="w-12 h-12 bg-purple-600/10 border-2 border-purple-600/25 flex items-center justify-center shrink-0 [clip-path:polygon(0_0,calc(100%-7px)_0,100%_7px,100%_100%,0_100%)]">
                <img src="https://img.icons8.com/color/48/paint-palette.png" alt="" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="font-black text-[14px] text-[#e0e0f0] tracking-[-0.01em] mb-0.5">Beautiful Pages</h3>
                <p className="text-[12px] text-[#505068] leading-[1.6]">Customise your profile, cover photo, and bio. Your page, your vibe.</p>
              </div>
            </div>

            <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] px-7 py-5 flex items-center gap-5 transition-all duration-200 hover:-translate-y-0.5 cursor-default">
              <div className="w-12 h-12 bg-purple-600/10 border-2 border-purple-600/25 flex items-center justify-center shrink-0 [clip-path:polygon(0_0,calc(100%-7px)_0,100%_7px,100%_100%,0_100%)]">
                <img src="https://img.icons8.com/color/48/lightning-bolt.png" alt="" className="w-6 h-6 object-contain" />
              </div>
              <div>
                <h3 className="font-black text-[14px] text-[#e0e0f0] tracking-[-0.01em] mb-0.5">Instant Setup</h3>
                <p className="text-[12px] text-[#505068] leading-[1.6]">Sign up and personalise using your GitHub account in minutes.</p>
              </div>
            </div>

            <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] px-7 py-5 flex items-center gap-5 transition-all duration-200 hover:-translate-y-0.5 cursor-default">
              <div className="w-12 h-12 bg-purple-600/10 border-2 border-purple-600/25 flex items-center justify-center shrink-0 [clip-path:polygon(0_0,calc(100%-7px)_0,100%_7px,100%_100%,0_100%)]">
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

      {/* divider */}
      <div className="h-px mx-10 bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* How it works section */}
      <div className="max-w-225 mx-auto px-10 py-20">
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-purple-600 mb-3">How it works</p>
        <h2 className="font-black tracking-[-0.03em] text-white mb-12 text-[clamp(22px,3vw,30px)]">
          Three steps to start <span className="text-[#444]">earning support</span>
        </h2>

        <div className="grid grid-cols-3 gap-10">

          <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-8 transition-all duration-200 hover:-translate-y-1 cursor-default [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]">
            <div className="text-purple-600/30 font-black text-[36px] tracking-[-0.04em] leading-none mb-4">01</div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">First Log In</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Sign up with Google or GitHub, add your name, bio, and email. You are good to go.</p>
          </div>

          <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-8 transition-all duration-200 hover:-translate-y-1 cursor-default [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]">
            <div className="text-purple-600/30 font-black text-[36px] tracking-[-0.04em] leading-none mb-4">02</div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Create A Profile</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Add your cover pic, name, and email in the dashboard to get your page live.</p>
          </div>

          <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-8 transition-all duration-200 hover:-translate-y-1 cursor-default [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)]">
            <div className="text-purple-600/30 font-black text-[36px] tracking-[-0.04em] leading-none mb-4">03</div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Receive Support</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Supporters visit your page, leave a message and pay. Funds arrive in your account.</p>
          </div>

        </div>
      </div>

      {/* divider */}
      <div className="h-px mx-10 bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Testimonials */}
      <div className="max-w-225 mx-auto px-10 py-20">
        <div className="grid grid-cols-2 gap-17 items-start">

          <div className="pt-20">
            <div className="inline-flex items-center bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-black px-3 py-1.5 uppercase tracking-[0.08em] mb-5">
              Creators love us
            </div>
            <h2 className="font-black tracking-[-0.03em] text-white mb-6 text-[clamp(28px,3.5vw,42px)]">
              What people are<br /><span className="text-purple-400">saying</span>
            </h2>
            <div className="border-l-4 border-purple-600 pl-5">
              <p className="text-[#666] text-[15px] leading-[1.85]">
                Thousands of creators trust GetMeACoffee to connect with their audience and grow their work every day.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">

            <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-7 transition-all duration-200">
              <p className="text-[13px] text-[#505068] leading-[1.65] mb-5">&ldquo;Set it up in two minutes. My first coffee came in the same day. This platform just works.&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-purple-600/20 pt-3.5">
                <div className="w-10 h-10 bg-purple-600/10 border-2 border-purple-600/30 flex items-center justify-center text-[11px] font-black text-purple-400 shrink-0 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]">
                  AK
                </div>
                <div>
                  <div className="text-[13px] font-black text-[#e0e0f0] tracking-[-0.01em]">xxyx</div>
                  <div className="text-[11px] text-[#555] uppercase tracking-[0.06em]">Indie developer</div>
                </div>
              </div>
            </div>

            <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-7 transition-all duration-200">
              <p className="text-[13px] text-[#505068] leading-[1.65] mb-5">&ldquo;I just wanted a simple tip jar. This is exactly that — no nonsense, just love from my readers.&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-purple-600/20 pt-3.5">
                <div className="w-10 h-10 bg-purple-600/10 border-2 border-purple-600/30 flex items-center justify-center text-[11px] font-black text-purple-400 shrink-0 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]">
                  SR
                </div>
                <div>
                  <div className="text-[13px] font-black text-[#e0e0f0] tracking-[-0.01em]">xxzz</div>
                  <div className="text-[11px] text-[#555] uppercase tracking-[0.06em]">Fiction writer</div>
                </div>
              </div>
            </div>

            <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-7 transition-all duration-200">
              <p className="text-[13px] text-[#505068] leading-[1.65] mb-5">&ldquo;The messages my supporters leave make my day. GetMeACoffee feels personal in a way others don&apos;t.&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-purple-600/20 pt-3.5">
                <div className="w-10 h-10 bg-purple-600/10 border-2 border-purple-600/30 flex items-center justify-center text-[11px] font-black text-purple-400 shrink-0 [clip-path:polygon(0_0,calc(100%-6px)_0,100%_6px,100%_100%,0_100%)]">
                  VN
                </div>
                <div>
                  <div className="text-[13px] font-black text-[#e0e0f0] tracking-[-0.01em]">zzzxx</div>
                  <div className="text-[11px] text-[#555] uppercase tracking-[0.06em]">Music producer</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* divider */}
      <div className="h-px mx-10 bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />


      <div className="grid grid-cols-2 overflow-hidden">

        <div className="flex flex-col justify-center px-16 py-20">
          <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 mb-7 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            Get started today
          </div>

          <h2 className="font-black leading-[0.92] tracking-[-0.04em] mb-8 text-[clamp(44px,6vw,72px)]">
            Ready to earn<br />
            <span className="text-purple-400">what you</span><br />
            <span className="text-[#333]">deserve?</span>
          </h2>

          <div className="border-l-4 border-purple-600 pl-5 mb-10">
            <p className="text-[#cccccc] text-[16px] leading-[1.7] max-w-sm">Join GetMeACoffee and start getting recognition and support from the people who love your work.</p>
          </div>

          <div>
            <button onClick={handlebutton} className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-[12px] uppercase tracking-[0.08em] px-10 py-4.5 transition-colors border-none cursor-pointer [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
              Create your page,it&apos;s free
            </button>
          </div>
        </div>

        {/* Geometric design */}
        <div className="relative overflow-hidden bg-[#0d0d12] min-h-105">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(147,51,234,0.12)_0%,transparent_65%)]" />
          <div className="absolute border-2 border-purple-600/50 w-50 h-50 rotate-45 top-15 left-[40px10" />
          <div className="absolute w-42.5 h-42.5 rotate-45 bg-purple-900/35 top-20 left-25" />
          <div className="absolute w-45 h-45 bg-[rgba(100,40,180,0.5)] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] top-12.5 right-17.5" />
          <div className="absolute w-32.5 h-11.5 bg-purple-600 flex items-center justify-center z-10 text-white text-[22px] font-black top-52 left-24.5" />
          <div className="absolute w-47.5 h-47.5 bg-purple-900/25 rotate-15 bottom-22.5 right-27.5" />
          <div className="absolute w-65 h-65 border-2 border-purple-400/30 rotate-12 bottom-10 right-5" />
          <div className="absolute w-37.5 h-37.5 border border-purple-600/40 -rotate-[8deg] bottom-32.5 left-17.5" />
          <div className="absolute w-12.5 h-12.5 bg-purple-600/60 [clip-path:polygon(50%_0%,100%_100%,0%_100%)] top-80 right-12.5" />
          <div className="absolute w-20 h-20 rounded-full border-2 border-dashed border-purple-600/35 bottom-50 left-10" />
        </div>
      </div>

    </div>
  )
}

export default AboutPage