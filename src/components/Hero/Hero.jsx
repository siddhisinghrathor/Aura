import { getOptimizedImageUrl } from "../../utils/cloudinary";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      {/* Decorative Background Wavy Lines */}
      <div className={styles.bgDecoration}>
        <svg viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Left to Right Wave 1 */}
          <path
            d="M-100,180 C300,340 600,60 900,240 C1200,420 1400,240 1600,150"
            stroke="rgba(241, 91, 86, 0.20)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          {/* Left to Right Wave 2 */}
          <path
            d="M-100,220 C350,380 700,80 1000,280 C1300,480 1450,280 1650,180"
            stroke="rgba(241, 91, 86, 0.12)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Right to Left Wave 3 */}
          <path
            d="M1600,80 C1200,240 900,50 600,230 C300,410 100,230 -200,120"
            stroke="rgba(241, 91, 86, 0.15)"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      </div>

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