import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.tag}>
            New Collection 2026
          </span>

          <h1 className={styles.title}>
            Curated For
            <br />
            Modern Living
          </h1>

          <p className={styles.description}>
            Discover thoughtfully selected products
            that blend elegance, quality, and
            everyday functionality.
          </p>

          <button className={styles.cta}>
            Shop Collection
          </button>
        </div>

        <div className={styles.imageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="Featured Product"
          />
        </div>
      </div>

      <div className={styles.circleOne}></div>
      <div className={styles.circleTwo}></div>
    </section>
  );
}

export default Hero;