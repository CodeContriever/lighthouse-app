import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcrypt';
import connectDB from './lib/connectDB';
import Users from '../../../models/userModel'
connectDB();

export default NextAuth({
    session: {
        strategy: "jwt"
    },
    //Specify Provider
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const email = credentials.email;
                const password = credentials.password;
                const user = await Users.findOne({ email })
                if (!user) {
                    throw new Error("You have not been registerd yet")
                }
                if (user) {
                    return signInUser({ password, user })
                }
            }
        }),

        GoogleProvider({
            name: "Google",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
    ],
    pages: {
        signIn: "/signin"
    },

    database: process.env.MONGODB_URI,

    session: {
        jwt: true
    },

    jwt: {
        secret: process.env.JWT_SECRET,
    },

    callbacks: {
        async signIn({ account, profile }) {
          if (account.provider === "google") {
            return profile.email_verified && profile.email.endsWith("@gmail.com")
          }
          return true // Do different verification for other providers that don't have `email_verified`
        },
      }
    

    // callbackUrl: {
    //     name: `__Secure-next-auth.callback-url`,
    //     options: {
    //         sameSite: 'lax',
    //         path: '/home',
    //         secure: true
    //     }
    // },


});

const signInUser = async ({ password, user }) => {
    if (!user.password) {
        throw new Error("Please enter password")
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("Password not correct")
    }
    return user
}