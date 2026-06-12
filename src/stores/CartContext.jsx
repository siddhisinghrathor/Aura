import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // TODO: Implement cart items state, add/remove functions, and totals calculation
  return (
    <CartContext.Provider value={null}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
