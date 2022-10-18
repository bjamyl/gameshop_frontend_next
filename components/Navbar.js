import React from "react";
import { AiOutlineMenu, AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="m-2 flex items-center justify-between xl:mx-8">
        {/* Logo */}
        <div>
          <Link href='/'>
            <h1 className="text-xl xl:text-2xl font-bold">
              {" "}
              <span className="text-blue-500">Game</span>Shop
            </h1>
          </Link>
        </div>
        {/* Links or Menu */}
        <div>
          <div className="md:hidden">
            <AiOutlineMenu size={30} />
          </div>
          <ul className="hidden md:flex gap-8 font-semibold xl:text-lg">
            <li>Home</li>
            <li>Playstation</li>
            <li>Xbox</li>
            <li>PC and other accessories</li>
          </ul>
        </div>
        {/* Account buttons */}
        <div className="hidden md:flex gap-4">
          <button className="">
            <AiOutlineShopping size={30} />
            <span className="bg-red-600 text-white">2</span>
          </button>
          <button className="px-2 py-1 border xl:text-lg text-blue-700 xl:px-4 xl:py-2">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
