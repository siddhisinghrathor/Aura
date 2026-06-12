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
    <div className={styles.variantSelector}>
      {/* Color Selection */}
      <div className={styles.section}>
        <h4 className={styles.heading}>Color</h4>

        <div className={styles.colorContainer}>
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => onColorChange(color)}
              className={`${styles.colorButton} ${
                selectedColor === color ? styles.active : ""
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className={styles.section}>
        <h4 className={styles.heading}>Size</h4>

        <div className={styles.sizeContainer}>
          {sizes.map((size) => {
            const isSoldOut = size.stock === 0;
            const isLowStock =
              size.stock > 0 && size.stock <= 3;

            return (
              <button
                key={size.value}
                type="button"
                disabled={isSoldOut}
                onClick={() => onSizeChange(size.value)}
                className={`
                  ${styles.sizeButton}
                  ${
                    selectedSize === size.value
                      ? styles.active
                      : ""
                  }
                  ${
                    isLowStock
                      ? styles.lowStock
                      : ""
                  }
                  ${
                    isSoldOut
                      ? styles.soldOut
                      : ""
                  }
                `}
              >
                <span>{size.value}</span>

                {isLowStock && (
                  <small>Low Stock</small>
                )}

                {isSoldOut && (
                  <small>Sold Out</small>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default VariantSelector;