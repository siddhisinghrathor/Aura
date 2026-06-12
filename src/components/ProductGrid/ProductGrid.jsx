import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductGrid.module.scss';

const ProductGrid = () => {
  // TODO: Fetch products and map them to ProductCard components
  return (
    <div className={styles.grid}>
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductGrid;
