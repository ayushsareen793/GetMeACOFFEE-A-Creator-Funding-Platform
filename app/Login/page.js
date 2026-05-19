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

    <div className='text-white py-10 container mx-auto'>
      <div>
        {/* Half white half purple heading */}
        <h1 className='font-bold text-center text-3xl pb-2'>
          <span className='text-white'>Login To Get Your </span>
          <span className='text-[#a78bfa]'>Fan's Support</span>
        </h1>

        <div className="relative min-h-screen flex items-center justify-center px-4 text-white">

          {/* Background */}
          <div className="fixed inset-0 -z-10 bg-[#0a0a0f]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_50%_0%,rgba(167,139,250,0.12),transparent)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_300px_at_80%_80%,rgba(167,139,250,0.06),transparent)]"></div>
          </div>

          <div className="w-full max-w-md rounded-2xl border border-[#a78bfa]/20 bg-[#a78bfa]/5 backdrop-blur-xl shadow-2xl p-6 sm:p-8">

            {/* Heading */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="mt-2 text-sm text-[#a78bfa]/60">
                Welcome back to GetMeACoffee
              </p>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col gap-3">
              <button onClick={() => { signIn("github") }} className="flex items-center justify-center gap-2 rounded-lg border border-[#a78bfa]/20 bg-[#a78bfa]/5 py-2 text-white hover:bg-[#a78bfa]/10 hover:border-[#a78bfa]/40 transition-all duration-300">
                <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="h-4 w-4" />
                Continue with GitHub
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg border border-[#a78bfa]/20 bg-[#a78bfa]/5 py-2 text-white hover:bg-[#a78bfa]/10 hover:border-[#a78bfa]/40 transition-all duration-300">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="h-4 w-4" />
                Continue with Google
              </button>

              <button className="flex items-center justify-center gap-2 rounded-lg border border-[#a78bfa]/20 bg-[#a78bfa]/5 py-2 text-white hover:bg-[#a78bfa]/10 hover:border-[#a78bfa]/40 transition-all duration-300">
                <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="h-4 w-4" />
                Continue with LinkedIn
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-2 my-6 text-sm text-[#a78bfa]/40">
              <div className="h-px w-full bg-[#a78bfa]/15"></div>
              OR
              <div className="h-px w-full bg-[#a78bfa]/15"></div>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="rounded-lg bg-transparent border border-[#a78bfa]/20 px-3 py-3 text-white placeholder:text-[#a78bfa]/30 focus:outline-none focus:border-[#a78bfa]/60 focus:ring-1 focus:ring-[#a78bfa]/20 transition"
              />

              <input
                type="password"
                placeholder="Password"
                className="rounded-lg bg-transparent border border-[#a78bfa]/20 px-3 py-3 text-white placeholder:text-[#a78bfa]/30 focus:outline-none focus:border-[#a78bfa]/60 focus:ring-1 focus:ring-[#a78bfa]/20 transition"
              />

              <div className="text-right text-sm">
                <a href="#" className="text-[#a78bfa]/50 hover:text-[#a78bfa] transition">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="rounded-lg bg-[#a78bfa] text-black py-3 font-semibold hover:bg-[#c4b5fd] transition-all duration-300"
              >
                Login
              </button>
            </form>

            {/* Signup */}
            <p className="text-center text-sm text-[#a78bfa]/50 mt-6">
              Don't have an account?{" "}
              <a href="#" className="text-[#a78bfa] hover:underline">
                Sign up
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>







  )

}

export default Login