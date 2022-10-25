import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

export default function Success() {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();
  const [order, setOrder] = useState(null);

  useEffect(()=> {
    setCartItems([])
    setTotalPrice(0)
    setTotalQuantity(0)
    localStorage.clear()

  },[])
  return (
    <Layout title='GameShop | Your Order Has Been Confirmed. Thank You'>
      <section className="h-screen bg-slate-100 flex items-center px-4 justify-center">
        <div className="flex flex-col bg-white items-center justify-center gap-2 border-4 p-12">
          <p className="text-7xl text-green-700 xl:text-[100px]">
            <AiOutlineCheckCircle />
          </p>
          <h3 className="font-bold text-xl xl:text-2xl text-center">Your Order Has Been Confirmed!</h3>
          <p className="font-semibold text-center text-gray-600 xl:text-lg xl:w-[70%]">
            Thank You For Shopping With Us. We will send you confirmation  email as soon as your product ships.
          </p>
          <Link href="/">
            <button className="xl:text-lg bg-blue-800 text-center px-1 text-white font-semibold py-3 w-[60%]">
              Continue Shopping
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
