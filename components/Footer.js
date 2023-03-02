import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

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
          <Link href="https://github.com/bjamyl">
            <a target='_blank'>
              <li className="text-blue-700 cursor-pointer">
                <AiFillGithub />
              </li>
            </a>
          </Link>
          <Link href="https://twitter.com/MhylJay">
            <a target='_blank'>
              <li className="text-blue-700 cursor-pointer">
                <AiFillTwitterCircle />
              </li>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/jamil-banamwine-alhassan/">
            <a target='_blank'>
              <li className="text-blue-700 cursor-pointer">
                <AiFillLinkedin />
              </li>
            </a>
          </Link>
        </ul>
        <h1 className="text-center text-gray-500 font-semibold xl:text-lg">
          Designed and Built By Jamil, 2023
        </h1>
      </div>
    </footer>
  );
}
