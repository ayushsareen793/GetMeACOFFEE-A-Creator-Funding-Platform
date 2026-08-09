import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black border-t-2 border-purple-600/20 text-white'>

      <div className='max-w-4xl mx-auto px-6 sm:px-10 md:px-2 py-10 md:py-10'>

        <div className='flex flex-col md:flex-row md:justify-between gap-10'>

          {/* brand */}
          <div className='md:max-w-60'>
            <div className='flex items-center gap-3 mb-4'>
              <div className='w-9 h-9 bg-purple-600 flex items-center justify-center [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]'>
                <img src="https://api.iconify.design/mdi/coffee.svg?color=white" width={18} height={18} alt="" />
              </div>
              <span className='text-[17px] font-black tracking-tight'>
                GET<span className='text-purple-400'>MEACOFFEE</span>
              </span>
            </div>
            <p className='text-[#666] text-[13px] leading-[1.7]'>
              A simple way for fans to support the creators they love. No subscriptions, no complexity, just genuine appreciation.
            </p>
          </div>

          {/* quick links */}
          <div>
            <p className='text-[11px] font-black uppercase tracking-[0.15em] text-purple-400 mb-4'>Quick Links</p>
            <div className='flex flex-col gap-2.5'>
              <a href="/" className='text-[#888] hover:text-purple-400 text-[13px] transition-colors w-fit'>Home</a>
              <a href="/about" className='text-[#888] hover:text-purple-400 text-[13px] transition-colors w-fit'>About Us</a>
              <a href="/dashboard" className='text-[#888] hover:text-purple-400 text-[13px] transition-colors w-fit'>Dashboard</a>
              <a href="/Login" className='text-[#888] hover:text-purple-400 text-[13px] transition-colors w-fit'>Login</a>
            </div>
          </div>

          {/* connect */}
          <div>
            <p className='text-[11px] font-black uppercase tracking-[0.15em] text-purple-400 mb-4'>Connect</p>
            <div className='flex gap-2.5'>
              <a href="https://github.com/ayushsareen793" target="_blank" rel="noopener noreferrer"
                className='w-8 h-8 bg-white/5 border border-white/10 hover:border-purple-500 hover:bg-purple-600/20 flex items-center justify-center transition-colors'>
                <img src="https://img.icons8.com/fluency/48/github.png" alt="GitHub" width={20} height={20} />
              </a>
              <a href="mailto:ayushsareen793@gmail.com"
                className='w-8 h-8 bg-white/5 border border-white/10 hover:border-purple-500 hover:bg-purple-600/20 flex items-center justify-center transition-colors'>
                <img src="https://img.icons8.com/color/48/gmail-new.png" alt="Email" width={20} height={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className='w-8 h-8 bg-white/5 border border-white/10 hover:border-purple-500 hover:bg-purple-600/20 flex items-center justify-center transition-colors'>
                <img src="https://img.icons8.com/color/48/linkedin.png" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
            <p className='text-[#444] text-[12px] mt-4 leading-[1.6] max-w-45'>Questions or feedback? Reach out anytime.</p>
          </div>

        </div>

        {/* bottom bar */}
        <div className='mt-10 pt-6 border-t border-purple-600/10 flex flex-col sm:flex-row items-center justify-between gap-3'>
          <p className='text-[#444] text-[12px]'>
            © 2026 <a href="/" className='text-[#666] hover:text-purple-400 transition-colors'>GetMeACoffee</a>. Made for creators everywhere.
          </p>
          <p className='text-[#333] text-[11px] uppercase tracking-widest'>Built For The Creators</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer