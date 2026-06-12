import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import VariantSelector from '../../components/VariantSelector/VariantSelector';
import QuantitySelector from '../../components/QuantitySelector/QuantitySelector';
import Footer from '../../components/Footer/Footer';
import styles from './ProductDetails.module.scss';

const ProductDetails = () => {
  return (
    <div className={styles.details}>
      <Navbar />
      <main>
        <ProductGallery />
        <VariantSelector />
        <QuantitySelector />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
