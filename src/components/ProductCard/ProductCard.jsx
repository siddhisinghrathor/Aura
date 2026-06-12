import { Link } from "react-router-dom";

import styles from "./ProductCard.module.scss";

function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <Link to={`/product/${product.id}`}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.title}
          />
        </div>
      </Link>

      <div className={styles.content}>
        <p className={styles.category}>
          {product.category}
        </p>

        <h3 className={styles.title}>
          {product.title}
        </h3>

        <p className={styles.price}>
          ${product.price}
        </p>

        <button className={styles.button}>
          Quick Add
        </button>
      </div>
    </article>
  );
}

export default ProductCard;