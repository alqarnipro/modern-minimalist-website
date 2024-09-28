"use client";

import { useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-3 drop-shadow-md my-4 mx-6 rounded-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-thin text-primary">
          <Link href="/home" className="flex items-center">
            Marketeer
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/home" className="text-gray-700 hover:text-secondary">
            Home
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-secondary">
            Services
          </Link>

          <Link href="/about" className="text-gray-700 hover:text-secondary">
            About
          </Link>
        </div>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-secondary px-4 py-2 rounded-full transition-colors text-black"
          >
            Let&apos;s Talk
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
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
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white text-center">
          <Link
            href="/"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            Services
          </Link>

          <Link
            href="/about"
            className="block py-2 px-4 text-gray-700 hover:bg-gray-100"
            onClick={toggleMenu}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
