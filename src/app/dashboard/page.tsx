import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">Dashboard</h1>
      {session?.user ? (
        <div>
          <p>Name: {session.user.name}</p>
          <p>Email: {session.user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
