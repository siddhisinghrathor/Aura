import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('aura_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to parse cart items from localStorage', e);
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    try {
      localStorage.setItem('aura_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart items to localStorage', e);
    }
  }, [cartItems]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  }, [removeToast]);

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
    
    // Instantly open the cart drawer and trigger the toast notification
    setIsCartOpen(true);
    addToast(`${product.title} added to your cart.`);
  }, [addToast]);

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
    isCartOpen,
    setIsCartOpen,
    toasts,
    addToast,
    removeToast,
    addToCart,
    removeFromCart,
    updateQuantity
  }), [cartItems, isCartOpen, toasts, addToast, removeToast, addToCart, removeFromCart, updateQuantity]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);