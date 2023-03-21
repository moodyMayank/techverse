import { UserContext } from "../context/UserContext";
import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const [redirect, setRedirect] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const logout = async () => {
    await axios.post("/logout");
    setRedirect(true);
    setUser(null);
  };

  if (redirect) return <Navigate to={"/"} />;
  if (user === null)
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-20 h-20 text-red-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-xl mt-4 text-gray-700">
          {" "}
          User is Not Signed In , Please Sign in first{" "}
        </span>
      </div>
    );
  return (
    <div className="mt-5 text-center max-w-lg mx-auto">
      <div>
        Logged in as {user?.username} {user?.email}
      </div>
      <br />
      <button
        onClick={logout}
        className="bg-primary py-2 px-4 rounded-lg max-w-sm mt-5"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
