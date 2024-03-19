import bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import {User} from 'src/models/User';
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


const handler = NextAuth({
  secret: process.env.SECRET,
providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    id: 'credentials',
    
    credentials: {
      username: { label: "Email", type: "email", placeholder: "test@example.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const email = credentials?.email;
      const password = credentials?.password;
      
      mongoose.connect(process.env.MONGO_URL);
      const user = await User.findOne({email});
      const passwordOK = user && bcrypt.compareSync(password, user.password);

      console.log({passwordOK});

      if (passwordOK) {
        return user;
      }
      
      return null
    }
  })
],

});

export { handler as GET, handler as POST }