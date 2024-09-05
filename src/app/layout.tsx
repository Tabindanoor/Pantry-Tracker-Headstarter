import './globals.css';
import { Inter } from 'next/font/google';
import SessionProviderWrapper from './SessionProviderWrapper'; // New wrapper

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
        <SessionProviderWrapper>{children}</SessionProviderWrapper> {/* Wrapped in provider */}
      </body>
    </html>
  );
}
