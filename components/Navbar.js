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
      <nav className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 px-4 sm:px-6 md:px-10 py-3 md:py-0 min-h-18 md:h-18 z-50 bg-black sticky top-0 border-b-2 border-purple-600">

        {/* logo */}
        <Link className="flex items-center gap-3 no-underline" href="/">
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-purple-600 flex items-center justify-center shrink-0 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)]">
            <img src="https://api.iconify.design/mdi/coffee.svg?color=white" width={22} height={22} alt="" />
          </div>
          <span className="text-[17px] sm:text-[22px] font-black uppercase tracking-tight text-white whitespace-nowrap">
            GET<span className="text-purple-600">MEACOFFEE</span>
          </span>
        </Link>

       
        <div className="flex items-center gap-3 relative w-full md:w-auto justify-center md:justify-end">

          {session && (
            <div ref={dropdownRef} className="relative w-full md:w-auto flex justify-center md:justify-end">
              <button onClick={() => setShowdropdown(!showdropdown)} className="flex items-center gap-2 bg-purple-600/10 border border-purple-600/30 hover:bg-purple-600/20 hover:border-purple-500 text-purple-400 hover:text-white text-[11px] font-bold tracking-[0.08em] px-5 py-2.5 transition-all duration-200 max-w-full">
                <span className="truncate">Welcome, {session.user.email}</span>
                <svg className={`w-3 h-3 shrink-0 transition-transform duration-200 ${showdropdown ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/* Dropdown */}
              <div className={`absolute right-0 md:right-0 top-[calc(100%+8px)] w-48 border border-purple-600/30 bg-black shadow-[0_20px_60px_rgba(147,51,234,0.15)] z-999 p-1.5 [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] ${showdropdown ? "block" : "hidden"}`}>
                <ul className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#888]">
                  <li>
                    <Link href="/" onClick={() => setShowdropdown(false)} className="block px-4 py-2.5 hover:bg-purple-600/10 hover:text-purple-400 transition-colors no-underline text-[#888]">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" onClick={() => setShowdropdown(false)} className="block px-4 py-2.5 hover:bg-purple-600/10 hover:text-purple-400 transition-colors no-underline text-[#888]">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${session?.user?.name}`} onClick={() => setShowdropdown(false)} className="block px-4 py-2.5 hover:bg-purple-600/10 hover:text-purple-400 transition-colors no-underline text-[#888]">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" onClick={() => setShowdropdown(false)} className="block px-4 py-2.5 hover:bg-purple-600/10 hover:text-purple-400 transition-colors no-underline text-[#888]">
                      About Us
                    </Link>
                  </li>
                  <li className="mt-1 pt-1 border-t border-purple-600/20">
                    <button
                      onClick={() => { toast.success("Logged out successfully"); setTimeout(() => { signOut({ callbackUrl: "/" }); }, 1200); setShowdropdown(false) }}
                      className="w-full text-left px-4 py-2.5 text-[#666] hover:bg-red-500/10 hover:text-red-400 transition-colors text-[11px] font-bold uppercase tracking-[0.08em]">
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {!session && (
            <Link href="/Login">
              <button className="bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-black uppercase tracking-widest px-6 py-3 transition-colors border-none cursor-pointer">
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
        toastClassName="!bg-[#0d0d12] !text-[#e0e0f0] !border !border-purple-600/30"
        progressClassName="!bg-purple-600"
      />
    </>
  )
}

export default Navbar