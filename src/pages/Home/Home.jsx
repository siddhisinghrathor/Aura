import { useState, lazy, Suspense } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategoryShowcase from "../../components/CategoryShowcase/CategoryShowcase";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import CartDrawer from "../../components/CartDrawer/CartDrawer";

const LookbookGrid = lazy(() => import("../../components/LookbookGrid/LookbookGrid"));
const BrandStory = lazy(() => import("../../components/BrandStory/BrandStory"));
const Testimonials = lazy(() => import("../../components/Testimonials/Testimonials"));
const Newsletter = lazy(() => import("../../components/Newsletter/Newsletter"));
const Footer = lazy(() => import("../../components/Footer/Footer"));

function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <main>
        <Hero />
        <CategoryShowcase />
        <ProductGrid />
        
        <Suspense fallback={<div style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif" }}>Loading details...</div>}>
          <LookbookGrid />
          <BrandStory />
          <Testimonials />
          <Newsletter />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;