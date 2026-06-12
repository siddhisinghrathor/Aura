import styles from "./LookbookGrid.module.scss";

const trustItems = [
  {
    title: "Thoughtfully Designed",
    desc: "Tailored to adapt to your body's natural rhythm and provide support where you need it most.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="M12 8v8M8 12h8"></path>
      </svg>
    ),
    bg: "#FFF8F5"
  },
  {
    title: "Skin Friendly",
    desc: "Hypoallergenic, breathable plant-based fibers that protect against irritation and heat rash.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10S17.522 2 12 2zM9 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"></path>
      </svg>
    ),
    bg: "#FFF8F5"
  },
  {
    title: "Quality Assured",
    desc: "Every batch undergoes rigorous quality checks and holds certifications for clean safety.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    bg: "#FFF8F5"
  },
  {
    title: "Trusted By Thousands",
    desc: "Over 50,000+ happy women have made the switch to our products for a better care routine.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    bg: "#FFF8F5"
  }
];

function LookbookGrid() {
  return (
    <section className={styles.section} id="why-choose-us">
      <div className={styles.header}>
        <span className={styles.tagline}>our promise to you</span>
        <h2 className={styles.heading}>Made For Better Comfort</h2>
        <p className={styles.subtext}>
          We design wellness solutions built on safety, quality, and complete transparency.
        </p>
      </div>

      <div className={styles.grid}>
        {trustItems.map((item) => (
          <div key={item.title} className={styles.card} style={{ backgroundColor: item.bg }}>
            <div className={styles.iconContainer}>
              {item.icon}
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LookbookGrid;
