import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4 className={styles.logo}>Aura</h4>
          <p className={styles.brandDesc}>
            Thoughtfully designed products for modern women who deserve better care. Certified safe and skin-friendly.
          </p>
        </div>

        <div className={styles.column}>
          <span className={styles.columnTitle}>Shop</span>
          <ul className={styles.links}>
            <li><a href="#featured">Loungewear</a></li>
            <li><a href="#featured">Wellness Devices</a></li>
            <li><a href="#featured">Self-Care Accessories</a></li>
            <li><a href="#featured">Feminine Care</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <span className={styles.columnTitle}>About</span>
          <ul className={styles.links}>
            <li><a href="#why-choose-us">Our Philosophy</a></li>
            <li><a href="#education">Education Journal</a></li>
            <li><a href="#why-choose-us">Sustainability</a></li>
            <li><a href="#why-choose-us">Careers</a></li>
          </ul>
        </div>

        <div className={styles.column}>
          <span className={styles.columnTitle}>Support</span>
          <ul className={styles.links}>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Shipping & Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} Aura Wellness. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
