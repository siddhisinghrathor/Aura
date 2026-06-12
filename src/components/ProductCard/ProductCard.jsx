import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";
import { useCart } from "../../stores/CartContext";

const categoryColors = {
  "Period Care": "#F15B56",
  "Intimate Care": "#72D4CD",
  "Wellness": "#9B86D4",
  "Self Care": "#F7A38B"
};

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, "Rose Coral", "M", 1);
  };

  const ratingRate = product.rating?.rate || 4.8;
  const ratingCount = product.rating?.count || 124;
  const catColor = categoryColors[product.category] || "#F15B56";

  return (
    <article className={styles.card}>
      <Link to={`/product/${product.id}`} className={styles.linkWrapper}>
        <div className={styles.imagePlaceholder}>
          Product Image
        </div>

        <div className={styles.content}>
          <span className={styles.category} style={{ color: catColor }}>
            {product.category}
          </span>

          <h3 className={styles.title}>
            {product.title}
          </h3>

          <div className={styles.rating}>
            <span className={styles.star}>★ {ratingRate}</span>
            <span className={styles.reviews}>({ratingCount} reviews)</span>
          </div>

          <span className={styles.price}>
            ₹{product.price}
          </span>

          <button className={styles.addToCartBtn} onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;