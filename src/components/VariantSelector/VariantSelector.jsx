import styles from "./VariantSelector.module.scss";

function VariantSelector({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}) {
  return (
    <>
      <div className={styles.section}>
        <h4>Color</h4>

        <div className={styles.colors}>
          {colors.map((color) => (
            <button
              key={color}
              onClick={() =>
                onColorChange(color)
              }
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h4>Size</h4>

        <div className={styles.sizes}>
          {sizes.map((size) => (
            <button
              key={size.value}
              disabled={size.stock === 0}
              onClick={() =>
                onSizeChange(size.value)
              }
            >
              {size.value}

              {size.stock === 0 &&
                " Sold Out"}

              {size.stock > 0 &&
                size.stock <= 3 &&
                " Low Stock"}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default VariantSelector;