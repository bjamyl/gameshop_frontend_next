import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";

export default function Cart() {
  const cartRef = useRef();

  const orig = "http://127.0.0.1:8000";

  const { totalPrice, totalQuantity, cartItems, showCart, setShowCart } =
    useStateContext();

  console.log(cartItems);

  const handleClose = (e) => {
    if (e.target.id === "background") setShowCart(!showCart);
  };

  return (
    <div
      id="background"
      onClick={handleClose}
      className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-end items-start"
    >
      <div className="w-full flex flex-col border h-full md:w-[65%] lg:w-[55%] xl:w-[45%] bg-white">
        <div className="m-4 flex justify-between items-center">
          <h3 className="font-bold text-xl xl:text-2xl">Shopping Cart</h3>
          <h3 className="text-blue-700">{totalQuantity} items</h3>
        </div>
        {/* If there are no items in the cart */}
        {cartItems.length < 1 && (
          <div className="flex flex-col items-center">
            <AiOutlineShopping size={150} />
            <h4>Your cart is empty</h4>
          </div>
        )}
        {/* If there are items in the cart */}

        <div id="products container" className="flex flex-col gap-4 overflow-y-auto">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="flex rounded-xl xl:justify-items-stretch items-center mx-2 border-b-2" key={item.id}>
                <div className="w-[25%] xl:w-[14%] mr-4">
                  <Image
                    alt="cart-item-image"
                    src={orig + item.image}
                    width={20}
                    height={20}
                    layout="responsive"
                    objectFit="contain"
                    className="rounded-xl xl:w-[80%] bg-slate-200"

                  />
                </div>
                <div className="flex xl:w-[80%] xl:flex-row xl:justify-between flex-col gap-4">
                  <div className="items-center xl:justify-between xl:w-[70%] flex">
                    <h4 className="font-bold">{item.name}</h4>
                    <div>
                      <div className="flex items-center">
                        <button onClick="" className="border px-4 py-1">
                          -
                        </button>
                        <p className="px-4">9</p>
                        <button onClick="" className="border px-4 py-1">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className=" flex xl:gap-8 items-center justify-between">
                    <h5 className="font-bold">${item.price}.00</h5>
                    <button className="text-blue-700">
                      <TiDeleteOutline size={30} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Bottom buttons section */}
        <div
          className={`flex p-4 w-[100%] items-center ${
            cartItems.length < 1 ? "justify-center" : "justify-between"
          }`}
        >
          <button onClick={() => setShowCart(!showCart)}>
            {cartItems.length < 1 ? (
              <Link href="/products">
                <span className="bg-blue-500 text-white px-6 py-1">
                  Add some items
                </span>
              </Link>
            ) : (
              <span className="text-blue-800 flex items-center font-semibold xl:text-lg">
                {" "}
                <AiOutlineLeft />
                Continue shopping
              </span>
            )}
          </button>
          {cartItems.length < 1 ? null : (
            <p>
              <span className="text-slate-500 font-bold">Subtotal</span>:{" "}
              <span className="text-2xl xl:text-3xl font-semibold text-blue-800">
                ${totalPrice}.00{" "}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
