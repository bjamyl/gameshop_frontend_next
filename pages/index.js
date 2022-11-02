import HeroBanner from "../components/Homepage/Banner/HeroBanner";
import Products from "../components/Homepage/Products/Products";
import Controllers from "../components/Homepage/Products/Controllers";
import ConsoleCard from "../components/Homepage/Banner/ConsoleCard";
import GameCard from "../components/Homepage/Banner/GameCard";
import Consoles from "../components/Homepage/Products/Consoles";
import Games from "../components/Homepage/Products/Games";
import Layout from "../components/Layout";
import Companies from "../components/Homepage/Companies";
import Featured from "../components/Homepage/Featured/Featured";
export default function Home({ products }) {
  // console.log(products);
  return (
    <Layout>
      <div className="  bg-slate-100">
        <HeroBanner />
        <Companies />
        <Featured />
        <Products products={products} />
        <Controllers products={products} />
        <ConsoleCard products={products}/>
        <Consoles products={products} />
        <GameCard products={products}/>
        <Games products={products} />
      </div>
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
