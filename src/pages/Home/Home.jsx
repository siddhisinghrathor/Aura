import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategoryShowcase from "../../components/CategoryShowcase/CategoryShowcase";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import BrandStory from "../../components/BrandStory/BrandStory";
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
        <BrandStory />
      </main>

      <Footer />
    </>
  );
}

export default Home;