import styles from "./Newsletter.module.scss";

function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome to our community! We'll keep you updated with wellness tips and exclusive care updates.");
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.tagline}>newsletter</span>
        <h2 className={styles.heading}>Join Our Community</h2>
        <p className={styles.subtext}>
          Get wellness tips, product updates, and exclusive offers.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="newsletter-email" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', border: 0 }}>
            Email Address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email address..."
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
