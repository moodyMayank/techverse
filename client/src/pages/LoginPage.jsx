import { Link, Navigate } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToDashBoard, setRedirectToDashBoard] = useState(false);
  const { setUser } = useContext(UserContext);

  const handleLoginSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/login", { email, password });
      console.log(data);
      setUser(data);
      setRedirectToDashBoard(true);
    } catch (err) {
      alert("Login Failed , try after sometime ", err);
    }
  };

  if (redirectToDashBoard) return <Navigate to={"/dashboard"} />;
  return (
    <div className="flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8 sm:py-16 lg:py-24  rounded-md">
      <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto  p-10 shadow-2xl">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Sign in
        </h2>
        <p className="mt-2 text-base text-gray-600">
          Don't have an account?
          <Link
            to={"/register"}
            className="ml-1 font-medium text-primary transition-all duration-200 hover:underline focus:text-primary"
          >
            Create a free account
          </Link>
        </p>
        <form className="mt-8" onSubmit={handleLoginSubmit}>
          <div className="space-y-5">
            <div>
              <label className="text-base font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label className="text-base font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
              </div>
            </div>
            <div>
              <button className="w-full inline-flex items-center justify-center rounded-md bg-primary px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-opacity-90">
                Get started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
