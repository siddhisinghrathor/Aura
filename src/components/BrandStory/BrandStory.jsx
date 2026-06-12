import styles from "./BrandStory.module.scss";

function BrandStory() {
  return (
    <section className={styles.story}>
      <div className={styles.content}>
        <h2>
          Thoughtfully Curated.
          Beautifully Delivered.
        </h2>

        <p>
          Every product in our collection is
          carefully selected to combine
          quality, elegance, and everyday
          practicality.
        </p>
      </div>

      <div className={styles.image}>
        <img
          src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
          alt="Brand Story"
        />
      </div>
    </section>
  );
}

export default BrandStory;