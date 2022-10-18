import Layout from "../../components/Layout";
import Link from "next/link";
import ProductCard from "../../components/Homepage/Products/ProductCard";

export default function Products({ products }) {
  console.log(products);
  return (
    <Layout title="GameShop | All Products">
      <section>
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