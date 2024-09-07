// src/app/auth/signin/page.tsx
import { getProviders, signIn } from "next-auth/react";

export default async function SignIn() {
  const providers = await getProviders();

  return (
    <div className="flex justify-center mt-20">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Sign In</h1>
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
