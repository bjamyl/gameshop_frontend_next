import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";
import Link from "next/link";

export default function Menu() {
  const { showMenu, setShowMenu } = useStateContext();

  console.log(showMenu);
  return (
    <section className="fixed w-screen h-screen top-0 left-0 bg-slate-100 p-4">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-lg text-blue-700">Menu</h3>
            <button onClick={() => setShowMenu(!showMenu)} className="text-3xl">
              <AiOutlineCloseCircle />
            </button>
          </div>
          <ul onClick={()=>setShowMenu(!showMenu)} className="text-2xl flex flex-col gap-y-4">
            <Link href="/products">
              <li>All Products</li>
            </Link>
            <Link href="/playstation">
              <li>PlayStation</li>
            </Link>
            <Link href="/xbox">
              <li>Xbox</li>
            </Link>
            <Link href="/pc_and_others">
              <li>Pc and Other accessories</li>
            </Link>
          </ul>
        </div>
        <div>
          <p className="text-gray-500 text-center">Built By Jamil, 2022</p>
        </div>
      </div>
    </section>
  );
}
