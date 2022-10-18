import React from "react";
import Image from "next/image";

export default function ProductCard({ image, name, price }) {
  return (
    <div className="flex justify-center">
      <div className="w-[90%] hover:scale-105 transition-all duration-100">
        <Image
          src={image}
          width={50}
          height={50}
          alt="product image"
          layout="responsive"
          objectFit="contain"
          className="rounded-xl bg-slate-200"
        />
        <div className="mt-2">
          <p className=" text-gray-700 text-lg">{name}</p>
          <p className="font-bold">${price}.00</p>
        </div>
      </div>
    </div>
  );
}
