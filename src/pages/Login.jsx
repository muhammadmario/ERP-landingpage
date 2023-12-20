import React from "react";

const Login = () => {
  return (
    <section className="bg-gray-200 flex items-center justify-center h-screen w-full">
      <div className="w-full md:w-2/3 max-w-md mx-auto bg-white p-8 rounded shadow-lg">
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="border-2 px-3 py-2 rounded-md"
          />
        </div>
        <div className="mb-3 flex flex-col gap-2">
          <label htmlFor="Passowrd">Password</label>
          <input
            type="password"
            className="border-2 px-3 py-2 rounded-md"
            placeholder="password"
          />
        </div>
      </div>

      <div className="hidden md:flex md:w-1/3 bg-cyan-400 h-screen  flex-col items-center justify-center">
        <h1 className="text-white text-5xl font-bold">New Here?</h1>
        <div className="mt-3">
          <p className="text-white text-center">
            Sign up and discover a great amount of new opportunities
          </p>
        </div>
        <div className="mt-3">
          <button className="bg-white px-6 py-2 rounded-md text-cyan-400">
            Sign up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
