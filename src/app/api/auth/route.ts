import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import {compare} from "bcryptjs"
const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email }
        });

        if (user && (await compare(credentials?.password, user.password))) {
          return { id: user.id, email: user.email, name: user.name, image: user.image };
        }

        return null;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      const user = await prisma.user.findUnique({ where: { id: token.sub } });
      session.user = user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.sub = user.id;
      return token;
    }
  },
  pages: {
    signIn: '/auth/signin',
  }
});

export { handler as GET, handler as POST };
