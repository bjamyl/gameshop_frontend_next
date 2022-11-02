import React, { createContext, useState, useEffect, useContext } from "react";
import toast, { Toast } from "react-hot-toast";
import { useRouter } from "next/router";
const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [searchItems, setSearchItems] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);

  let foundProduct;
  let index;

  const router = useRouter();

  //adding items to cart
  const onAdd = (product, quantity) => {
    let checkProductInCart = cartItems.find((item) => item.id === product.id);

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct?.id === product.id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        } else {
          return cartProduct;
        }
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to your cart`);
  };

  //Removing an item from the cart
  const onRemove = (product) => {
    foundProduct = cartItems.find((cartItem) => cartItem.id === product.id);
    const newCartItems = cartItems.filter((item) => item.id !== product.id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantity(
      (prevTotalQuantity) => prevTotalQuantity - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  //Toggling Cart Item quantity

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((cartItem) => cartItem.id === id);
    index = cartItems.findIndex((product) => product.id === id);
    const newCartItems = cartItems

    if (value == "inc") {
      newCartItems.splice(index,1, {
        ...foundProduct,
        quantity: foundProduct.quantity + 1 ,
    });
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + 1);
    } else if (value == "dec") {
      if (foundProduct.quantity > 1) {
        newCartItems.splice(index, 1,{
          ...foundProduct,
          quantity: foundProduct.quantity - 1 ,
      });
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);
      }
    }

    setCartItems(newCartItems)
  };

  //   increasing and reducing item quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  //Searching for products

  const searchProducts = async (e) => {
    e.preventDefault();
    let res = await fetch(
      `https://gameshop.up.railway.app/api/products/?search=${searchItems.replaceAll(
        " ",
        "+"
      )}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const data = await res.json();
    // console.log(data);
    if (res.status === 200) {
      if (data.length !== 0) {
        setSearchedProducts(data);
      } else {
        setSearchedProducts(null);
      }
    } else {
      alert("Error in search");
    }

    setShowSearch(!showSearch);

    router.push("/search");
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        setCartItems,
        setTotalPrice,
        setTotalQuantity,
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        showMenu,
        setShowMenu,
        showSearch,
        setShowSearch,
        searchProducts,
        searchItems,
        searchedProducts,
        setSearchItems,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
