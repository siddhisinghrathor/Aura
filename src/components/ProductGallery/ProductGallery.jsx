import { useState } from "react";
import styles from "./ProductGallery.module.scss";

function ProductGallery({ image }) {
  const [activeImage, setActiveImage] =
    useState(image);

  const galleryImages = [
    image,
    image,
    image,
    image,
  ];

  return (
    <div className={styles.gallery}>
      <img
        src={activeImage}
        alt=""
        className={styles.mainImage}
      />

      <div className={styles.thumbnails}>
        {galleryImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            onClick={() =>
              setActiveImage(img)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGallery;