import ProductCard from "./ProductCard";
import Link from "next/link";

export default function Products({ products }) {

  const bestSellerProducts = products.filter(product => {
    return product.is_best_seller === true
  })

  console.log(bestSellerProducts)

  return (
    <section className="pb-20 xl:pb-16">
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
          {bestSellerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
