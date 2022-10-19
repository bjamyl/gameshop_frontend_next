import React, { createContext, useState, useEffect, useContext } from "react";
import toast, { Toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [qty, setQty] = useState(1);

  //adding items to cart
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find((item)=> item.id === product.id)

    setTotalPrice((prevTotalPrice)=> prevTotalPrice + product.price * quantity)
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity)
    if(checkProductInCart){
        const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct.id ===product.id) return{
                ...cartProduct,
                quantity:cartProduct.quantity + quantity
            }
        })

        setCartItems(updatedCartItems)
    } else {
        product.quantity = quantity
        
        setCartItems([...cartItems, {...product}])
    }
    toast.success(`${qty} ${product.name} added to your cart`)
  }

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

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantity,
        qty,
        incQty,
        decQty,
        onAdd
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
