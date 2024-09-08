// src/app/page.tsx
"use client"; // Ensure this page is treated as a Client Component

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl">Signed in as {session.user?.name}</h1>
        {session.user?.image && (
          <img src={session.user.image} alt="Profile Image" className="rounded-full w-24 h-24" />
        )}

        <nav className="mt-4 space-x-4">
          <Link href="/dashboard" className="px-4 py-2 bg-green-500 text-white rounded">
            Go to Dashboard
          </Link>
          <Link href="/profile" className="px-4 py-2 bg-blue-500 text-white rounded">
            View Profile
          </Link>
        </nav>

        <button onClick={() => signOut()} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl">Welcome! Please sign in.</h1>
      <button
        onClick={() => signIn('google')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
