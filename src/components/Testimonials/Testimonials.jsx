import { getOptimizedImageUrl } from "../../utils/cloudinary";
import styles from "./Testimonials.module.scss";

const reviews = [
  {
    name: "Aditi Sharma",
    avatar: getOptimizedImageUrl("https://images.unsplash.com/photo-1494790108377-be9c29b29330", 120),
    rating: 5,
    text: "Finally, a brand that actually understands comfort! The organic bamboo lounge tee is incredibly soft and has caused zero skin irritation. I've completely switched my daily wear."
  },
  {
    name: "Priya Menon",
    avatar: getOptimizedImageUrl("https://images.unsplash.com/photo-1534528741775-53994a69daeb", 120),
    rating: 5,
    text: "The therapeutic heating pad is an absolute lifesaver. It provides the perfect temperature level and fits comfortably around the waist. Thank you for this thoughtfully designed product!"
  },
  {
    name: "Meera Krishnan",
    avatar: getOptimizedImageUrl("https://images.unsplash.com/photo-1544005313-94ddf0286df2", 120),
    rating: 5,
    text: "Extremely gentle on sensitive skin. You can immediately feel that the materials used are premium and toxin-free. The customer support is also incredibly friendly and helpful."
  }
];

function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.tagline}>real feedback</span>
        <h2 className={styles.heading}>Loved by Modern Women</h2>
      </div>

      <div className={styles.grid}>
        {reviews.map((review) => (
          <div key={review.name} className={styles.card}>
            <div className={styles.stars}>
              {[...Array(review.rating)].map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>
            
            <p className={styles.text}>"{review.text}"</p>

            <div className={styles.profile}>
              <img
                src={review.avatar}
                alt={`Customer avatar of ${review.name}`}
                className={styles.avatar}
                loading="lazy"
                decoding="async"
                width="60"
                height="60"
              />
              <h4 className={styles.name}>{review.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
