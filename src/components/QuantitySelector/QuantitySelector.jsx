import styles from "./QuantitySelector.module.scss";

function QuantitySelector({
  quantity,
  setQuantity,
}) {
  return (
    <div className={styles.selector}>
      <button
        type="button"
        onClick={() =>
          setQuantity((prev) =>
            Math.max(1, prev - 1)
          )
        }
      >
        -
      </button>

      <span>{quantity}</span>

      <button
        type="button"
        onClick={() =>
          setQuantity((prev) =>
            prev + 1
          )
        }
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;