import ProductCard from "./ProductCard";

import React from "react";

export default function Games({products}) {
  const gameProducts = products.filter((product) => {
    return product.product_type === "game";
  });

  return (
    <section className="pb-20 xl:pb-16">
      <div className="space-y-8 mx-4 xl:mx-48">
        <div className="mt-8">
          <h1 className="font-bold text-2xl xl:text-5xl text-center">
            Video Games
          </h1>
          <p className="text-center text-gray-700">
            Shop all of the latest titles. Find them all here.
          </p>
        </div>
        <div className=" gap-y-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {gameProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
