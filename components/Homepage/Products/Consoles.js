import ProductCard from "./ProductCard";

import React from "react";

export default function Consoles({ products }) {
  const consoleProducts = products.filter((product) => {
    return product.product_type === "console";
  });

  return (
    <section className="pb-20 xl:pb-16">
      <div className="space-y-8 mx-4 xl:mx-48">
        <div className="mt-8">
          <h1 className="font-bold text-2xl xl:text-5xl text-center">
            Consoles
          </h1>
          <p className="text-center text-gray-700">
            All of your favorite consoles in one place!
          </p>
        </div>
        <div className=" gap-y-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {consoleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
