
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
      <nav
        className="flex flex-col md:flex-row justify-between items-center px-10 h-18 z-50 bg-black sticky top-0"
        style={{ borderBottom: "2px solid #9333ea" }}
      >

        {/* Logo */}
        <Link className="flex items-center gap-3 no-underline" href="/">
          <div
            className="w-11 h-11 bg-[#9333ea] flex items-center justify-center shrink-0"
            style={{ clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)" }}
          >
            <img src="https://api.iconify.design/mdi/coffee.svg?color=white" width={22} height={22} alt="" />
          </div>
          <span className="text-[22px] font-black uppercase tracking-tight text-white">
            GET<span className="text-[#9333ea]">MEACOFFEE</span>
          </span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-3 relative w-full md:w-auto justify-center md:justify-end">

          {session && (
            <div ref={dropdownRef}>
              <button
                onClick={() => setShowdropdown(!showdropdown)}
                className="flex items-center gap-2 bg-[#9333ea]/10 border border-[#9333ea]/30 hover:bg-[#9333ea]/20 hover:border-[#a855f7] text-[#a855f7] hover:text-white text-[11px] font-bold  tracking-[0.08em] px-5 py-2.5 transition-all duration-200"
                style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
              >
                {session.user.email}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${showdropdown ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 top-[calc(100%+8px)] w-48 border border-[#9333ea]/30 bg-black shadow-[0_20px_60px_rgba(147,51,234,0.15)] z-999 p-1.5 ${showdropdown ? "block" : "hidden"}`}
                style={{ clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)" }}
              >
                <ul className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#888]">
                  <li>
                    <Link href="/" onClick={() => setShowdropdown(false)}
                      className="block px-4 py-2.5 hover:bg-[#9333ea]/10 hover:text-[#a855f7] transition-colors no-underline text-[#888]">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" onClick={() => setShowdropdown(false)}
                      className="block px-4 py-2.5 hover:bg-[#9333ea]/10 hover:text-[#a855f7] transition-colors no-underline text-[#888]">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${session?.user?.name}`} onClick={() => setShowdropdown(false)}
                      className="block px-4 py-2.5 hover:bg-[#9333ea]/10 hover:text-[#a855f7] transition-colors no-underline text-[#888]">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" onClick={() => setShowdropdown(false)}
                      className="block px-4 py-2.5 hover:bg-[#9333ea]/10 hover:text-[#a855f7] transition-colors no-underline text-[#888]">
                      About Us
                    </Link>
                  </li>

                  <li style={{ borderTop: "1px solid rgba(147,51,234,0.2)" }} className="mt-1 pt-1">
                    <button
                      onClick={() => {
                        toast.success("Logged out successfully");
                        setTimeout(() => { signOut({ callbackUrl: "/" }); }, 1200);
                        setShowdropdown(false)
                      }}
                      className="w-full text-left px-4 py-2.5 text-[#666] hover:bg-red-500/10 hover:text-[#f87171] transition-colors text-[11px] font-bold uppercase tracking-[0.08em]"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {!session && (
            <Link href="/Login">
              <button
                className="bg-[#9333ea] hover:bg-[#a855f7] text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 transition-colors border-none cursor-pointer"
                style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
              >
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
          background: "#0d0d12",
          color: "#e0e0f0",
          border: "1px solid rgba(147, 51, 234, 0.3)"
        }}
        progressStyle={{
          background: "#9333ea"
        }}
      />
    </>
  )
}

export default Navbar