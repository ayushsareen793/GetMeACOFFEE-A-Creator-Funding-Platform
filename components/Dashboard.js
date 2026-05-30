"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

const Dashboard = () => {
    const { data: session, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})
    const [oldusername, setOldusername] = useState("")

    useEffect(() => {
        console.log(session)
        if (!session) {
            router.push('/login')
        }
        else {
            getData()
        }
    }, [])

    const getData = async () => {
        let u = await fetchuser(session.user.name)
        setform(u)
        setOldusername(u.username)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData)
        await updateProfile(JSON.stringify(data), oldusername)

        toast('Profile Updated', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
        });
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <ToastContainer />

            <div className="bg-black min-h-screen text-white">

                {/* ── Header ── */}
                <div className="px-16 pt-16 pb-10 relative overflow-hidden" style={{ borderBottom: "2px solid rgba(147,51,234,0.2)" }}>
                    {/* Geometric bg */}
                    <div className="absolute top-6 right-20 w-24 h-24 border-2 border-[#9333ea]/20 rotate-45 pointer-events-none" />
                    <div className="absolute top-10 right-32 w-14 h-14 bg-[#4c1d95]/20 rotate-45 pointer-events-none" />
                    <div className="absolute bottom-0 right-10 w-16 h-16 border border-[#9333ea]/15 -rotate-12 pointer-events-none" />

                    <div className="inline-flex items-center gap-2 bg-[#9333ea]/10 border border-[#9333ea]/25 text-[#a855f7] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 mb-6 w-fit">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
                        Creator Dashboard
                    </div>

                    <h1
                        className="font-black leading-[0.92] tracking-[-0.04em]"
                        style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
                    >
                        Welcome back,<br />
                        <span className="text-[#a855f7]">{session?.user?.name || "Creator"}</span>
                    </h1>
                </div>

                {/* ── Form ── */}
                <form onSubmit={handleSubmit} action={handleSubmit}>
                    <div className="max-w-225 mx-auto px-16 py-16 flex flex-col gap-16">

                        {/* ── Section 01 — Basic Info ── */}
                        <div className="grid grid-cols-2 gap-17 items-start">

                            {/* Left label */}
                            <div>
                                <div className="inline-flex items-center gap-2 bg-[#9333ea]/10 border border-[#9333ea]/25 text-[#a855f7] text-[11px] font-black px-3 py-1.5 uppercase tracking-[0.08em] mb-5">
                                    <span className="text-[#9333ea]/60 font-black">01</span>
                                    Basic Information
                                </div>
                                <h2 className="font-black tracking-[-0.03em] text-white mb-4" style={{ fontSize: "clamp(20px,2.5vw,28px)" }}>
                                    Your public<br /><span className="text-[#a855f7]">profile details</span>
                                </h2>
                                <div className="border-l-4 border-[#9333ea] pl-5">
                                    <p className="text-[#555] text-[13px] leading-[1.8]">This is what your supporters see when they visit your page. Make it count.</p>
                                </div>
                            </div>

                            {/* Right fields */}
                            <div
                                className="bg-black border-2 border-[#9333ea] p-8"
                                style={{ clipPath: "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)" }}
                            >
                                <div className="flex flex-col gap-5">

                                    <div className="grid grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Name</label>
                                            <input
                                                value={form.name ? form.name : ""}
                                                onChange={handleChange}
                                                type="text" name="name" id="name"
                                                className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-[#9333ea]/40 focus:border-[#a855f7] focus:outline-none transition-colors"
                                                style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="username" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Username</label>
                                            <input
                                                value={form.username ? form.username : ""}
                                                onChange={handleChange}
                                                type="text" name="username" id="username"
                                                className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-[#9333ea]/40 focus:border-[#a855f7] focus:outline-none transition-colors"
                                                style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Email</label>
                                        <input
                                            value={form.email ? form.email : ""}
                                            onChange={handleChange}
                                            type="email" name="email" id="email"
                                            className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-[#9333ea]/40 focus:border-[#a855f7] focus:outline-none transition-colors"
                                            style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* ── Divider ── */}
                        <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 50%,transparent)" }} />

                        {/* ── Section 02 — Images ── */}
                        <div className="grid grid-cols-2 gap-17 items-start">

                            {/* Left label */}
                            <div>
                                <div className="inline-flex items-center gap-2 bg-[#9333ea]/10 border border-[#9333ea]/25 text-[#a855f7] text-[11px] font-black px-3 py-1.5 uppercase tracking-[0.08em] mb-5">
                                    <span className="text-[#9333ea]/60 font-black">02</span>
                                    Images
                                </div>
                                <h2 className="font-black tracking-[-0.03em] text-white mb-4" style={{ fontSize: "clamp(20px,2.5vw,28px)" }}>
                                    Profile &amp;<br /><span className="text-[#a855f7]">cover photos</span>
                                </h2>
                                <div className="border-l-4 border-[#9333ea] pl-5">
                                    <p className="text-[#555] text-[13px] leading-[1.8]">Paste a direct image URL for your profile picture and cover banner.</p>
                                </div>
                            </div>

                            {/* Right fields */}
                            <div
                                className="bg-black border-2 border-[#9333ea] p-8"
                                style={{ clipPath: "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)" }}
                            >
                                <div className="flex flex-col gap-5">

                                    <div>
                                        <label htmlFor="profilepic" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Profile Picture</label>
                                        <input
                                            value={form.profilepic ? form.profilepic : ""}
                                            onChange={handleChange}
                                            type="text" name="profilepic" id="profilepic"
                                            placeholder="https://..."
                                            className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-[#9333ea]/40 focus:border-[#a855f7] focus:outline-none transition-colors placeholder:text-[#333]"
                                            style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="coverpic" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Cover Picture</label>
                                        <input
                                            value={form.coverpic ? form.coverpic : ""}
                                            onChange={handleChange}
                                            type="text" name="coverpic" id="coverpic"
                                            placeholder="https://..."
                                            className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-[#9333ea]/40 focus:border-[#a855f7] focus:outline-none transition-colors placeholder:text-[#333]"
                                            style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* ── Divider ── */}
                        <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 50%,transparent)" }} />

                        {/* ── Section 03 — Payment ── */}
                        <div className="grid grid-cols-2 gap-17 items-start">

                            {/* Left label */}
                            <div>
                                <div className="inline-flex items-center gap-2 bg-[#9333ea]/10 border border-[#9333ea]/25 text-[#a855f7] text-[11px] font-black px-3 py-1.5 uppercase tracking-[0.08em] mb-5">
                                    <span className="text-[#9333ea]/60 font-black">03</span>
                                    Payment Details
                                </div>
                                <h2 className="font-black tracking-[-0.03em] text-white mb-4" style={{ fontSize: "clamp(20px,2.5vw,28px)" }}>
                                    Connect your<br /><span className="text-[#a855f7]">Razorpay account</span>
                                </h2>
                                <div className="border-l-4 border-[#9333ea] pl-5">
                                    <p className="text-[#555] text-[13px] leading-[1.8]">Your Key ID and Secret are used to process payments. Never share your secret with anyone.</p>
                                </div>
                            </div>

                            {/* Right fields */}
                            <div
                                className="bg-black border-2 border-[#9333ea] p-8"
                                style={{ clipPath: "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,0 100%)" }}
                            >
                                {/* Razorpay label strip */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex-1 h-px" style={{ background: "rgba(147,51,234,0.2)" }} />
                                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#a855f7] border border-[#9333ea]/30 px-3 py-1 bg-[#9333ea]/10">Razorpay</span>
                                    <div className="flex-1 h-px" style={{ background: "rgba(147,51,234,0.2)" }} />
                                </div>

                                <div className="flex flex-col gap-5">

                                    <div>
                                        <label htmlFor="razorpayid" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Razorpay ID</label>
                                        <input
                                            value={form.razorpayid ? form.razorpayid : ""}
                                            onChange={handleChange}
                                            type="text" name="razorpayid" id="razorpayid"
                                            placeholder="rzp_live_..."
                                            className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-[#9333ea]/40 focus:border-[#a855f7] focus:outline-none transition-colors placeholder:text-[#333]"
                                            style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
                                        />
                                        <p className="text-[11px] mt-1.5 text-[#444]">Key ID from your Razorpay dashboard</p>
                                    </div>

                                    <div>
                                        <label htmlFor="razorpaysecret" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Razorpay Secret</label>
                                        <input
                                            value={form.razorpaysecret ? form.razorpaysecret : ""}
                                            onChange={handleChange}
                                            type="password" name="razorpaysecret" id="razorpaysecret"
                                            placeholder="••••••••••••"
                                            className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-[#9333ea]/40 focus:border-[#a855f7] focus:outline-none transition-colors placeholder:text-[#333]"
                                            style={{ clipPath: "polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,0 100%)" }}
                                        />
                                        <p className="text-[11px] mt-1.5 text-[#444]">Never share this with anyone</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* ── Divider ── */}
                        <div className="h-px" style={{ background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.07) 50%,transparent)" }} />

                        {/* ── Save button ── */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#9333ea] hover:bg-[#a855f7] text-white font-bold text-[12px] uppercase tracking-[0.08em] px-12 py-4 transition-colors border-none cursor-pointer"
                                style={{ clipPath: "polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,0 100%)" }}
                            >
                                Save Changes
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default Dashboard