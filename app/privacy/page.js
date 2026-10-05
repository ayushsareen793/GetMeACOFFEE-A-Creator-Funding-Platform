export const metadata = { title: "Privacy Policy | Get Me A Coffee" }

export default function Privacy() {
  return (
    <div className="bg-black min-h-screen text-white px-6 sm:px-10 md:px-16 py-16 max-w-3xl mx-auto">
      <h1 className="font-black text-4xl mb-6">Privacy Policy</h1>
      <p className="text-[#aaa] mb-4">
        GetMeACoffee is a student portfolio project. This page explains what data it uses.
      </p>

      <h2 className="font-bold text-xl mt-8 mb-2">What we collect</h2>
      <p className="text-[#aaa] mb-4">
        When you sign in with Google or GitHub, we receive your email address and use it to create your account and username.
        When someone supports a creator, we store the name, message and amount they enter.
      </p>

      <h2 className="font-bold text-xl mt-8 mb-2">How it is used</h2>
      <p className="text-[#aaa] mb-4">
        Your email is used only to log you in and show your profile. We do not sell or share your data.
        Payments are processed by Razorpay, and we never see or store card details.
      </p>

      <h2 className="font-bold text-xl mt-8 mb-2">Contact</h2>
      <p className="text-[#aaa]">
        For questions or to delete your data, email ayushsareen793@gmail.com.
      </p>
    </div>
  )
}