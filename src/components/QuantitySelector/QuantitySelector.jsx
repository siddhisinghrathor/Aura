import styles from "./QuantitySelector.module.scss";

function QuantitySelector({
  quantity,
  setQuantity,
}) {
  const decreaseQuantity = () => {
    setQuantity((prev) =>
      Math.max(1, prev - 1)
    );
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className={styles.quantity}>
      <span className={styles.label}>
        Quantity
      </span>

      <div className={styles.controls}>
        <button
          type="button"
          onClick={decreaseQuantity}
          aria-label="Decrease quantity"
        >
          −
        </button>

        <span>{quantity}</span>

        <button
          type="button"
          onClick={increaseQuantity}
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default QuantitySelector;