import Layout from "../../components/Layout";
import Link from "next/link";
import ProductCard from "../../components/Homepage/Products/ProductCard";

export default function Products({ products }) {
  // console.log(products);
  return (
    <Layout title="GameShop | All Products">
      <section className="bg-slate-100 px-4 xl:px-48 py-20">
        <div className="gap-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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
