import Image from "next/image";
import Layout from "../../components/Layout";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useStateContext } from "../../context/StateContext";
import Cart from "../../components/Cart";

export default function Product({ product }) {
  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <Layout title={`GameShop | ${product.name}`}>
      <section className="xl:flex justify-center xl:mt-8">
        <div className="mx-4 xl:w-[1290px]">
          <div className="grid gap-4 lg:gap-6 xl:gap-8 grid-cols-1 md:grid-cols-2">
            <div>
              <Image
                src={product.image}
                width={50}
                height={50}
                layout="responsive"
                alt={product.name}
                objectFit="contain"
                className="rounded-xl xl:w-[80%] bg-slate-200"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-gray-700 text-lg xl:text-xl">
                {product.name}
              </h2>
              <p className="font-bold text-2xl xl:text-4xl">
                ${product.price}.00
              </p>
              <div className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>{product.description}</p>
              <div className="flex items-center gap-2 py-2">
                <h3 className="font-bold">Quantity:</h3>
                <div className="flex items-center">
                  <button onClick={decQty} className="border px-4 py-1">-</button>
                  <p className="px-4">{qty}</p>
                  <button onClick={incQty} className="border px-4 py-1">+</button>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <button onClick={()=> onAdd(product, qty)} className="bg-blue-500 px-6 py-1 text-white xl:text-lg">
                  Add to Cart
                </button>
                <button className="border px-6 py-1 text-blue-500 xl:text-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const res = await fetch("http://127.0.0.1:8000/api/products/");
  const data = await res.json();

  const paths = data.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://127.0.0.1:8000/api/products/${id}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
