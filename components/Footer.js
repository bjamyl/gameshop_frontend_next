import React from "react";
import Link from "next/link";
import {AiFillGithub,AiFillTwitterCircle,AiFillLinkedin} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className="bg-slate-100 p-4 xl:py-6 border-t-2 rounded-xl border-blue-500">
      <div className="xl:h-28 flex flex-col items-center gap-4 justify-center">
        <Link href="/">
          <h1 className="text-xl text-gray-700 xl:text-4xl font-bold cursor-pointer">
            <span className="text-blue-500">Game</span>Shop
          </h1>
        </Link>
        <ul className="flex gap-8 text-xl xl:text-2xl">
          <li className="text-blue-700"><AiFillGithub/></li>
          <li className="text-blue-700"><AiFillTwitterCircle/></li>
          <li className="text-blue-700"><AiFillLinkedin/></li>
        </ul>
        <h1 className="text-center text-gray-500 font-semibold xl:text-lg">Built By Jamil, 2022</h1>
      </div>
    </footer>
  );
}
