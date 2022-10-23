import ProductCard from "./ProductCard";
import Link from "next/link";

export default function Products({ products }) {
  return (
    <section>
      <div className="space-y-8 mx-4 xl:mx-48">
        <div className="mt-8">
          <h1 className="font-bold text-2xl xl:text-5xl text-center">
            Best Seller Products
          </h1>
          <p className="text-center text-gray-700">
            These products are selling out fast! Get yours now!
          </p>
        </div>
        <div className=" gap-y-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
