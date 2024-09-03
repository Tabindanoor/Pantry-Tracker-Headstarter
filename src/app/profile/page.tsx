// // import { useSession } from 'next-auth/react';

// // export default function Profile() {
// //   const { data: session } = useSession();

// //   if (!session) {
// //     return <p>Please sign in to view your profile.</p>;
// //   }

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-2xl font-bold">Profile</h1>
// //       <p>Email: {session.user.email}</p>
// //       <p>Name: {session.user.name}</p>
// //       <img src={session.user.image || '/default-profile.png'} alt="Profile Image" className="rounded-full w-32 h-32" />
// //     </div>
// //   );
// // }


// import { useSession } from "next-auth/react";

// export default function ProfilePage() {
//   const { data: session } = useSession();

//   if (!session) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-2xl font-bold mb-4">Profile</h1>
//       <p className="mb-2">Name: {session.user.name}</p>
//       <p className="mb-2">Email: {session.user.email}</p>
//       <img src={session.user.image || ""} alt="Profile Picture" className="rounded-full" />
//     </div>
//   );
// }
