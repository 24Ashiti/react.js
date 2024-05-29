// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-xl font-bold">
          {/* <img src="/path/to/your/logo.png" alt="Logo" /> */}
          LOGO
        </div>
        <ul className="hidden md:flex md:space-x-4 md:justify-center md:w-full">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
        <div className="md:hidden mt-2 md:mt-0">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-center">
          <li>
            <Link to="/" className="block text-gray-400 hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="block text-gray-400 hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block text-gray-400 hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;