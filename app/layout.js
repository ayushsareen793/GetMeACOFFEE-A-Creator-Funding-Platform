import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "GetMeACoffee | Fund Your Passion, One Coffee at a Time",
  description: "A crowdfunding platform for creators. Get funded by your fans and followers and keep doing what you love.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col  bg-[#0c0c0e] text-white">
       <SessionWrapper>
        <Navbar />
        <div className="min-h-screen bg-[#0c0c0e]  text-white">
          {children}
        </div>
        <Footer/>
       </SessionWrapper>
      </body>
    </html>
  );
}