import styles from "./CartDrawer.module.scss";
import { useCart } from "../../stores/CartContext";

function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <aside
        className={`${styles.drawer} ${
          isOpen ? styles.open : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
        >
          ✕
        </button>

        <h2>Your Cart</h2>

        <div className={styles.emptyState}>
          <p>Your cart is currently empty.</p>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className={`${styles.drawer} ${
        isOpen ? styles.open : ""
      }`}
    >
      <button
        className={styles.closeButton}
        onClick={onClose}
      >
        ✕
      </button>

      <h2 className={styles.heading}>
        Your Cart
      </h2>

      <div className={styles.items}>
        {cartItems.map((item) => (
          <div
            key={`${item.id}-${item.color}-${item.size}`}
            className={styles.cartItem}
          >
            <img
              src={item.image}
              alt={item.title}
              className={styles.image}
            />

            <div className={styles.details}>
              <h4>{item.title}</h4>

              <p className={styles.variant}>
                {item.color} / {item.size}
              </p>

              <p className={styles.price}>
                ${item.price}
              </p>

              <div className={styles.quantityControls}>
                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.color,
                      item.size,
                      Math.max(
                        1,
                        item.quantity - 1
                      )
                    )
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    updateQuantity(
                      item.id,
                      item.color,
                      item.size,
                      item.quantity + 1
                    )
                  }
                >
                  +
                </button>
              </div>

              <button
                className={styles.removeButton}
                onClick={() =>
                  removeFromCart(
                    item.id,
                    item.color,
                    item.size
                  )
                }
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.summary}>
        <h3>
          Total: ${subtotal.toFixed(2)}
        </h3>
      </div>
    </aside>
  );
}

export default CartDrawer;