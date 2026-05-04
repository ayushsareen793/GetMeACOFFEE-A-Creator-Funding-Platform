import mongoose, { connect } from 'mongoose'
import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github"
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDb'

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],

//the call back api flow
// User → GitHub se login karta hai
//          ↓
// 1. Check karo: provider "github" hai?
//          ↓
// 2. Database se connect karo (connectDB)
//          ↓
// 3. Database me dhundo — kya yeh email pehle se hai?
//          ↓
//    HAA hai?              NAHI hai?
//    kuch mat karo    →   naya user banao
//                         (email + username save karo)
//          ↓
// 4. return true → login allow karo ✅


  callbacks: {
    async signIn({ user, account }) {
  if (account.provider === "github") {
    await connectDB()
    const currentUser = await User.findOne({ email: user.email }) // 
    if (!currentUser) {
      const rawUsername = user.email.split("@")[0]
      const RESERVED = ["login", "signup", "dashboard", "api", "admin"]
      await User.create({
        email: user.email,
        username: RESERVED.includes(rawUsername)
          ? `${rawUsername}_${Date.now()}`  // check krega 
          : rawUsername,
      })
    }
    return true
  }
  return false
},


    async session({session,user,token}){
      const dbuser=await User.findOne({email:session.user.email})
      session.user.name=dbuser.username
      return session
    },
  }
})
export { authoptions as GET, authoptions as POST }
