import mongoose, { connect } from 'mongoose'
import NextAuth from 'next-auth'
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import User from '@/models/User'
import Payment from '@/models/Payment'
import connectDB from '@/db/connectDb'

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],

  //the call back api flow
  // User → GitHub/Google se login karta hai
  //          ↓
  // 1. Check karo: provider "github" ya "google" hai?
  //          ↓
  // 2. Database se connect karo (connectDB)
  //          ↓
  // 3. Database me dhundo — kya yeh email pehle se hai?
  //          ↓
  //    HAA hai?              NAHI hai?
  //    kuch mat karo    →   naya user banao
  //                         (email + username save karo,
  //                          username already liya hua ho to
  //                          unique bana do)


  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github" || account.provider === "google") {
        await connectDB()
        const currentUser = await User.findOne({ email: user.email })
        if (!currentUser) {
          const rawUsername = user.email.split("@")[0]
          const RESERVED = ["login", "signup", "dashboard", "api", "admin"]

          let username = RESERVED.includes(rawUsername)
            ? `${rawUsername}_${Date.now()}`
            : rawUsername

          // Two different emails can share the same prefix
          // (john@gmail.com vs john@yahoo.com) — make sure we don't
          // collide with an existing username before creating.
          const usernameTaken = await User.findOne({ username })
          if (usernameTaken) {
            username = `${rawUsername}_${Date.now()}`
          }

          await User.create({
            email: user.email,
            username,
          })
        }
        return true
      }
      return false
    },


    async session({ session, user, token }) {
      await connectDB()
      const dbuser = await User.findOne({ email: session.user.email })
      if (dbuser) {
        session.user.name = dbuser.username
      }
      return session
    },
  }
})
export { authoptions as GET, authoptions as POST }