import { signIn } from "next-auth/react";

export default function AuthButton({ provider }: { provider: string }) {
  return (
    <button
      onClick={() => signIn(provider)}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Sign in with {provider}
    </button>
  );
}
