// src/app/layout.tsx
import { SessionProvider } from 'next-auth/react';
import './globals.css';
import { Inter } from 'next/font/google';
import WrapperComponent from "./WrapperComponent"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My MERN App',
  description: 'Full-stack app with Next.js and Prisma',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <WrapperComponent>{children}</WrapperComponent> {/* Wrapped in provider */}
      </body>
    </html>
  );
}


