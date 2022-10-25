import React from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/Homepage/Products/ProductCard";

export default function Playstation({ products }) {
  const playstationProducts = products.filter((product) => {
    return product.category === "playstation";
  });
  console.log(playstationProducts);
  return (
    <Layout title="GameShop | Shop For Everything PlayStation">
      <section className="bg-slate-100">
        <div className="px-4 py-16 xl:py-24  xl:mx-48">
          <div className=" gap-y-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {playstationProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:8000/api/products/");
  const products = await res.json();

  return {
    props: { products },
  };
}
