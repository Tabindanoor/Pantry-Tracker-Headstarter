import { signIn } from "next-auth/react";
import { useState } from "react";

const AuthForm = ({ type }: { type: "login" | "signup" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "login") {
      await signIn("credentials", { email, password });
    } else {
      // Handle signup logic here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">{type === "login" ? "Login" : "Signup"}</button>
    </form>
  );
};

export default AuthForm;
