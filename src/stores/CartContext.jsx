import React, { createContext, useContext, useState, useMemo, useCallback } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((product, color, size, quantity = 1) => {
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
  }, []);

  const removeFromCart = useCallback((id, color, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.color === color && item.size === size))
    );
  }, []);

  const updateQuantity = useCallback((id, color, size, newQty) => {
    if (newQty < 1) return;
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  }, []);

  const contextValue = useMemo(() => ({
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity
  }), [cartItems, addToCart, removeFromCart, updateQuantity]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);