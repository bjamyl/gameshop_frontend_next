import React from "react";
import Layout from "../components/Layout";
import ProductCard from "../components/Homepage/Products/ProductCard";

export default function Xbox({products}) {
  const xboxProducts = products.filter(product => {
    return product.category === 'xbox'
  })

  // console.log(xboxProducts)
  return (
    <Layout title="GameShop | Shop For Everything Xbox">
      <section className="bg-slate-100">
        <div className="px-4 py-16 xl:py-24  xl:mx-48">
          <div className=" gap-y-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
            {xboxProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://gameshop.up.railway.app/api/products/");
  const products = await res.json();

  return {
    props: { products },
  };
}

