import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { User } from 'src/models/User';
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        // Check if email and password are provided
        if (!email || !password) {
          return null;
        }

        // Find user by email
        const user = await User.findOne({ email });

        // If user doesn't exist or password is incorrect
        if (!user || !bcrypt.compareSync(password, user.password)) {
          return null;
        }

        // If everything is okay, return the user
        return user;
      }
    })
  ]
});

export { handler as GET, handler as POST };