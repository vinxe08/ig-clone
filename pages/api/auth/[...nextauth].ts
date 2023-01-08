import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID!,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET!,
    })
    // ...add more providers here
  ],
  
  // adapter: MongoDBAdapter(clientPromise), // THIS IS THE ISSUE
  secret: process.env.NEXTAUTH_SECRET!, 
  // generate-secret.vercel.app
  pages:{
    signIn: '/auth/signin',
  },
  
}
export default NextAuth(authOptions)



