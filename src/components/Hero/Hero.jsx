import { getOptimizedImageUrl } from "../../utils/cloudinary";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.tagline}>Women's Wellness & Self-Care</span>
          <h1 className={styles.title}>
            Feel Comfortable <br />
            <span className={styles.highlight}>Every Single Day</span>
          </h1>
          <p className={styles.description}>
            Thoughtfully designed products for modern women who deserve better care. Our clean, safe, and comfortable formulations help you embrace your natural wellness cycle with confidence.
          </p>

        </div>

        <div className={styles.imageWrapper}>
          {/* Organic background bubble shape */}
          <div className={styles.organicShape} />
          
          <div className={styles.mainImageContainer}>
            <img
              src={getOptimizedImageUrl("https://res.cloudinary.com/droqu4yo5/image/upload/q_auto/f_auto/v1781351624/Dreamlike_Fashion_Editorial_Cloud_Concept_Visual_zpcjbw.jpg", 800)}
              alt="Comfortable and relaxed woman embracing wellness"
              className={styles.image}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="500"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;