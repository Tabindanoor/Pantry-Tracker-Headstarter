// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export const authOptions = {
//   adapter: PrismaAdapter(prisma),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   session: {
//     strategy: "jwt",
//   },
//   callbacks: {
//     async session({ session, token, user }:any) {
//       session.user.id = user.id;
//       return session;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };


// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
