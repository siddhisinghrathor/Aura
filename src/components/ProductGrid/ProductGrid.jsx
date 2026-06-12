import React from 'react';
import styles from "./ProductGrid.module.scss";
import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = React.memo(function ProductGrid() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <section className={styles.message}>
        Loading comforting wellness products...
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.message}>
        {error}
      </section>
    );
  }

  return (
    <section className={styles.section} id="featured">
      <div className={styles.header}>
        <span className={styles.tagline}>our wellness collections</span>
        <h2 className={styles.heading}>Thoughtfully Designed For You</h2>
        <p className={styles.subtext}>
          Explore clean, safe, and toxin-free formulations built to support your daily routines.
        </p>
      </div>

      <div className={styles.grid}>
        {products.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
});

export default ProductGrid;