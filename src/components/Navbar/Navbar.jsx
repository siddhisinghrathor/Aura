import styles from "./Navbar.module.scss";

const navLinks = [
  "Home",
  "Shop",
  "Collections",
  "About",
];

function Navbar() {
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

        <button className={styles.cartButton}>
          Cart
          <span className={styles.badge}>
            0
          </span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;