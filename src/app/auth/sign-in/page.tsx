import { signIn } from "next-auth/react";
import AuthButton from "../../../components/ui/Button";

export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">Sign In</h1>
      <AuthButton provider="google" />
    </div>
  );
}
