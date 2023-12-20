import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };
  return (
    <nav className="bg-transparent absolute top-0 w-full z-20 start-0 border-b border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"}>
          <span className="self-center text-2xl whitespace-nowrap text-white font-bold">
            HOME
          </span>
        </Link>

        <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto  ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
            <Link
              to={"/"}
              className="block py-2 px-3 text-black m-auto rounded md:bg-transparent md:p-0 "
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/about"}
              className="block py-2 px-3 text-black m-auto rounded md:bg-transparent md:p-0 "
            >
              <li>About</li>
            </Link>

            <Link
              to={"/pricing"}
              className="block py-2 px-3 text-black m-auto rounded md:bg-transparent md:p-0 "
            >
              <li>Pricing</li>
            </Link>

            <Link
              to={"/contact"}
              className="block py-2 px-3 text-black m-auto rounded md:bg-transparent md:p-0 "
            >
              <li>Contact</li>
            </Link>

            <Link
              to={"/login"}
              className="bg-transparent border-2 border-cyan-400 py-2 px-11 rounded-md text-center text-cyan-400 "
            >
              Login
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;