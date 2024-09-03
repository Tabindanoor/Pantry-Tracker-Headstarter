// // src/pages/profile.tsx
// import { useSession } from "next-auth/react";
// import UserProfile from "../components/UserProfile";

// const Profile = () => {
//   const { data: session } = useSession();

//   return session ? <UserProfile user={session.user} /> : <p>Loading...</p>;
// };

// export default Profile;


import React from 'react';
import { useSession } from 'next-auth/react';
import UserProfile from '@/app/components/UserProfile';

const Profile = () => {
  const { data: session } = useSession();

  return session ? (
    <UserProfile user={session.user} />
  ) : (
    <p>Loading...</p>
  );
};

export default Profile;
