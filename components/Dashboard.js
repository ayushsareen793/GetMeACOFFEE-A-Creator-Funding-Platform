"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

const Dashboard = () => {
    const { data: session, status, update } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})
    const [oldusername, setOldusername] = useState("")

    useEffect(() => {
        if (status === "loading") return
        if (status === "unauthenticated") {
            router.push('/login')
            return
        }
        if (session?.user?.name) {
            getData()
        }
    }, [session, status])

    const getData = async () => {
        // Clear out any previous user's data taaki it does not stay on the screen
        setform({})
        setOldusername("")

        let u = await fetchuser(session.user.name)
        setform(u || {})
        setOldusername(u?.username || "")
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

            <div className="bg-black min-h-screen text-white">

                {/* heading */}
                <div className="px-6 sm:px-10 md:px-16 pt-10 md:pt-16 pb-8 md:pb-10 relative overflow-hidden border-b-2 border-purple-600/20">
                    <div className="absolute top-6 right-20 w-24 h-24 border-2 border-purple-600/20 rotate-45 pointer-events-none hidden sm:block" />
                    <div className="absolute top-10 right-32 w-14 h-14 bg-purple-900/20 rotate-45 pointer-events-none hidden sm:block" />
                    <div className="absolute bottom-0 right-10 w-16 h-16 border border-purple-600/15 -rotate-12 pointer-events-none hidden sm:block" />

                    <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 mb-6 w-fit">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                        Creator Dashboard
                    </div>

                    <h1 className="font-black leading-[0.92] tracking-[-0.04em] text-[clamp(32px,5vw,64px)]">
                        Welcome back,<br />
                        <span className="text-purple-400">{session?.user?.name || "Creator"}</span>
                    </h1>
                </div>

                
                <form onSubmit={handleSubmit}>
                    <div className="max-w-225 mx-auto px-6 sm:px-10 md:px-16 py-10 md:py-16 flex flex-col gap-12 md:gap-16">




                        {/*  basic information */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-17 items-start">

                            <div>
                                <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-black px-3 py-1.5 uppercase tracking-[0.08em] mb-5">
                                    <span className="text-purple-600/60 font-black">01</span>
                                    Basic Information
                                </div>
                                <h2 className="font-black tracking-[-0.03em] text-white mb-4 text-[clamp(20px,2.5vw,28px)]">
                                    Your public<br /><span className="text-purple-400">profile details</span>
                                </h2>
                                <div className="border-l-4 border-purple-600 pl-5">
                                    <p className="text-[#555] text-[13px] leading-[1.8]">This is what your supporters see when they visit your page. Make it count.</p>
                                </div>
                            </div>

                            <div className="bg-black border-2 border-purple-600 p-5 sm:p-8 ">
                                <div className="flex flex-col gap-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Name</label>
                                            <input value={form.name || ""} onChange={handleChange} type="text" name="name" id="name"
                                                className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-purple-600/40 focus:border-purple-500 focus:outline-none transition-colors"/>
                                        </div>
                                        <div>
                                            <label htmlFor="username" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Username</label>
                                            <input value={form.username || ""} onChange={handleChange} type="text" name="username" id="username"
                                                className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-purple-600/40 focus:border-purple-500 focus:outline-none transition-colors " />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Email</label>
                                        <input value={form.email || ""} onChange={handleChange} type="email" name="email" id="email"
                                            className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-purple-600/40 focus:border-purple-500 focus:outline-none transition-colors " />
                                    </div>
                                </div>
                            </div>
                        </div>




                        {/* divider */}
                        <div className="h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />





                        {/*  cover photo and profile pic */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-17 items-start">

                            <div>
                                <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-black px-3 py-1.5 uppercase tracking-[0.08em] mb-5">
                                    <span className="text-purple-600/60 font-black">02</span>
                                    Images
                                </div>
                                <h2 className="font-black tracking-[-0.03em] text-white mb-4 text-[clamp(20px,2.5vw,28px)]">
                                    Profile &amp;<br /><span className="text-purple-400">cover photos</span>
                                </h2>
                                <div className="border-l-4 border-purple-600 pl-5">
                                    <p className="text-[#555] text-[13px] leading-[1.8]">Paste a direct image URL for your profile picture and cover banner.</p>
                                </div>
                            </div>

                            <div className="bg-black border-2 border-purple-600 p-5 sm:p-8">
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <label htmlFor="profilepic" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Profile Picture</label>
                                        <input value={form.profilepic || ""} onChange={handleChange} type="text" name="profilepic" id="profilepic" placeholder="https://..." className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-purple-600/40 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-[#333] " />
                                    </div>
                                    <div>
                                        <label htmlFor="coverpic" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Cover Picture</label>
                                        <input value={form.coverpic || ""} onChange={handleChange} type="text" name="coverpic" id="coverpic" placeholder="https://..." className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-purple-600/40 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-[#333] " />
                                    </div>
                                </div>
                            </div>
                        </div>




                        {/* divider */}
                        <div className="h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />




                        {/*  razorpay id and secret section*/}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-17 items-start">

                            <div>
                                <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-black px-3 py-1.5 uppercase tracking-[0.08em] mb-5">
                                    <span className="text-purple-600/60 font-black">03</span>
                                    Payment Details
                                </div>
                                <h2 className="font-black tracking-[-0.03em] text-white mb-4 text-[clamp(20px,2.5vw,28px)]">
                                    Connect your<br /><span className="text-purple-400">Razorpay account</span>
                                </h2>
                                <div className="border-l-4 border-purple-600 pl-5">
                                    <p className="text-[#555] text-[13px] leading-[1.8]">Your Key ID and Secret are used to process payments. Never share your secret with anyone.</p>
                                </div>
                            </div>

                            <div className="bg-black border-2 border-purple-600 p-5 sm:p-8 ">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex-1 h-px bg-purple-600/20" />
                                    <span className="text-[10px] font-black uppercase tracking-[0.15em] text-purple-400 border border-purple-600/30 px-3 py-1 bg-purple-600/10">Razorpay</span>
                                    <div className="flex-1 h-px bg-purple-600/20" />
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div>
                                        <label htmlFor="razorpayid" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Razorpay ID</label>
                                        <input value={form.razorpayid || ""} onChange={handleChange} type="text" name="razorpayid" id="razorpayid" placeholder="rzp_live_..." className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-purple-600/40 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-[#333] " />
                                        <p className="text-[11px] mt-1.5 text-[#444]">Key ID from your Razorpay dashboard</p>
                                    </div>
                                    <div>
                                        <label htmlFor="razorpaysecret" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Razorpay Secret</label>
                                        <input value={form.razorpaysecret || ""} onChange={handleChange} type="password" name="razorpaysecret" id="razorpaysecret" placeholder="••••••••••••" className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-purple-600/40 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-[#333] " />
                                        <p className="text-[11px] mt-1.5 text-[#444]">Never share this with anyone</p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        {/* divider */}
                        <div className="h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />




                        {/*  about or bio section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-17 items-start">

                            <div>
                                <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-black px-3 py-1.5 uppercase tracking-[0.08em] mb-5">
                                    <span className="text-purple-600/60 font-black">04</span>
                                    About You
                                </div>
                                <h2 className="font-black tracking-[-0.03em] text-white mb-4 text-[clamp(20px,2.5vw,28px)]">
                                    Tell supporters<br /><span className="text-purple-400">what you create</span>
                                </h2>
                                <div className="border-l-4 border-purple-600 pl-5">
                                    <p className="text-[#555] text-[13px] leading-[1.8]">Describe the kind of content you post — streams, art, tutorials, music, whatever it is. This shows up on your public page and helps people decide to support you.</p>
                                </div>
                            </div>

                            <div className="bg-black border-2 border-purple-600 p-5 sm:p-8">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="bio" className="block mb-2 text-[11px] font-black uppercase tracking-widest text-[#555]">Bio</label>
                                    <textarea value={form.bio || ""} onChange={handleChange} name="bio" id="bio" rows={5} maxLength={500} placeholder="I make weekly coding tutorials on full-stack web dev, plus the occasional live debugging stream..." className="block w-full px-4 py-3 text-[13px] font-medium text-white bg-black border-2 border-purple-600/40 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-[#333] resize-none"/>
                                    <p className="text-[11px] text-[#444] text-right">{(form.bio || "").length}/500</p>
                                </div>
                            </div>
                        </div>




                        {/* divider */}
                        <div className="h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />





                        {/* Save button */}
                        <div className="flex justify-center">
                            <button type="submit" className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-[12px] uppercase tracking-[0.08em] px-8 sm:px-12 py-4 transition-colors border-none cursor-pointer [clip-path:polygon(0_0,calc(100%-10px)_0,100%_10px,100%_100%,0_100%)] w-full sm:w-auto">
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