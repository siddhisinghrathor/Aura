import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, color, size, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.color === color && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.color === color && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, color, size, quantity }];
    });
  };

  const removeFromCart = (id, color, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.color === color && item.size === size))
    );
  };

  const updateQuantity = (id, color, size, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);