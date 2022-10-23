import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useStateContext } from "../../../context/StateContext";

export default function ProductCard({ product }) {
  const { image, price, name } = product;
  const { onAdd } = useStateContext();
  const currentQty = 1;

  return (
    <div className="flex items-center gap-8 flex-col justify-center">
      <Link href={`/products/${product.id}`}>
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
            <p className=" text-gray-700 text-lg h-16">{name}</p>
            <p className="font-bold">${price}.00</p>
          </div>
        </div>
      </Link>
      <button
        onClick={() => onAdd(product, currentQty)}
        className="bg-blue-800 text-center text-white font-semibold py-3 w-[90%]"
      >
        Add to Cart
      </button>
    </div>
  );
}
