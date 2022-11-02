import React from "react";
import Link from "next/link";

export default function ConsoleCard({ products }) {
  const featuredConsole = products.find((product) => {
    return product.name === "PS5 Console";
  });
  return (
    <section>
      {/* desktop version */}
      <div className="hidden md:block">
        <div className="bg-cond bg-cover bg-center xl:h-[700px] md:h-[450px] flex items-end">
          <div className="md:flex md:flex-col md:items-start space-y-4 xl:text-left md:pb-7 xl:pb-14 md:ml-14 xl:ml-28 text-white ">
            <h1 className="font-bold text-3xl xl:text-6xl ">
              {featuredConsole.name}
            </h1>
            <p className="font-light xl:text-lg md:w-[50%]">
              {featuredConsole.description}
            </p>
            <Link href={`products/${featuredConsole.id}`}>
              <button className="border xl:text-lg text-white xl:px-4 xl:py-2 hover:-translate-y-2 transition-all duration-75">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="md:hidden ">
        <div className="bg-cond bg-cover bg-center h-[700px] flex items-end">
          <div className="mx-4 mb-8 text-white space-y-2">
            <h1 className="text-3xl font-bold">{featuredConsole.name}</h1>
            <p className="font-light">{featuredConsole.description}</p>
            <Link href={`products/${featuredConsole.id}`}>
              <button className="px-2 py-1 border text-white">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
