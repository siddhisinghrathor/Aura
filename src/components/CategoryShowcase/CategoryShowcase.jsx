import styles from "./CategoryShowcase.module.scss";

const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Jewellery",
  "Electronics",
];

function CategoryShowcase() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Shop By Category
      </h2>

      <div className={styles.grid}>
        {categories.map((category) => (
          <div
            key={category}
            className={styles.card}
          >
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryShowcase;