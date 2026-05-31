"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Github from 'next-auth/providers/github'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Login = () => {
  const { data: session } = useSession()
  const router = useRouter();
  useEffect(() => {
    if (session) {
      router.push("/")
    }
  }, [session])

  return (
    <div className="bg-black min-h-screen text-white grid grid-cols-2 overflow-hidden">

      {/*  geometric design*/}
      <div className="relative overflow-hidden bg-[#0d0d12] flex flex-col justify-center px-16 py-20">
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

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 mb-7 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            For creators everywhere
          </div>

          <h2 className="font-black leading-[0.92] tracking-[-0.04em] mb-8 text-[clamp(40px,5vw,64px)]">
            Fund Your<br />
            <span className="text-purple-400">Passion</span><br />
            <span className="text-[#333]">One Coffee At A Time</span>
          </h2>

          <div className="border-l-4 border-purple-600 pl-5">
            <p className="text-[#cccccc] text-[15px] leading-[1.7] max-w-xs">Get funded by your fans and followers and keep doing what you love.</p>
          </div>

          <div className="grid grid-cols-3 mt-12 border-t-2 border-purple-600/20">
            <div className="pt-6 pr-6 border-r-2 border-purple-600/20">
              <img src="https://img.icons8.com/color/48/like--v1.png" width={22} height={22} alt="" className="mb-2" />
              <div className="text-[13px] font-black tracking-[-0.02em] leading-snug text-white">Your Work</div>
              <div className="text-[10px] text-[#555] uppercase tracking-[0.08em] mt-1">Always valued</div>
            </div>
            <div className="pt-6 px-6 border-r-2 border-purple-600/20">
              <img src="https://img.icons8.com/color/48/conference-call.png" width={22} height={22} alt="" className="mb-2" />
              <div className="text-[13px] font-black tracking-[-0.02em] leading-snug text-white">Your Audience</div>
              <div className="text-[10px] text-[#555] uppercase tracking-[0.08em] mt-1">Fans who care</div>
            </div>
            <div className="pt-6 pl-6">
              <img src="https://img.icons8.com/color/48/money-bag.png" width={22} height={22} alt="" className="mb-2" />
              <div className="text-[13px] font-black tracking-[-0.02em] leading-snug text-white">Your Money</div>
              <div className="text-[10px] text-[#555] uppercase tracking-[0.08em] mt-1">No cuts, ever</div>
            </div>
          </div>
        </div>
      </div>

      {/* login form */}
      <div className="flex flex-col justify-center px-16 py-20 relative">
        <div className="absolute top-8 right-8 w-16 h-16 border border-purple-600/20 rotate-45 pointer-events-none" />
        <div className="absolute bottom-8 left-8 w-10 h-10 bg-purple-600/10 rotate-12 pointer-events-none" />

        <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 mb-7 w-fit">
          <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
          Welcome back
        </div>

        <h1 className="font-black leading-[0.92] tracking-[-0.04em] mb-3 text-[clamp(40px,5vw,60px)]">
          Login to get your<br /><span className="text-purple-400">fan's support</span>
        </h1>

        <div className="border-l-4 border-purple-600 pl-5 mb-10">
          <p className="text-[#666] text-[14px] leading-[1.7]">Sign in to access your dashboard and start receiving support.</p>
        </div>

        {/* Social buttons */}
        <div className="flex flex-col gap-3 mb-8">
          <button
            onClick={() => { signIn("github") }}
            className="flex items-center justify-center gap-3 bg-black border-2 border-purple-600/50 hover:border-purple-500 hover:bg-[#0d0d18] text-white text-[13px] font-bold uppercase tracking-[0.06em] px-6 py-3.5 transition-all duration-200 cursor-pointer [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
            <img src="https://img.icons8.com/ios-filled/50/ffffff/github.png" className="h-4 w-4" />
            Continue with GitHub
          </button>

          <button
            className="flex items-center justify-center gap-3 bg-black border-2 border-purple-600/50 hover:border-purple-500 hover:bg-[#0d0d18] text-white text-[13px] font-bold uppercase tracking-[0.06em] px-6 py-3.5 transition-all duration-200 cursor-pointer [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-4 w-4" />
            Continue with Google
          </button>
        </div>

        {/* divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-purple-600/20" />
          <span className="text-[10px] font-black uppercase tracking-[0.15em] text-purple-600/60">or</span>
          <div className="flex-1 h-px bg-purple-600/20" />
        </div>

        {/* email/password form */}
        <form className="flex flex-col gap-4">
          <div>
            <label className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Email Address</label>
            <input type="email" placeholder="you@example.com"
              className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-purple-600/40 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-[#333] [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]" />
          </div>

          <div>
            <label className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Password</label>
            <input type="password" placeholder="••••••••••••"
              className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-purple-600/40 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-[#333] [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]" />
          </div>

          <div className="text-right">
            <a href="#" className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#555] hover:text-purple-400 transition-colors">Forgot Password?</a>
          </div>

          <button type="submit"
            className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-[12px] uppercase tracking-[0.08em] px-10 py-4 transition-colors border-none cursor-pointer [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
            Login
          </button>
        </form>

        <p className="text-[12px] text-[#444] mt-6 text-center">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-purple-400 font-bold hover:underline">Sign up</a>
        </p>
      </div>

    </div>
  )
}

export default Login