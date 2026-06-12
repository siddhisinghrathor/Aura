import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  // TODO: Implement navigation links, cart toggle, and logo
  return (
    <nav className={styles.navbar}>
      <div>Logo</div>
      <div>Cart (0)</div>
    </nav>
  );
};

export default Navbar;
