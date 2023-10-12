import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div>
      {isAuthenticated ? (   
          <p>Welcome, {user.name}</p>
      ) : (
        <button
          className="bg-blue-500 text-black px-3 py-1 mt-3 ml-5 rounded hover:bg-blue-700 focus:outline-none focus:bg-red-600"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
    </div>
  );                                                                                                                                                                                    
};
                                              
export default LoginButton;