"use client";
import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
}

const Mainbtn: React.FC<ButtonProps> = ({ text, link, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return link ? (
    <Link
      href={link}
      className="inline-flex items-center bg-secondary text-black px-4 py-2 rounded-full transition-all duration-300 hover:bg-lime-400 hover:scale-105"
      onClick={handleClick}
    >
      {text}
      <span className="ml-2">↗</span>
    </Link>
  ) : (
    <button
      onClick={handleClick}
      className="inline-flex items-center bg-secondary text-black px-4 py-2 rounded-full transition-all duration-300 hover:bg-lime-400 hover:scale-105"
    >
      {text}
      <span className="ml-2">↗</span>
    </button>
  );
};

export default Mainbtn;
