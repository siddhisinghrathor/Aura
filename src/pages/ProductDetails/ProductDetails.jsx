import { useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import ProductGallery from "../../components/ProductGallery/ProductGallery";
import VariantSelector from "../../components/VariantSelector/VariantSelector";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";

import useProduct from "../../hooks/useProduct";

import { variants } from "../../data/variants";

function ProductDetails() {
  const { id } = useParams();

  const {
    product,
    loading,
    error,
  } = useProduct(id);

  const [selectedColor, setSelectedColor] =
    useState(variants.colors[0]);

  const [selectedSize, setSelectedSize] =
    useState("S");

  const [quantity, setQuantity] =
    useState(1);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Navbar />

      <main>
        <ProductGallery
          image={product.image}
        />

        <h1>{product.title}</h1>

        <p>${product.price}</p>

        <p>{product.description}</p>

        <VariantSelector
          colors={variants.colors}
          sizes={variants.sizes}
          selectedColor={selectedColor}
          selectedSize={selectedSize}
          onColorChange={setSelectedColor}
          onSizeChange={setSelectedSize}
        />

        <QuantitySelector
          quantity={quantity}
          setQuantity={setQuantity}
        />

        <button>
          Add To Cart
        </button>
      </main>

      <Footer />
    </>
  );
}

export default ProductDetails;