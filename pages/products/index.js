import Layout from "../../components/Layout";
import Link from "next/link";
import ProductCard from "../../components/Homepage/Products/ProductCard";

export default function Products({ products }) {
  console.log(products);
  return (
    <Layout title="GameShop | All Products">
      <section className="xl:mx-48">
        <div className="space-y-8 md:space-y-0 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
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
