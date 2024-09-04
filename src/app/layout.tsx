// // import type { Metadata } from "next";
// // import { Inter } from "next/font/google";
// // import "./globals.css";
// // import ClientWrapper from "./components/ClientWrapper";

// // const inter = Inter({ subsets: ["latin"] });

// // export const metadata: Metadata = {
// //   title: "Create Next App",
// //   description: "Generated by create next app",
// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body className={inter.className}>
// //         <ClientWrapper>        
// //           {children}
// //         </ClientWrapper>
// //         </body>
// //     </html>
// //   );
// // }

// import Link from "next/link";
// import { Providers } from "../store/Providers";
// import { SessionProvider } from "next-auth/react";
// // import { useSession } from "next-auth/react";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <SessionProvider>
//         <Providers>
//           <nav>
//             <Link href="/">Home</Link>
//             <Link href="/profile">Profile</Link>
//             <Link href="/signin">Sign In</Link>
//           </nav>
//           {children}
//         </Providers>
//         </SessionProvider>
//       </body>
//     </html>
//   );
// }

// src/app/layout.tsx
import Link from "next/link";
import { Providers } from "@/store/Providers";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Providers>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/profile">Profile</Link>
              <Link href="/signin">Sign In</Link>
            </nav>
            {children}
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
