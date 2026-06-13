import { useState, useEffect } from "react";
import styles from "./ProductGallery.module.scss";
import { getOptimizedImageUrl } from "../../utils/cloudinary";

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
            src={getOptimizedImageUrl(activeImage, 600)}
            alt="Product details view"
            className={styles.mainImage}
            loading="eager"
            decoding="async"
            width="500"
            height="550"
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
              <img
                src={getOptimizedImageUrl(img, 100)}
                alt={`Detail view thumbnail ${index + 1}`}
                loading="lazy"
                decoding="async"
                width="60"
                height="60"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;