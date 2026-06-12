import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.logo}>Aura</h3>
          <p className={styles.brandDesc}>
            Thoughtfully designed products for modern women who deserve better care. Certified safe and skin-friendly.
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Shop</h3>
          <ul className={styles.links}>
            <li><Link to="/shop">Loungewear</Link></li>
            <li><Link to="/shop">Wellness Devices</Link></li>
            <li><Link to="/shop">Self-Care Accessories</Link></li>
            <li><Link to="/shop">Feminine Care</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>About</h3>
          <ul className={styles.links}>
            <li><Link to="/our-story">Our Philosophy</Link></li>
            <li><Link to="/our-story">Education Journal</Link></li>
            <li><Link to="/our-story">Sustainability</Link></li>
            <li><Link to="/our-story">Careers</Link></li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.columnTitle}>Support</h3>
          <ul className={styles.links}>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/">FAQs</Link></li>
            <li><Link to="/">Shipping & Returns</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
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
