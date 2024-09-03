// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaClient } from "@prisma/client";
// import bcrypt from "bcryptjs";

// const prisma = new PrismaClient();

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//     CredentialsProvider({
//       async authorize(credentials) {
//         const user = await prisma.user.findUnique({
//           where: { email: credentials!.email },
//         });
//         if (user && bcrypt.compareSync(credentials!.password, user.password!)) {
//           return user;
//         }
//         return null;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     async session({ session }) {
//       const user = await prisma.user.findUnique({
//         where: { email: session.user?.email! },
//       });
//       session.user = user;
//       return session;
//     },
//   },
// };

// export default NextAuth(authOptions);

import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      // Custom authorize function for handling email/password login
      async authorize(credentials) {
        // Find user by email
        const user = await prisma.user.findUnique({
          where: { email: credentials!.email },
        });
        
        // Check if user exists and password is correct
        if (user && bcrypt.compareSync(credentials!.password, user.password!)) {
          return user;
        }
        
        // Return null if authentication fails
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirect to the custom login page
  },
  callbacks: {
    async session({ session }) {
      // Attach full user object to the session
      const user = await prisma.user.findUnique({
        where: { email: session.user?.email! },
      });
      session.user = user;
      return session;
    },
  },
};

export default NextAuth(authOptions);
