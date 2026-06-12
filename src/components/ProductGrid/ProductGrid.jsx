import styles from "./ProductGrid.module.scss";

import useProducts from "../../hooks/useProducts";

import ProductCard from "../ProductCard/ProductCard";

function ProductGrid() {
  const {
    products,
    loading,
    error,
  } = useProducts();

  if (loading) {
    return (
      <section className={styles.message}>
        Loading products...
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
    <section className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </section>
  );
}

export default ProductGrid;