// // src/app/profile/page.tsx
// "use client";

// import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// export default function Profile() {
//   const { data: session } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (!session) {
//       router.push("/signin");
//     }
//   }, [session, router]);

//   if (!session) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>User Profile</h1>
//       <p>Name: {session.user?.name}</p>
//       <p>Email: {session.user?.email}</p>
//       <img src={session.user?.image || ""} alt={session.user?.name || "User Image"} />
//       <button onClick={() => signOut()}>Logout</button>
//     </div>
//   );
// }


"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/signin");
    }
  }, [session, router]);

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {session.user?.name}</p>
      <p>Email: {session.user?.email}</p>
      <img src={session.user?.image || ""} alt={session.user?.name || "User Image"} />
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
