import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import CartDrawer from '../components/CartDrawer/CartDrawer';
import { ToastContainer } from '../components/Toast/Toast';
import { useCart } from '../stores/CartContext';

const Home = lazy(() => import('../pages/Home/Home'));
const Shop = lazy(() => import('../pages/Shop/Shop'));
const ProductDetails = lazy(() => import('../pages/ProductDetails/ProductDetails'));
const OurStory = lazy(() => import('../pages/OurStory/OurStory'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const AppRouter = () => {
  const { isCartOpen, setIsCartOpen } = useCart();

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '6rem', fontFamily: 'Poppins, sans-serif', color: '#F15B56' }}>Loading Aura...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        <ToastContainer />
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
