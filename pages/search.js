import React from "react";
import Layout from "../components/Layout";
import { useStateContext } from "../context/StateContext";
import ProductCard from "../components/Homepage/Products/ProductCard";

export default function Search() {
  const { searchedProducts, searchItems } = useStateContext();
  // console.log(searchedProducts);
  return (
    <Layout title="GameShop | Search Results">
      <section className="py-20 xl:pb-16">
        <div className="space-y-8 mx-4 xl:mx-48">
          {searchedProducts ? (
            <div className="mt-8">
              <h1 className="font-bold text-2xl xl:text-5xl text-center">
                Search results
              </h1>
              <p className="text-center xl:text-lg text-gray-700">
                Showing results for "{searchItems}"
              </p>
            </div>
          ) : null}
          {searchedProducts ? (
            <div className=" gap-y-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
              {searchedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p>
              Oops! We cannot seem to find what you are looking for. Try
              searching something else
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}
