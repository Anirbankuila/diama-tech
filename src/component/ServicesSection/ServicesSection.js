import Heading from "../Heading/Heading";
import styles from "../ServicesSection/ServicesSection.module.css";
import Subtitle from "../Subtitle/Subtitlle";
export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.header}>
          <Subtitle text={"What We Do Best"} />
          {/* <button className={styles.subtitle}>What We Do Best</button> */}
          <Heading className={styles.serviceHeading} mainText={'Turning ideas into impact with'} highlightText={'design, technology, and strategy.'} />
          
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <img src="/images/digital-marketing.png" alt="Digital Marketing" />
            <div className={styles.cardOverlay}>
              <h3>Digital Marketing</h3>
              <span>→</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <img src="/images/ui-ux.png" alt="UI/UX Design" />
            <div className={styles.cardOverlay}>
              <h3>UI/UX Design</h3>
              <span>→</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <img src="/images/app development.png" alt="App Development" />
            <div className={styles.cardOverlay}>
              <h3>App Development</h3>
              <span>→</span>
            </div>
          </div>

          {/* Center Special Card */}
          <div className={`${styles.card} ${styles.centerCard}`}>
            <h3>Trusted by Businesses Worldwide</h3>
            <p>Innovative services crafted for success.</p>
            <button className={styles.consultBtn}>
              Get Your Free Consultation →
            </button>
          </div>

          {/* Card 5 */}
          <div className={styles.card}>
            <img src="/images/graphic design.png" alt="Graphic Design" />
            <div className={styles.cardOverlay}>
              <h3>Graphic Design</h3>
              <span>→</span>
            </div>
          </div>

          {/* Card 6 */}
          <div className={styles.card}>
            <img src="/images/web design.png" alt="Web Design & Development" />
            <div className={styles.cardOverlay}>
              <h3>Web Design & Development</h3>
              <span>→</span>
            </div>
          </div>

          {/* Card 7 */}
          <div className={styles.card}>
            <img src="/images/devops1.png" alt="DevOps" />
            <div className={styles.cardOverlay}>
              <h3>DevOps</h3>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
