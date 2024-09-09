import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform sign in using email and password
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      router.push("/dashboard"); // Redirect to dashboard on successful sign in
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col bg-white p-8 rounded shadow-md w-80">
        <h1 className="text-xl font-semibold mb-4">Sign In</h1>
        
        {error && <p className="text-red-500">{error}</p>}
        
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb-2 p-2 border rounded"
        />
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-4 p-2 border rounded"
        />
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
        
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={() => signIn("google")}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
}
