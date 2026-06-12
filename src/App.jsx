import React from 'react';
import AppRouter from './router/AppRouter';
import { CartProvider } from './stores/CartContext';

const App = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
};

export default App;
