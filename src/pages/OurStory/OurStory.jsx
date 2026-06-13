import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { getOptimizedImageUrl } from "../../utils/cloudinary";
import styles from "./OurStory.module.scss";

function OurStory() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      <Navbar />

      <main className={`${styles.page} ${visible ? styles.fadeIn : ""}`}>
        {/* Section 1: Hero */}
        <section className={styles.heroSection}>
          {/* Decorative Background Wavy Lines */}
          <div className={styles.bgDecoration}>
            <svg viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left to Right Wave 1 */}
              <path
                d="M-100,200 C300,380 600,80 900,280 C1200,480 1400,280 1600,180"
                stroke="rgba(241, 91, 86, 0.35)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Left to Right Wave 2 */}
              <path
                d="M-100,250 C350,450 700,100 1000,320 C1300,540 1450,320 1650,220"
                stroke="rgba(241, 91, 86, 0.25)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Right to Left Wave 3 */}
              <path
                d="M1600,100 C1200,300 900,80 600,320 C300,520 100,320 -200,200"
                stroke="rgba(241, 91, 86, 0.22)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              {/* Diagonal Cross Wave 4 */}
              <path
                d="M-100,400 C400,150 700,480 1100,180 C1300,50 1500,250 1600,350"
                stroke="rgba(241, 91, 86, 0.16)"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className={styles.heroContainer}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>Care That Understands You</h1>
              <p className={styles.heroSub}>
                We believe wellness products should support women with comfort, confidence, and care every single day.
              </p>
            </div>
            <div className={styles.heroImageContainer}>
              <img
                src={getOptimizedImageUrl("https://res.cloudinary.com/droqu4yo5/image/upload/q_auto/f_auto/v1781351623/Soft_on_your_skin_strong_in_comfort__%EF%B8%8F_The_Bloom_brand_panty_set_designed_for_effortless_wear.__._.__jtzvks.jpg", 600)}
                alt="Care That Understands You"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Our Mission */}
        <section className={styles.missionSection}>
          {/* Decorative Background Wavy Lines */}
          <div className={styles.bgDecoration}>
            <svg viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Left to Right Wave 1 */}
              <path
                d="M-100,150 C300,330 600,30 900,230 C1200,430 1400,230 1600,130"
                stroke="rgba(241, 91, 86, 0.35)"
                strokeWidth="12"
                strokeLinecap="round"
              />
              {/* Left to Right Wave 2 */}
              <path
                d="M-100,200 C350,400 700,50 1000,270 C1300,490 1450,270 1650,170"
                stroke="rgba(241, 91, 86, 0.25)"
                strokeWidth="8"
                strokeLinecap="round"
              />
              {/* Right to Left Wave 3 */}
              <path
                d="M1600,50 C1200,250 900,30 600,270 C300,470 100,270 -200,150"
                stroke="rgba(241, 91, 86, 0.22)"
                strokeWidth="10"
                strokeLinecap="round"
              />
              {/* Diagonal Cross Wave 4 */}
              <path
                d="M-100,350 C400,100 700,430 1100,130 C1300,0 1500,200 1600,300"
                stroke="rgba(241, 91, 86, 0.16)"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className={styles.missionContainer}>
            <div className={styles.missionImageContainer}>
              <img
                src={getOptimizedImageUrl("https://res.cloudinary.com/droqu4yo5/image/upload/q_auto/f_auto/v1781351625/Mid_Year_Sale_Is_Here_irqwj7.jpg", 600)}
                alt="Our Mission"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className={styles.missionText}>
              <h2 className={styles.sectionHeading}>Our Mission</h2>
              <p className={styles.missionBody}>
                Creating thoughtful products that prioritize comfort, confidence, and wellbeing.
              </p>
              <div className={styles.accentCard}>
                <div className={styles.accentItem}>
                  <span className={styles.checkmark}>✓</span> Comfort First
                </div>
                <div className={styles.accentItem}>
                  <span className={styles.checkmark}>✓</span> Thoughtfully Designed
                </div>
                <div className={styles.accentItem}>
                  <span className={styles.checkmark}>✓</span> Trusted Quality
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why We Started */}
        <section className={styles.whySection}>
          {/* Top Wave */}
          <div className={styles.waveTop}>
            <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
              <path d="M0,60 L0,30 C240,10 480,50 720,30 C960,10 1200,50 1440,30 L1440,60 Z" />
            </svg>
          </div>

          <div className={styles.whyContainer}>
            <h2 className={`${styles.sectionHeading} ${styles.centerText}`}>Why We Started</h2>
            <p className={styles.whyParagraph}>
              Every woman deserves products that feel safe, comfortable, and designed around her real needs.
            </p>
            <div className={styles.whyCards}>
              <div className={styles.whyCard}>
                <div className={styles.iconCircle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
                    <path d="M12 7v10" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3>Comfort</h3>
                <p>Designed with ultra-soft materials for zero irritation and maximum ease.</p>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.iconCircle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>
                <h3>Care</h3>
                <p>Safe, skin-friendly, toxin-free formulations that respect your body's natural balance.</p>
              </div>

              <div className={styles.whyCard}>
                <div className={styles.iconCircle}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3>Confidence</h3>
                <p>Empowering support that lets you face every moment of your day with assurance.</p>
              </div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className={styles.waveBottom}>
            <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none">
              <path d="M0,30 C240,10 480,50 720,30 C960,10 1200,50 1440,30 L1440,0 L0,0 Z" />
            </svg>
          </div>
        </section>

        {/* Section 4: Our Values */}
        <section className={styles.valuesSection}>
          <div className={styles.valuesContainer}>
            <h2 className={`${styles.sectionHeading} ${styles.centerText}`}>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                
                <h3>Thoughtful Design</h3>
                <p>Crafted specifically to support your body's natural shape and movements.</p>
              </div>

              <div className={styles.valueCard}>
              
                <h3>Safe Materials</h3>
                <p>Formulated with non-toxic, hypoallergenic, and skin-friendly ingredients.</p>
              </div>

              <div className={styles.valueCard}>
                
                <h3>Everyday Comfort</h3>
                <p>Tested under rigorous conditions to guarantee all-day softness and support.</p>
              </div>

              <div className={styles.valueCard}>
                
                <h3>Community First</h3>
                <p>Pledging support and wellness access to women in underserved spaces.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Impact Section */}
        <section className={styles.impactSection}>
          <div className={styles.impactContainer}>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>10,000+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>98%</span>
              <span className={styles.statLabel}>Positive Reviews</span>
            </div>
            <div className={styles.impactStat}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>Communities Reached</span>
            </div>
          </div>
        </section>

        {/* Section 6: Call To Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2>Join Our Wellness Journey</h2>
            <p>Explore products designed with comfort and care in mind.</p>
            <div className={styles.ctaButtons}>
              <Link to="/shop" className={styles.primaryBtn}>Shop Collection</Link>
              <Link to="/" className={styles.secondaryBtn}>Learn More</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default OurStory;
