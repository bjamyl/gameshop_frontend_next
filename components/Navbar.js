import React from "react";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import {RiSearchLine} from 'react-icons/ri'
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import Cart from "./Cart";
import Menu from "./Menu";
import Search from "./Search";

export default function Navbar() {
  const { showCart, setShowCart, totalQuantity, showMenu, setShowMenu, showSearch, setShowSearch } =
    useStateContext();
  return (
    <nav className="fixed top-0 w-full bg-slate-100 border z-50">
      <div className="m-2 flex items-center justify-between xl:mx-10 xl:my-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <h1 className="text-xl xl:text-3xl text-gray-700 font-bold cursor-pointer">
              <span className="text-blue-500">Game</span>Shop
            </h1>
          </Link>
        </div>
        {/* Links or Menu */}
        <div>
          <div className=" flex gap-4 md:hidden">
          <button onClick={()=> setShowSearch(!showSearch)} className=" hover:-translate-y-1 transition-all duration-75">
            <RiSearchLine size={30}/>
          </button>
            <button className="relative" onClick={() => setShowCart(true)}>
              <AiOutlineShoppingCart size={30} />
              <span className="bg-blue-600 font-bold absolute -top-1 -right-2 text-white rounded-full w-6">
                {totalQuantity}
              </span>
            </button>
            <button onClick={() => setShowMenu(!showMenu)}>
              <AiOutlineMenu size={30} />
            </button>
          </div>
          <ul className="hidden md:flex gap-8 font-semibold xl:text-lg">
            <Link href="/products">
              <li className="cursor-pointer transition-all duration-75 hover:border-b-2 border-blue-700">
                All Products
              </li>
            </Link>
            <Link href="/playstation">
              <li className="cursor-pointer transition-all duration-75 hover:border-b-2 border-blue-700">
                PlayStation
              </li>
            </Link>
            <Link href="xbox">
              <li className="cursor-pointer transition-all duration-75 hover:border-b-2 border-blue-700">
                Xbox
              </li>
            </Link>
            <Link href="pc_and_others">
              <li className="cursor-pointer transition-all duration-75 hover:border-b-2 border-blue-700">
                PC and other accessories
              </li>
            </Link>
          </ul>
        </div>
        {/* Account buttons */}
        <div className="hidden md:flex gap-4">
          <button onClick={()=> setShowSearch(!showSearch)} className=" hover:-translate-y-1 transition-all duration-75">
            <RiSearchLine size={30}/>
          </button>
          <button
            className="relative  hover:-translate-y-1 transition-all duration-75"
            onClick={() => setShowCart(!showCart)}
          >
            <AiOutlineShoppingCart size={30} />
            <span className="bg-blue-600 font-bold absolute rounded-full w-6 h-6 flex items-center justify-center top-0 -right-3 text-white">
              {totalQuantity}
            </span>
          </button>
          {/* <button className="px-2 py-1 border xl:text-lg text-blue-700 xl:px-4 xl:py-2">
            Sign Up
          </button> */}
        </div>
        {showCart && <Cart />}
        {showMenu && <Menu />}
        {showSearch && <Search/>}
      </div>
    </nav>
  );
}
