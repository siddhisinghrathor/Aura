import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import CartDrawer from "../../components/CartDrawer/CartDrawer";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [isCartOpen, setIsCartOpen] =
    useState(false);

  return (
    <>
      <Navbar
        onCartClick={() =>
          setIsCartOpen(true)
        }
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() =>
          setIsCartOpen(false)
        }
      />

      <main>
        <Hero />
        <ProductGrid />
      </main>

      <Footer />
    </>
  );
}

export default Home;