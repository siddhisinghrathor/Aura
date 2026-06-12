import styles from "./CategoryShowcase.module.scss";

const benefits = [
  {
    title: "Dermatologically Tested",
    desc: "Backed by science and tested for zero irritation.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 11 2 2 4-4"></path>
      </svg>
    ),
    color: "#72D4CD" // Mint
  },
  {
    title: "Safe Materials",
    desc: "100% organic cotton and toxin-free materials.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c5.522 0 10 4.477 10 10s-4.478 10-10 10S2 17.523 2 12 6.478 2 12 2z"></path>
        <path d="M12 6v12M6 12h12"></path>
      </svg>
    ),
    color: "#F15B56" // Primary Coral
  },
  {
    title: "Comfort First",
    desc: "Seamless construction engineered for easy movement.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-2h2zm0-4h-2V7h2z"></path>
      </svg>
    ),
    color: "#FAD3CF" // Soft Coral
  },
  {
    title: "Made For Everyday Use",
    desc: "Built to last and support your busy natural cycles.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
        <path d="M12 6v6l4 2"></path>
      </svg>
    ),
    color: "#FFF8F5" // Cream
  }
];

function CategoryShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tagline}>designed with care</span>
        <h2 className={styles.heading}>Why Women Trust Us</h2>
      </div>

      <div className={styles.grid}>
        {benefits.map((benefit) => (
          <div key={benefit.title} className={styles.card}>
            <div
              className={styles.iconWrapper}
              style={{ backgroundColor: benefit.color === "#FFF8F5" ? "#FAD3CF" : `${benefit.color}20`, color: benefit.color === "#FFF8F5" ? "#F15B56" : benefit.color }}
            >
              {benefit.icon}
            </div>
            <h3 className={styles.cardTitle}>{benefit.title}</h3>
            <p className={styles.cardDesc}>{benefit.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryShowcase;