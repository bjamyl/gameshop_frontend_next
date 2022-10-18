import ProductCard from "./ProductCard";
import Link from "next/link";

export default function Products({ products }) {
  return (
    <section>
      <div className="space-y-8 mx-4">
        <div className="mt-8">
          <h1 className="font-bold text-2xl xl:text-5xl text-center">
            Best Seller Products
          </h1>
          <p className="text-center text-gray-700">
            These products are selling out fast! Get yours now!
          </p>
        </div>
        <div className="space-y-8 md:space-y-0 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <Link key={product.id} href={`products/${product.id}`}>
              <a>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
