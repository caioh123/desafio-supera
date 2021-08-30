import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const onAdd = (product) => {
    const productInCart = cart.find((cartItem) => cartItem.id === product.id);

    if (productInCart) {
      const game = cart.map((cartItem) => {
        if (cartItem.id === productInCart.id) {
          productInCart.qty += 1;
        }
        return cartItem;
      });

      setCart(game);
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, setCart, onAdd }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
