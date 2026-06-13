import { lazy, Suspense } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import CategoryShowcase from "../../components/CategoryShowcase/CategoryShowcase";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const LookbookGrid = lazy(() => import("../../components/LookbookGrid/LookbookGrid"));
const BrandStory = lazy(() => import("../../components/BrandStory/BrandStory"));
const Testimonials = lazy(() => import("../../components/Testimonials/Testimonials"));
const Newsletter = lazy(() => import("../../components/Newsletter/Newsletter"));
const Footer = lazy(() => import("../../components/Footer/Footer"));

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        
        <ScrollReveal>
          <CategoryShowcase />
        </ScrollReveal>

        <ScrollReveal>
          <ProductGrid />
        </ScrollReveal>
        
        <Suspense fallback={<div style={{ minHeight: "200px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif" }}>Loading details...</div>}>
          <ScrollReveal>
            <LookbookGrid />
          </ScrollReveal>

          <ScrollReveal>
            <BrandStory />
          </ScrollReveal>

          <ScrollReveal>
            <Testimonials />
          </ScrollReveal>

          <ScrollReveal>
            <Newsletter />
          </ScrollReveal>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;