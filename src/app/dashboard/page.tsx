// src/app/dashboard/page.tsx
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function Dashboard() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/signin");
  }

  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email || "" },
  });

  return (
    <div className="mt-20 text-center">
      <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      <p className="mt-2">Email: {user?.email}</p>
      <p className="mt-2">User ID: {user?.id}</p>
    </div>
  );
}
