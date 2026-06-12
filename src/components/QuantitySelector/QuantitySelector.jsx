import styles from "./QuantitySelector.module.scss";

function QuantitySelector({
  quantity,
  setQuantity,
}) {
  return (
    <div className={styles.wrapper}>
      <button
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