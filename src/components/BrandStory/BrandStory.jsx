import styles from "./BrandStory.module.scss";

const educationTopics = [
  {
    title: "Understanding Comfort & Care",
    tagline: "wellness philosophy",
    desc: "Every body is unique. Learning how to care for your skin with clean, breathable materials is the first step toward a healthier self-care routine. Our products are designed to breathe with your skin and prevent irritation.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Why Quality Materials Matter",
    tagline: "ingredient check",
    desc: "Synthetic fibers trap heat and moisture, leading to skin rashes and discomfort. We use premium long-staple organic cotton and sustainable bamboo viscose that are naturally hypoallergenic and soft on sensitive skin.",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Choosing the Right Support",
    tagline: "daily routines",
    desc: "Whether you need light, flexible activewear for yoga, or secure leak-proof lounge options for restful sleep, matching the product fit to your natural routine keeps you feeling comfortable all day.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
  }
];

function BrandStory() {
  return (
    <section className={styles.section} id="education">
      <div className={styles.header}>
        <span className={styles.tagline}>product education</span>
        <h2 className={styles.heading}>Science Behind the Comfort</h2>
      </div>

      <div className={styles.topicsContainer}>
        {educationTopics.map((topic, index) => (
          <div key={topic.title} className={styles.row}>
            <div className={styles.imageWrapper}>
              <img
                src={topic.image}
                alt={topic.title}
                className={styles.image}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </div>

            <div className={styles.content}>
              <span className={styles.topicTag}>{topic.tagline}</span>
              <h3 className={styles.topicTitle}>{topic.title}</h3>
              <p className={styles.topicDesc}>{topic.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrandStory;