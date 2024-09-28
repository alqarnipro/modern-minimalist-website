import Link from "next/link";
import React from "react";
import Mainbtn from "./mainBtn";

const Footer = () => {
  return (
    <div className="bg-primary text-white py-16 px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">GET STARTED</h1>
        <h2 className="text-3xl mb-4">NOW</h2>
        <Mainbtn text="Let's Contact" link="/"></Mainbtn>
      </div>

      <p className="text-center mb-8">
        If you would like to work with us or just want to get in touch,
        we&apos;d love to hear from you!
      </p>

      <div className="flex justify-between items-center border-t border-gray-700 pt-8">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">London</h3>
          <p>
            Baltia Square, Mark Street,
            <br />
            London
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">New York</h3>
          <p>
            Neruysa Centre, Ella Street,
            <br />
            New York, USA
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Enter your email</h3>
          <div className="flex items-center border-b border-gray-700">
            <input
              type="email"
              className="bg-primary border-none w-full p-2 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
            />
            <button className="ml-2 text-white">➔</button>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-400 border-t border-gray-700 mt-8 pt-8">
        <p>© 2024 - 2025 | All rights reserved by Marketeer</p>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-white">
            About Us
          </Link>
          <Link href="/about" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/about" className="hover:text-white">
            Career
          </Link>
          <Link href="/about" className="hover:text-white">
            Sitemap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
