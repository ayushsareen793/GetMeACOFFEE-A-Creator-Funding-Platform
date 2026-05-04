
"use client"
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';

const Navbar = () => {
  const [showdropdown, setShowdropdown] = useState(false)
  const { data: session } = useSession()


  const dropdownRef = useRef(null)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowdropdown(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <>
      <nav className="flex flex-col md:flex-row justify-between items-center px-8 md: h-20 z-50  bg-[#0c0c0e]/95 border-b border-white/6 backdrop-blur-xl sticky top-0  ">

        <Link className="flex items-center gap-2 font-bold text-[17px] tracking-tight text-[#f0f0f8]" href="/">
          <div className="w-8.5 h-8.5 rounded-[10px] border border-[#a78bfa]/30 bg-[#a78bfa]/10 flex items-center justify-center">
            <img src="/tea.gif" width={22} alt="" />
          </div>
          GetMeA<span className="text-[#a78bfa]">Coffee</span>
        </Link>

        <div className="flex items-center gap-3 relative w-full md:w-auto justify-center md:justify-end">
          {session && (
            <div ref={dropdownRef}>
              <button
                onClick={() => setShowdropdown(!showdropdown)}
                className="flex items-center gap-2 bg-white/4 border border-white/8 hover:bg-white/8 hover:border-[#a78bfa]/30 text-[#b0b0c8] hover:text-[#e0e0f0] rounded-[10px] text-sm px-4 py-2 transition-all duration-200">
                {session.user.email}
                <svg className={`w-3 h-3 text-[#666] transition-transform duration-200 ${showdropdown ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              <div className={`absolute right-0 top-[calc(100%+8px)] w-45 rounded-[14px] border border-white/8 bg-[#13131a] shadow-[0_20px_60px_rgba(0,0,0,0.8)] z-999 p-1.5 ${showdropdown ? "block" : "hidden"}`}>
                <ul className="text-sm text-[#a0a0b8]">
                  <li>
                    <Link href="/" onClick={() => setShowdropdown(false)} className="block px-3.5 py-2.5 rounded-[9px] hover:bg-[#a78bfa]/8 hover:text-[#d0d0f0] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" onClick={() => setShowdropdown(false)} className="block px-3.5 py-2.5 rounded-[9px] hover:bg-[#a78bfa]/8 hover:text-[#d0d0f0] transition-colors">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${session?.user?.name}`} onClick={() => setShowdropdown(false)} className="block px-3.5 py-2.5 rounded-[9px] hover:bg-[#a78bfa]/8 hover:text-[#d0d0f0] transition-colors">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" onClick={() => setShowdropdown(false)} className="block px-3.5 py-2.5 rounded-[9px] hover:bg-[#a78bfa]/8 hover:text-[#d0d0f0] transition-colors">
                      About Us
                    </Link>
                  </li>

                  <li className="border-t border-white/6 mt-1 pt-1">
                    <button onClick={() => {
                      toast.success("logged out succesfully👋"); setTimeout(() => {signOut({ callbackUrl: "/" });}, 1200); setShowdropdown(false) }} className="w-full text-left px-3.5 py-2.5 rounded-[9px] text-[#888] hover:bg-red-500/8 hover:text-[#f87171] transition-colors">
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {!session && (
            <Link href="/Login">
              <button className="bg-white/4 border border-white/8 hover:bg-white/8 hover:border-[#a78bfa]/30 text-[#b0b0c8] hover:text-[#e0e0f0] rounded-[10px] text-sm px-4 py-2 transition-all duration-200">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>


      <ToastContainer
        position="top-right"
        autoClose={1000}
        icon={false}
        theme="dark"
        toastStyle={{
          background: "#1a1a24",
          color: "#e0e0f0",
          border: "1px solid rgba(167, 139, 250, 0.3)"
        }}
        progressStyle={{
          background: "#a78bfa"
        }}
      />
    </>
  )

}


export default Navbar