import React, { useRef } from "react";
import { FaStripe } from "react-icons/fa";
import { usePaystackPayment } from "react-paystack";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineLeft, AiOutlineShopping } from "react-icons/ai";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import getStripe from "../lib/getStripe";

export default function Cart() {
  const {
    totalPrice,
    totalQuantity,
    cartItems,
    showCart,
    toggleCartItemQuantity,
    setShowCart,
    onRemove,
  } = useStateContext();
  const router = useRouter();

  const cartRef = useRef();
  const config = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    currency: "GHS",
    amount: totalPrice * 100 * 14,
    publicKey: "pk_test_766ab4c20b6ba946429f6ec6ab47a57e3b0efeb0",
  };
  const onSuccess = (reference) => {
    toast.success('Payment Successful')
    router.push("/confirmed");
    setShowCart(!showCart);
  };

  const onClose = () => {
    toast.error('Payment Canceled')
  };

  const initializePayment = usePaystackPayment(config);

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const res = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (res.statusCode === 500) {
      console.log("something happened");
    }

    const data = await res.json();
    toast.loading("Redirecting to checkout");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  console.log(cartItems);

  console.log(cartItems);

  const handleClose = (e) => {
    if (e.target.id === "background") setShowCart(!showCart);
  };

  return (
    <div
      id="background"
      onClick={handleClose}
      className="fixed z-30 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-end items-start"
    >
      <div className="w-full flex flex-col border h-full md:w-[65%] lg:w-[55%] xl:w-[38%] bg-white">
        <div className="m-4 flex justify-between items-center">
          <h3 className="font-bold text-xl flex items-center xl:text-2xl">
            {cartItems.length < 1 && (
              <button onClick={() => setShowCart(!showCart)}>
                <AiOutlineLeft />
              </button>
            )}
            Shopping Cart
          </h3>
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

        <div
          id="products container"
          className="flex flex-col gap-4 lg:gap-6 xl:gap-8 overflow-y-auto"
        >
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div
                key={item?.id}
                className="flex rounded-full items-center mx-2 lg:mx-4 border-b-2 cursor-pointer"
              >
                <div className="w-[25%] xl:w-[14%] mr-4">
                  <Image
                    alt="cart-item-image"
                    src={item?.image}
                    width={20}
                    height={20}
                    layout="responsive"
                    objectFit="contain"
                    className="rounded-full xl:w-[80%] bg-slate-200"
                  />
                </div>
                <div className="flex flex-1 xl:w-[75%] xl:flex-row xl:justify-between flex-col gap-4">
                  <div className="items-center justify-between xl:w-[70%] flex">
                    <h4 className="font-semibold w-2/4 h-12 scrollbar-hide overflow-scroll lg:h-auto lg:overflow-auto">
                      {" "}
                      {item?.name}
                    </h4>
                    <div>
                      <div className="flex items-center">
                        <button
                          onClick={() => toggleCartItemQuantity(item.id, "dec")}
                          className="border px-4 py-1"
                        >
                          -
                        </button>
                        <p className="px-4">{item?.quantity}</p>
                        <button
                          onClick={() => toggleCartItemQuantity(item.id, "inc")}
                          className="border px-4 py-1"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className=" flex xl:gap-8 items-center mr-2 justify-between">
                    <h5 className="font-bold">${item?.price}.00</h5>
                    <button
                      onClick={() => onRemove(item)}
                      className="text-blue-700"
                    >
                      <TiDeleteOutline size={30} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Bottom buttons section */}
        <div className="flex flex-col items-center justify-center">
          <div
            className={`flex p-4 w-full items-center ${
              cartItems.length < 1 ? "justify-center" : "justify-between"
            }`}
          >
            <button onClick={() => setShowCart(!showCart)}>
              {cartItems.length < 1 ? (
                <Link href="/products">
                  <span className=" bg-blue-800 text-center text-white font-semibold py-3 px-6">
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
          {cartItems.length >= 1 && (
            <div className="flex flex-col w-full justify-center items-center gap-4">
              <button
                onClick={handleCheckout}
                className="mt-4 bg-blue-800 text-center text-white font-semibold py-3 w-[60%]"
              >
                Stripe Checkout
              </button>
              <button
                onClick={() => {
                  initializePayment(onSuccess, onClose);
                }}
                className=" bg-blue-800 text-center text-white font-semibold py-3 w-[60%]"
              >
                Paystack Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
