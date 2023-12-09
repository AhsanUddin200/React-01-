import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    const delay = 1000; 

    if (!isLoading) {
      setTimeout(() => {
        setShowProfile(true);
      }, delay);
    }
  }, [isLoading]);

  if (isLoading) {
    return <div className="h-screen flex items-center justify-center">Loading ...</div>;
  }

  return (
    <div className="h-screen flex items-center justify-center">
      {showProfile && isAuthenticated && (
        <div className="text-center">
          <img src={user.picture} alt={user.name} className="mx-auto rounded-full" />
          <h2 className="text-2xl font-semibold mt-4">Welcome <br></br>{user.name}</h2>
          <p className="text-gray-600 mt-2">{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
