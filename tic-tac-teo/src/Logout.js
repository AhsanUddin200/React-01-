import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="bg-red-500 text-black px-3 py-1 mt-3 ml-5 mb-3 rounded hover:bg-red-700 focus:outline-none focus:bg-red-600" onClick={() => logout({ logout: { returnTo: window.location.origin } })}>
      LogOut
    </button>
  );
};

export default LogoutButton;