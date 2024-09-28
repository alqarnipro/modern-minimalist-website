"use client";

import { useState } from "react";
import Link from "next/link";
import Mainbtn from "./mainBtn";
import Image from "next/image";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <nav className=" p-3 drop-shadow-md rounded-lg absolute top-5 left-5 right-5 bg-white ">
        <div className="container mx-auto flex justify-between items-center ">
          <div className="text-xl font-thin text-primary">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/1727485704687znlrq4uq-removebg-preview.png"
                alt="logo"
                width={40}
                height={40}
                className="me-2"
              />
              Marketeer
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-secondary">
              Home
            </Link>

            <Link href="/about" className="text-gray-700 hover:text-secondary">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-secondary"
            >
              Services
            </Link>
          </div>
          <div className="hidden md:block">
            <Mainbtn
              text="Let's Talk"
              onClick={() => console.log("Button clicked!")}
            ></Mainbtn>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
              aria-label="berger menu"
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
    </div>
  );
};

export default Navbar;
