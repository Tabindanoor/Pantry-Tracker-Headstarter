// import NextAuth from "next-auth";
// import { authConfig } from "@/lib/auth.config";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import db from "@/lib/db";

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   ...authConfig,
//   adapter: PrismaAdapter(db), // Using Prisma adapter for database connection
//   session: {
//     strategy: "jwt", // Using JWT-based session strategy
//   },
//   pages: {
//     signIn: "/login", // Define custom sign-in page
//   },
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         // Handling the user logic here
//         // Get user from DB with the email
//         const dbUser = await db.user.findUnique({
//           where: { email: user.email },
//         });

//         // If no user exists, create a new one
//         if (!dbUser) {
//           const newUser = await db.user.create({
//             data: { email: user.email, name: user.name },
//           });

//           token.id = newUser.id; // Setting user ID to the token
//         } else {
//           token.id = dbUser.id; // Assign existing user ID to token
//         }
//       }

//       return token;
//     },

//     async session({ session, token }) {
//       if (token) {
//         session.user.id = token.id; // Assign token data to session
//       }

//       return session;
//     },

//     redirect() {
//       return "/login"; // Define redirect behavior
//     },
//   },
// });



import { handlers } from "@/auth";

export const { GET, POST } = handlers;