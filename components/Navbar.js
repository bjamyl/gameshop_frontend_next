import React from "react";
import { AiOutlineMenu, AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";

export default function Navbar() {
  const { showCart, setShowCart, totalQuantity } = useStateContext();
  return (
    <nav>
      <div className="m-2 flex items-center justify-between xl:mx-8">
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="text-xl xl:text-2xl font-bold">
              {" "}
              <span className="text-blue-500">Game</span>Shop
            </h1>
          </Link>
        </div>
        {/* Links or Menu */}
        <div>
          <div className=" flex gap-4 md:hidden">
            <button className="relative" onClick={() => setShowCart(true)}>
              <AiOutlineShopping size={30} />
              <span className="bg-blue-600 font-bold absolute -top-1 -right-2 text-white rounded-full w-6">
                {totalQuantity}
              </span>
            </button>
            <button>
              <AiOutlineMenu size={30} />
            </button>
          </div>
          <ul className="hidden md:flex gap-8 font-semibold xl:text-lg">
            <Link href="/products">
              <li>All Products</li>
            </Link>
            <li>Playstation</li>
            <li>Xbox</li>
            <li>PC and other accessories</li>
          </ul>
        </div>
        {/* Account buttons */}
        <div className="hidden md:flex gap-4">
          <button className="relative" onClick={() => setShowCart(!showCart)}>
            <AiOutlineShopping size={30} />
            <span className="bg-blue-600 font-bold absolute rounded-full w-6 h-6 flex items-center justify-center top-0 -right-3 text-white">
              {totalQuantity}
            </span>
          </button>
          <button className="px-2 py-1 border xl:text-lg text-blue-700 xl:px-4 xl:py-2">
            Sign Up
          </button>
        </div>
        {showCart && <Cart />}
      </div>
    </nav>
  );
}
