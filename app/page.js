"use client"
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser } from "@/actions/useractions";

export default function page() {
  const { data: session } = useSession();
  const router = useRouter();
  const [supporterUsername, setSupporterUsername] = useState("");
  const [checking, setChecking] = useState(false);
  const [searchError, setSearchError] = useState("");

  //function to find to your creator page : it searches from the database if the creator has created the profile , if he is a creator on this profile then it redirect to the profile of the creator  
  const handleGoToCreator = async (e) => {
    e.preventDefault();
    const uname = supporterUsername.trim();
    if (!uname) {
      return;
    }
    setSearchError("");
    setChecking(true);
    const user = await fetchuser(uname);
    setChecking(false);

    if (user) {
      router.push(`/${uname}`);
    } else {
      setSearchError(`No creator found with the username "${uname}"`);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">

      <div className="bg-black grid grid-cols-1 md:grid-cols-2 min-h-screen overflow-hidden">


        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 py-12 md:py-20 relative z-10">

          {/* badge */}
          <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-600/25 text-purple-400 text-[11px] font-bold uppercase tracking-widest px-4 py-1.5 mb-7 w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
            For creators everywhere
          </div>

          <h1 className="font-black leading-[0.92] tracking-[-0.04em] mb-8 text-[clamp(40px,8vw,100px)]">
            Fund Your<br />
            <span className="text-purple-400">Passion</span><br />
            <span className="text-[#333]">One Coffee At A Time</span>
          </h1>

          <div className="border-l-4 border-purple-600 pl-5 mb-10">
            <p className="text-[#cccccc] text-[16px] leading-[1.7] max-w-full md:max-w-120">
              A crowd funding platform for creators. Get funded by your fans and followers and keep doing what you love.
            </p>
          </div>

          <div className="flex gap-4 mb-16 flex-wrap">
            <button onClick={() => session ? router.push("/dashboard") : router.push("/Login")} className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-[12px] uppercase tracking-[0.08em] px-6 sm:px-10 py-4.5 transition-colors border-none cursor-pointer">
              Start Here
            </button>
            <button onClick={() => router.push("/about")} className="bg-black border-2 border-purple-600 hover:bg-purple-600/10 text-white font-bold text-[12px] uppercase tracking-[0.08em] px-6 sm:px-10 py-4.5 transition-colors cursor-pointer">
              About Us
            </button>
          </div>




          {/* Promise to creators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t-2 border-purple-600/20">
            <div className="pt-6 pr-6 sm:border-r-2 border-purple-600/20 pb-6 sm:pb-0">
              <img src="https://img.icons8.com/color/48/like--v1.png" width={22} height={22} alt="" className="mb-2" />
              <div className="text-[15px] font-black tracking-[-0.02em] leading-snug text-white">Your Work</div>
              <div className="text-[11px] text-[#555] uppercase tracking-[0.08em] mt-1">Always yours, always valued</div>
            </div>
            <div className="pt-6 sm:px-6 sm:border-r-2 border-purple-600/20 pb-6 sm:pb-0">
              <img src="https://img.icons8.com/color/48/conference-call.png" width={22} height={22} alt="" className="mb-2" />
              <div className="text-[15px] font-black tracking-[-0.02em] leading-snug text-white">Your Audience</div>
              <div className="text-[11px] text-[#555] uppercase tracking-[0.08em] mt-1">Fans who truly care</div>
            </div>
            <div className="pt-6 sm:pl-6">
              <img src="https://img.icons8.com/color/48/money-bag.png" width={22} height={22} alt="" className="mb-2" />
              <div className="text-[15px] font-black tracking-[-0.02em] leading-snug text-white">Your Money</div>
              <div className="text-[11px] text-[#555] uppercase tracking-[0.08em] mt-1">Every rupee, no cuts</div>
            </div>
          </div>
        </div>



        {/*  geometric shapes */}
        <div className="relative overflow-hidden bg-[#0d0d12] hidden md:block min-h-75">
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
        </div>
      </div>





      {/* divider */}
      <div className="h-px mx-6 sm:mx-10 bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />






      {/* features section */}
      <div className="max-w-225 mx-auto px-6 sm:px-10 py-14 md:py-20">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.18em] text-purple-600 mb-3">How it works</p>
        <h2 className="text-center font-black tracking-[-0.03em] text-white mb-12 text-[clamp(22px,3vw,30px)]">
          Your fans can buy you a <span className="text-[#444]">coffee</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

          {/* card 1 */}
          <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default -m-px">
            <div className="w-15 h-15 bg-purple-600/10 border-2 border-purple-600/25 flex items-center justify-center mx-auto mb-5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
              <img src="man.gif" width={32} alt="" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Fund Yourself</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Your fans are always available to help you grow</p>
          </div>

          {/* card 2 */}
          <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default -m-px">
            <div className="w-15 h-15 bg-purple-600/10 border-2 border-purple-600/25 flex items-center justify-center mx-auto mb-5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
              <img src="coin.gif" width={32} alt="" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Earn Freely</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Receive direct contributions without limits</p>
          </div>

          {/* card 3 */}
          <div className="bg-black border-2 border-purple-600 hover:border-purple-500 hover:bg-[#0d0d18] p-8 text-center transition-all duration-200 hover:-translate-y-1 cursor-default -m-px">
            <div className="w-15 h-15 bg-purple-600/10 border-2 border-purple-600/25 flex items-center justify-center mx-auto mb-5 [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]">
              <img src="group.gif" width={32} alt="" />
            </div>
            <h3 className="font-black text-[15px] text-[#e0e0f0] mb-2 tracking-[-0.01em]">Build Community</h3>
            <p className="text-[13px] text-[#505068] leading-[1.65]">Grow a loyal audience that supports you</p>
          </div>

        </div>
      </div>




      {/* divider */}
      <div className="h-px mx-6 sm:mx-10 bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />




      {/* find a creator feature */}
      <div className="max-w-225 mx-auto px-6 sm:px-10 py-14 md:py-20">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.18em] text-purple-600 mb-3">Already supporting someone?</p>
        <h2 className="text-center font-black tracking-[-0.03em] text-white mb-3 text-[clamp(22px,3vw,30px)]">
          Find a <span className="text-[#444]">creator</span>
        </h2>
        <p className="text-center text-[#666] text-[14px] mb-10 max-w-100 mx-auto">
          Got a username from a creator you want to support? Enter it below to go straight to their page.
        </p>

        <form onSubmit={handleGoToCreator} className="flex flex-col sm:flex-row gap-3 max-w-125 mx-auto">
          <input value={supporterUsername} onChange={(e) => { setSupporterUsername(e.target.value); if (searchError) setSearchError(""); }} type="text" placeholder="Enter creator's username" className="flex-1 px-4 py-3.5 text-[13px] font-medium text-white bg-black border-2 border-purple-600/40 focus:border-purple-500 focus:outline-none transition-colors placeholder:text-[#333]"/>
          <button type="submit" disabled={checking} className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-[12px] uppercase tracking-[0.08em] px-8 py-3.5 transition-colors border-none cursor-pointer">
            {checking ? "Checking..." : "Go to Page"}
          </button>
        </form>
        {searchError && (
          <p className="text-center text-red-400 text-[13px] mt-4">{searchError}</p>
        )}
      </div>




      {/* divider */}
      <div className="h-px mx-6 sm:mx-10 bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />




      {/* FAQ section */}
      <div className="max-w-300 mx-auto px-6 sm:px-10 py-14 md:py-20">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.18em] text-purple-600 mb-3">Got questions?</p>
        <h2 className="text-center font-black tracking-[-0.03em] text-white mb-12 text-[clamp(22px,3vw,30px)]">
          Frequently asked <span className="text-[#444]">questions</span>
        </h2>

        <div className="max-w-250 mx-auto flex flex-col gap-3">

          <details className="group border-2 border-purple-600/40 bg-black">
            <summary className="flex items-center justify-between px-6 py-4 text-white font-bold text-[14px] tracking-[-0.01em] cursor-pointer list-none">
              Is it free to sign up?
              <span className="text-purple-400 text-[18px] transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="px-6 pb-5 text-[#888] text-[13px] leading-[1.7]">
              Yes, creating an account and setting up your page is completely free.
            </p>
          </details>

          <details className="group border-2 border-purple-600/40 bg-black">
            <summary className="flex items-center justify-between px-6 py-4 text-white font-bold text-[14px] tracking-[-0.01em] cursor-pointer list-none">
              Do you take a cut from support?
              <span className="text-purple-400 text-[18px] transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="px-6 pb-5 text-[#888] text-[13px] leading-[1.7]">
              No, every rupee your fans send goes directly to you , no platform fees.
            </p>
          </details>

          <details className="group border-2 border-purple-600/40 bg-black">
            <summary className="flex items-center justify-between px-6 py-4 text-white font-bold text-[14px] tracking-[-0.01em] cursor-pointer list-none">
              How fast do I get paid?
              <span className="text-purple-400 text-[18px] transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="px-6 pb-5 text-[#888] text-[13px] leading-[1.7]">
              Payments are processed instantly and reflect in your dashboard right away.
            </p>
          </details>

          <details className="group border-2 border-purple-600/40 bg-black">
            <summary className="flex items-center justify-between px-6 py-4 text-white font-bold text-[14px] tracking-[-0.01em] cursor-pointer list-none">
              Can supporters stay anonymous?
              <span className="text-purple-400 text-[18px] transition-transform duration-200 group-open:rotate-45">+</span>
            </summary>
            <p className="px-6 pb-5 text-[#888] text-[13px] leading-[1.7]">
              Yes, supporters can choose to leave a message and contribution without revealing their identity.
            </p>
          </details>

        </div>
      </div>




      {/* divider */}
      <div className="h-px mx-6 sm:mx-10 bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />




      {/* final CTA banner */}
      <div className="max-w-325 mx-auto px-6 sm:px-10 py-16 md:py-24 text-center">
        <h2 className="font-black leading-[0.95] tracking-[-0.03em] mb-6 text-[clamp(28px,5vw,56px)] text-white">
          Ready to get <span className="text-purple-400">funded?</span>
        </h2>
        <p className="text-[#888] text-[15px] leading-[1.7] mb-8 max-w-100 mx-auto">
          Join creators already earning support from fans who believe in their work.
        </p>
        <button onClick={() => (session ? router.push("/dashboard") : router.push("/Login"))} className="bg-purple-600 hover:bg-purple-500 text-white font-bold text-[12px] uppercase tracking-[0.08em] px-10 py-4.5 transition-colors border-none cursor-pointer">
          Start Here
        </button>
      </div>

    </div>
  );
}

