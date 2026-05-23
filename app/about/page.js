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
    <div className="bg-[#0c0c0e] min-h-screen text-white">

      {/* Hero */}
      <div className="relative flex flex-col items-center justify-center text-center px-8 pt-20 pb-16 overflow-hidden">
        <div className="absolute w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(109,99,255,0.07)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="flex items-center gap-2 bg-[#a78bfa]/8 border border-[#a78bfa]/20 text-[#a78bfa] text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-7">
          <div className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
          Our Story
        </div>

        <h1 className="text-5xl font-extrabold tracking-tighter leading-[1.05] mb-5">
          Supporting creators,<br />
          <span className="bg-linear-to-r from-[#a78bfa] to-[#818cf8] bg-clip-text text-transparent">
            one coffee at a time
          </span>
        </h1>

        <p className="text-[#555] text-[15px] leading-relaxed max-w-md mb-8">
          GetMeACoffee is a simple, beautiful platform where fans support the creators they love. No subscriptions. No complexity. Just genuine appreciation.
        </p>


      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent mx-10" />

      {/* Mission */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-[#6c63ff] mb-3">Our Mission</p>
        <h2 className="text-center text-[30px] font-extrabold tracking-tight text-[#f0f0f8] mb-12">
          Built for creators who <span className="text-[#444]">create without limits</span>
        </h2>

        <div className="grid grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#6c63ff]/8 border border-[#6c63ff]/20 text-[#a78bfa] text-[12px] font-semibold px-3 py-1 rounded-full mb-5">
              Why we exist
            </div>
            <p className="text-[#555] text-[15px] leading-[1.85] mb-5">
              We believe every creator deserves to be supported for the value they bring. Whether you&apos;re a writer, artist, developer, or musician — your work matters, and your audience wants to say thank you.
            </p>
            <p className="text-[#555] text-[15px] leading-[1.85]">
              We built GetMeACoffee to make that as human and effortless as possible. No algorithms. No gatekeeping. Just you and your people.
            </p>
          </div>

          <div className="bg-[#111118] border border-white/6 hover:border-[#a78bfa]/20 rounded-[18px] p-7 transition-all duration-250">
            <div className="w-14 h-14 bg-[#6c63ff]/10 border border-[#6c63ff]/20 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-2xl"><img src="https://img.icons8.com/?size=160&id=58915&format=png" alt="" /></span>
            </div>
            <h3 className="font-bold text-[15px] text-[#e0e0f0] mb-2">Zero friction support</h3>
            <p className="text-[13px] text-[#555] leading-relaxed">
              Supporters land on your page, type a name, leave a message, pick an amount — done. No account needed. Pure appreciation, delivered instantly.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent mx-10" />

      {/* Features */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-[#6c63ff] mb-3">What we offer</p>
        <h2 className="text-center text-[30px] font-extrabold tracking-tight text-[#f0f0f8] mb-12">
          Everything you need to <span className="text-[#444]">get supported</span>
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: 'https://img.icons8.com/?size=160&id=dhtaSUStrLtV&format=png', title: 'Razorpay Payments', desc: 'Secure, fast payments in INR. Supporters pay any custom amount with ease.' },
            { icon: 'https://img.icons8.com/color/48/paint-palette.png', title: 'Beautiful Pages', desc: 'Customise your profile, cover photo, and bio. Your page, your vibe.' },
            { icon: 'https://img.icons8.com/color/48/combo-chart.png', title: 'Dashboard', desc: 'Create profile,add cover pic and supporter in one clean dashboard.' },
            { icon: 'https://img.icons8.com/color/48/lock-2.png', title: 'Secure & Private', desc: 'OAuth login, encrypted sessions — your data is always safe with us.' },
            { icon: 'https://img.icons8.com/color/48/lightning-bolt.png', title: 'Instant Setup', desc: 'Sign up, personalise,using your github account.' },
            { icon: 'https://img.icons8.com/color/48/nothing-found.png', title: 'No Platform Cut', desc: 'Every rupee your supporter sends goes straight to you. Always.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#111118] border border-white/6 hover:border-[#a78bfa]/20 hover:bg-[#13131e] hover:-translate-y-1 rounded-[18px] p-7 text-center transition-all duration-250">
              <div className="w-14 h-14 bg-[#6c63ff]/10 border border-[#6c63ff]/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <img src={item.icon} alt={item.title} className="w-7 h-7 object-contain" />
              </div>
              <h3 className="font-bold text-[15px] text-[#e0e0f0] mb-2">{item.title}</h3>
              <p className="text-[13px] text-[#555] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent mx-10" />

      {/* How it works */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-[#6c63ff] mb-3">How it works</p>
        <h2 className="text-center text-[30px] font-extrabold tracking-tight text-[#f0f0f8] mb-12">
          Three steps to start <span className="text-[#444]">earning support</span>
        </h2>

        {/* How it works */}
        <div className="max-w-4xl mx-auto px-8 py-16">
          <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-[#6c63ff] mb-3">How it works</p>
          <h2 className="text-center text-[30px] font-extrabold tracking-tight text-[#f0f0f8] mb-12">
            Three steps to start <span className="text-[#444]">earning support</span>
          </h2>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#111118] border border-white/6 hover:border-[#a78bfa]/20 hover:bg-[#13131e] hover:-translate-y-1 rounded-[18px] p-7 transition-all duration-250">
              <div className="text-[#6c63ff]/40 font-extrabold text-[28px] tracking-tight mb-4">01</div>
              <h3 className="font-bold text-[15px] text-[#e0e0f0] mb-2">First Log In</h3>
              <p className="text-[13px] text-[#555] leading-relaxed">Sign up with Google or GitHub, add your name, bio, email id or thorugh your github.You are good to go.</p>
            </div>

            <div className="bg-[#111118] border border-white/6 hover:border-[#a78bfa]/20 hover:bg-[#13131e] hover:-translate-y-1 rounded-[18px] p-7 transition-all duration-250">
              <div className="text-[#6c63ff]/40 font-extrabold text-[28px] tracking-tight mb-4">02</div>
              <h3 className="font-bold text-[15px] text-[#e0e0f0] mb-2">Create A Profile</h3>
              <p className="text-[13px] text-[#555] leading-relaxed">Create your profile by adding your coverpic, name, email etc into the dashboard.</p>
            </div>

            <div className="bg-[#111118] border border-white/6 hover:border-[#a78bfa]/20 hover:bg-[#13131e] hover:-translate-y-1 rounded-[18px] p-7 transition-all duration-250">
              <div className="text-[#6c63ff]/40 font-extrabold text-[28px] tracking-tight mb-4">03</div>
              <h3 className="font-bold text-[15px] text-[#e0e0f0] mb-2">Receive support</h3>
              <p className="text-[13px] text-[#555] leading-relaxed">Supporters visit your page, leave a message and pay any amount. Funds arrive in your account.</p>
            </div>
          </div>
        </div>


      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent mx-10" />

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <p className="text-center text-[11px] font-bold uppercase tracking-[2px] text-[#6c63ff] mb-3">Creators love us</p>
        <h2 className="text-center text-[30px] font-extrabold tracking-tight text-[#f0f0f8] mb-12">
          What people are <span className="text-[#444]">saying</span>
        </h2>

        <div className="grid grid-cols-3 gap-4">
          {[
            { quote: 'Set it up in two minutes. My first coffee came in the same day. This platform just works.', name: 'xxyx', handle: 'Indie developer', initials: 'AK' },
            { quote: 'I just wanted a simple tip jar. This is exactly that — no nonsense, just love from my readers.', name: 'xxzz', handle: 'Fiction writer', initials: 'SR' },
            { quote: "The messages my supporters leave make my day. GetMeACoffee feels personal in a way others don't.", name: 'zzzxx', handle: 'Music producer', initials: 'VN' },
          ].map((t, i) => (
            <div key={i} className="bg-[#111118] border border-white/6 hover:border-[#a78bfa]/20 hover:bg-[#13131e] rounded-[18px] p-7 transition-all duration-250">
              <p className="text-[13px] text-[#555] leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-linear-to-br from-[#6c63ff]/30 to-[#a78bfa]/15 border border-[#a78bfa]/20 flex items-center justify-center text-[11px] font-bold text-[#a78bfa]">
                  {t.initials}
                </div>
                <div>
                  <div className="text-[13px] font-semibold text-[#d0d0f0]">{t.name}</div>
                  <div className="text-[11px] text-[#444]">{t.handle}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent mx-10" />

      {/* CTA */}
      <div className="relative flex flex-col items-center justify-center text-center px-8 py-20 overflow-hidden">
        <div className="absolute w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(109,99,255,0.07)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <h2 className="text-[30px] font-extrabold tracking-tight text-[#f0f0f8] mb-4">
          Ready to start earning{' '}
          <span className="bg-linear-to-r from-[#a78bfa] to-[#818cf8] bg-clip-text text-transparent">
            what you deserve?
          </span>
        </h2>
        <p className="text-[#555] text-[15px] leading-relaxed max-w-md mb-8">
          Join GetMeACoffee and start getting recognition and support.
        </p>
        <button onClick={handlebutton} className="bg-linear-to-br from-[#6c63ff] to-[#a78bfa] text-white font-semibold text-sm px-7 py-3 rounded-xl transition-all duration-200 hover:opacity-85 hover:-translate-y-px">
          Create your page — it&apos;s free
        </button>
      </div>

    </div>
  )
}

export default AboutPage