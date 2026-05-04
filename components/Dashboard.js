
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
            <div className='container mx-auto py-5 px-6 '>
                <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>

                <form onSubmit={handleSubmit} action={handleSubmit} className="flex flex-col gap-5">

                    {/* Section — Basic Info */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-semibold" style={{ background: '#1a1635', border: '1px solid #3b2d6e', color: '#a78bfa' }}>01</div>
                            <div>
                                <p className="text-sm font-semibold" style={{ color: '#c4b5fd' }}>Basic Information</p>
                                <p className="text-xs" style={{ color: '#5b4f88' }}>Your public profile details</p>
                            </div>
                        </div>
                        <div className="rounded-2xl p-5 relative" style={{ background: '#110e24', border: '1px solid #1f1b38' }}>
                            <div className="absolute top-0 left-6 right-6 h-px" style={{ background: '#3b2d6e' }}></div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="my-1">
                                    <label htmlFor="name" className="block mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#7c6faa' }}>Name</label>
                                    <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name='name' id="name"
                                        className="block w-full p-2.5 text-sm rounded-xl focus:ring-violet-600 focus:border-violet-600"
                                        style={{ background: '#0d0b1a', border: '1px solid #2a2450', color: '#e9d5ff' }} />
                                </div>
                                <div className="my-1">
                                    <label htmlFor="username" className="block mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#7c6faa' }}>Username</label>
                                    <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id="username"
                                        className="block w-full p-2.5 text-sm rounded-xl focus:ring-violet-600 focus:border-violet-600"
                                        style={{ background: '#0d0b1a', border: '1px solid #2a2450', color: '#e9d5ff' }} />
                                </div>
                                <div className="my-1 sm:col-span-2">
                                    <label htmlFor="email" className="block mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#7c6faa' }}>Email</label>
                                    <input value={form.email ? form.email : ""} onChange={handleChange} type="email" name='email' id="email"
                                        className="block w-full p-2.5 text-sm rounded-xl focus:ring-violet-600 focus:border-violet-600"
                                        style={{ background: '#0d0b1a', border: '1px solid #2a2450', color: '#e9d5ff' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section — Images */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-semibold" style={{ background: '#1a1635', border: '1px solid #3b2d6e', color: '#a78bfa' }}>02</div>
                            <div>
                                <p className="text-sm font-semibold" style={{ color: '#c4b5fd' }}>Images</p>
                                <p className="text-xs" style={{ color: '#5b4f88' }}>Profile and cover photos</p>
                            </div>
                        </div>
                        <div className="rounded-2xl p-5 relative" style={{ background: '#110e24', border: '1px solid #1f1b38' }}>
                            <div className="absolute top-0 left-6 right-6 h-px" style={{ background: '#3b2d6e' }}></div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="my-1">
                                    <label htmlFor="profilepic" className="block mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#7c6faa' }}>Profile Picture</label>
                                    <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name='profilepic' id="profilepic"
                                        placeholder="https://..."
                                        className="block w-full p-2.5 text-sm rounded-xl focus:ring-violet-600 focus:border-violet-600"
                                        style={{ background: '#0d0b1a', border: '1px solid #2a2450', color: '#e9d5ff' }} />
                                </div>
                                <div className="my-1">
                                    <label htmlFor="coverpic" className="block mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#7c6faa' }}>Cover Picture</label>
                                    <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name='coverpic' id="coverpic"
                                        placeholder="https://..."
                                        className="block w-full p-2.5 text-sm rounded-xl focus:ring-violet-600 focus:border-violet-600"
                                        style={{ background: '#0d0b1a', border: '1px solid #2a2450', color: '#e9d5ff' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section — Payment */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-3">
                            <div className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-semibold" style={{ background: '#1a1635', border: '1px solid #3b2d6e', color: '#a78bfa' }}>03</div>
                            <div>
                                <p className="text-sm font-semibold" style={{ color: '#c4b5fd' }}>Payment Details</p>
                                <p className="text-xs" style={{ color: '#5b4f88' }}>Connect your Razorpay account</p>
                            </div>
                        </div>
                        <div className="rounded-2xl p-5 relative" style={{ background: '#110e24', border: '1px solid #1f1b38' }}>
                            <div className="absolute top-0 left-6 right-6 h-px" style={{ background: '#3b2d6e' }}></div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex-1 h-px" style={{ background: '#1f1b38' }}></div>
                                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: '#2e1065', border: '1px solid #5b21b6', color: '#c4b5fd', letterSpacing: '0.05em' }}>RAZORPAY</span>
                                <div className="flex-1 h-px" style={{ background: '#1f1b38' }}></div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="my-1">
                                    <label htmlFor="razorpayid" className="block mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#7c6faa' }}>Razorpay Id</label>
                                    <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name='razorpayid' id="razorpayid"
                                        placeholder="rzp_live_..."
                                        className="block w-full p-2.5 text-sm rounded-xl focus:ring-violet-600 focus:border-violet-600"
                                        style={{ background: '#0d0b1a', border: '1px solid #2a2450', color: '#e9d5ff' }} />
                                    <p className="text-xs mt-1.5" style={{ color: '#4a4070' }}>Key ID from Razorpay dashboard</p>
                                </div>
                                <div className="my-1">
                                    <label htmlFor="razorpaysecret" className="block mb-2 text-xs font-semibold uppercase tracking-wider" style={{ color: '#7c6faa' }}>Razorpay Secret</label>
                                    <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="password" name='razorpaysecret' id="razorpaysecret"
                                        placeholder="••••••••••••"
                                        className="block w-full p-2.5 text-sm rounded-xl focus:ring-violet-600 focus:border-violet-600"
                                        style={{ background: '#0d0b1a', border: '1px solid #2a2450', color: '#e9d5ff' }} />
                                    <p className="text-xs mt-1.5" style={{ color: '#4a4070' }}>Never share this with anyone</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* buttons */}
                    <div className="flex gap-3 mt-1">
                        <button type="submit" className="flex-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.99]"
                            style={{ background: '#6d28d9', border: '1px solid #7c3aed', color: '#f0ebff' }}>
                            Save Changes
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Dashboard