import React from 'react';

type UserProfileProps = {
  user: {
    name: string;
    email: string;
    image?: string;
  };
};

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex justify-center mt-8">
        <img
          className="w-24 h-24 rounded-full"
          src={user.image || '/default-avatar.png'}
          alt={`${user.name}'s profile`}
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
      </div>
      <div className="px-6 py-4 text-center">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
