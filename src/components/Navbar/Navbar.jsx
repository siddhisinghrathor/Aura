import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { useCart } from "../../stores/CartContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Our Story", href: "/our-story" },
];

function Navbar({ onCartClick }) {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Aura
        </Link>

        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.cartSection}>
          <button className={styles.cartButton} onClick={onCartClick} aria-label="Open shopping cart">
            <svg
              className={styles.cartIcon}
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;