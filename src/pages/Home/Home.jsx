import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import Footer from '../../components/Footer/Footer';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
