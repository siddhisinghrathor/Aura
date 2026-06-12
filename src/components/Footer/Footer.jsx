import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  // TODO: Add newsletter subscription, copyright, and secondary links
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
