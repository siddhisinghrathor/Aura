import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CartDrawer from "../../components/CartDrawer/CartDrawer";

import ProductGallery from "../../components/ProductGallery/ProductGallery";
import VariantSelector from "../../components/VariantSelector/VariantSelector";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";

import useProduct from "../../hooks/useProduct";
import { useCart } from "../../stores/CartContext";
import { variants } from "../../data/variants";
import { mapProductToWellness } from "../../utils/productMapper";
import styles from "./ProductDetails.module.scss";

function ProductDetails() {
  const { id } = useParams();
  const { product: rawProduct, loading, error } = useProduct(id);
  const product = mapProductToWellness(rawProduct);
  const [searchParams, setSearchParams] = useSearchParams();
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCart();

  const selectedColor = searchParams.get("color") || variants.colors[0];
  const selectedSize = searchParams.get("size") || "S";

  if (loading) {
    return (
      <>
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <p style={{ textAlign: "center", padding: "4rem" }}>Loading product details...</p>
        <Footer />
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <p style={{ textAlign: "center", padding: "4rem" }}>Error: {error || "Product not found"}</p>
        <Footer />
      </>
    );
  }

  function handleColorChange(color) {
    setSearchParams({
      color,
      size: selectedSize,
    });
  }

  function handleSizeChange(size) {
    setSearchParams({
      color: selectedColor,
      size,
    });
  }

  function handleAddToCart() {
    addToCart(product, selectedColor, selectedSize, quantity);
    setIsCartOpen(true); // Open the cart drawer immediately after adding
  }

  return (
    <>
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

      <main className={styles.page}>
        <div className={styles.productLayout}>
          <ProductGallery image={product.image} />

          <div className={styles.info}>
            <span className={styles.category}>
              {product.category}
            </span>

            <h1 className={styles.title}>
              {product.title}
            </h1>

            <div className={styles.rating}>
              <span className={styles.star}>
                ⭐ {product.rating?.rate}
              </span>

              <span className={styles.reviewCount}>
                {product.rating?.count} reviews
              </span>
            </div>

            <p className={styles.price}>
              ${product.price}
            </p>

            <p className={styles.description}>
              {product.description}
            </p>
            
            <VariantSelector
              colors={variants.colors}
              sizes={variants.sizes}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              onColorChange={handleColorChange}
              onSizeChange={handleSizeChange}
            />

            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

            <button className={styles.addToCart} onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ProductDetails;