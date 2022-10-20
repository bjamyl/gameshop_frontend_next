import HeroBanner from "../components/Homepage/Banner/HeroBanner";
import Products from "../components/Homepage/Products/Products";
import Layout from "../components/Layout";
import Companies from "../components/Homepage/Companies";
import Featured from "../components/Homepage/Featured/Featured";
export default function Home({ products }) {
  return (
    <Layout>
      <div className="">
        <HeroBanner />
        <Companies />
        <Products products={products} />
        <Featured />
      </div>
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
