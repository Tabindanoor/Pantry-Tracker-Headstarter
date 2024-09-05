import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl">User Dashboard</h1>
      <p>Welcome, {session.user?.name}</p>
      <img src={session.user?.image || ""} alt="User Image" className="rounded-full" />
      <p>Email: {session.user?.email}</p>
    </div>
  );
}
