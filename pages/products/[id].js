import Image from "next/image";
import Layout from "../../components/Layout";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export default function Product({ product }) {
  console.log(product);
  const orig = "http://127.0.0.1:8000";
  const options = [
    { id: 1, number: 1 },
    { id: 2, number: 2 },
    { id: 3, number: 3 },
    { id: 4, number: 4 },
    { id: 5, number: 5 },
    { id: 6, number: 6 },
    { id: 7, number: 7 },
    { id: 8, number: 8 },
    { id: 9, number: 9 },
    { id: 10, number: 10 },
  ];

  return (
    <Layout>
      <section className="xl:flex justify-center xl:mt-8">
        <div className="mx-4 xl:w-[1290px]">
          <div className="grid gap-4 lg:gap-6 xl:gap-8 grid-cols-1 md:grid-cols-2">
            <div>
              <Image
                src={orig + product.image}
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
              <div className="flex gap-4 items-center">
                <form action="">
                  <div>
                    <label className="font-bold xl:text-lg" htmlFor="">
                      Quantity
                    </label>
                    <select className="px-2 py-1 xl:text-lg" name="" id="">
                      {options.map((choice) => (
                        <option key={choice.id} value={choice.number}>
                          {choice.number}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
                <button className="bg-blue-500 px-2 py-1 text-white xl:text-lg">
                  Add to Cart
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
