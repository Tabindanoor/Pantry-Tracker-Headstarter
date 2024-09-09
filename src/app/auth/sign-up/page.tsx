import SignUpForm from "../../../components/ui/Input";

export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">Sign Up</h1>
      <SignUpForm />
    </div>
  );
}
