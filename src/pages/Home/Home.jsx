import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategoryShowcase from "../../components/CategoryShowcase/CategoryShowcase";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import LookbookGrid from "../../components/LookbookGrid/LookbookGrid";
import BrandStory from "../../components/BrandStory/BrandStory";
import Testimonials from "../../components/Testimonials/Testimonials";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import CartDrawer from "../../components/CartDrawer/CartDrawer";

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
        <LookbookGrid />
        <BrandStory />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </>
  );
}

export default Home;