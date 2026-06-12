import styles from "./Navbar.module.scss";
import { useCart } from "../../stores/CartContext";

const navLinks = [
  "Home",
  "Shop",
  "Collections",
  "About",
];

function Navbar({ onCartClick }) {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          Lavender
        </div>

        <nav className={styles.navLinks}>
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={styles.link}
            >
              {link}
            </a>
          ))}
        </nav>

        <button className={styles.cartButton} onClick={onCartClick}>
          Cart
          <span className={styles.badge}>
            {totalItems}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;