import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const Shop = lazy(() => import('../pages/Shop/Shop'));
const ProductDetails = lazy(() => import('../pages/ProductDetails/ProductDetails'));
const OurStory = lazy(() => import('../pages/OurStory/OurStory'));

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div style={{ textAlign: 'center', padding: '6rem', fontFamily: 'Poppins, sans-serif', color: '#F15B56' }}>Loading Aura...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
