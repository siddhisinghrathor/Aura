import { useState, useEffect } from "react";
import styles from "./ProductGallery.module.scss";

function ProductGallery({ image }) {
  const [activeImage, setActiveImage] = useState(image);

  // Sync state if image prop changes
  useEffect(() => {
    setActiveImage(image);
  }, [image]);

  const galleryImages = image ? [image, image, image, image] : [];

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageContainer}>
        {activeImage ? (
          <img
            src={activeImage}
            alt="Product details view"
            className={styles.mainImage}
          />
        ) : (
          <div className={styles.imagePlaceholder}>Product Image</div>
        )}
      </div>

      {galleryImages.length > 0 && (
        <div className={styles.thumbnails}>
          {galleryImages.map((img, index) => (
            <button
              key={index}
              type="button"
              className={`${styles.thumbnailButton} ${activeImage === img ? styles.active : ""}`}
              onClick={() => setActiveImage(img)}
            >
              <img src={img} alt={`Detail view thumbnail ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;