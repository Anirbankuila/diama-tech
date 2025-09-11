import { BsArrowRight } from "react-icons/bs";
import Heading from "../Heading/Heading";
import styles from "../ServicesSection/ServicesSection.module.css";
import Subtitle from "../Subtitle/Subtitlle";
import CommonButton from "../CommonBtn/CommonBtn";
export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.header}>
          <Subtitle text={"What We Do Best"} />
        </div>
        <div
          className={styles.serviceWrap}
          // style={{ backgroundImage: "url('/images/serviceBg.jpg')" }}
        >
          <div className={styles.header}>
            {/* <button className={styles.subtitle}>What We Do Best</button> */}
            <Heading
              className={styles.serviceHeading}
              mainText={"Turning ideas into impact with"}
              highlightText={"design, technology, and strategy."}
            />
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className={styles.card}>
                <img
                  src="/images/digital-marketing.png"
                  alt="Digital Marketing"
                />
                <div className={styles.cardOverlay}>
                  <h3>Digital Marketing</h3>
                  <span>
                    <BsArrowRight />
                  </span>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/graphic design.png" alt="Graphic Design" />
                <div className={styles.cardOverlay}>
                  <h3>Graphic Design</h3>
                  <span>
                    <BsArrowRight />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.card}>
                <img src="/images/ui.png" alt="UI/UX Design" />
                <div className={styles.cardOverlay}>
                  <h3>UI/UX Design</h3>
                  <span>
                    <BsArrowRight />
                  </span>
                </div>
              </div>
              <div className={`${styles.card} ${styles.centerCard}`}>
                <h3>Trusted by Businesses Worldwide</h3>
                <p>Innovative services crafted for success.</p>
                <button className={styles.consultBtn}>
                  Get Your Free Consultation <BsArrowRight />
                </button>
              </div>
              <div className={styles.card}>
                <img src="/images/html.png" alt="Web Design & Development" />
                <div className={styles.cardOverlay}>
                  <h3>Web Design & Development</h3>
                  <span>
                    <BsArrowRight />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.card}>
                <img src="/images/app development.png" alt="App Development" />
                <div className={styles.cardOverlay}>
                  <h3>App Development</h3>
                  <span>
                    <BsArrowRight />
                  </span>
                </div>
              </div>
              <div className={styles.card}>
                <img src="/images/devops1.png" alt="DevOps" />
                <div className={styles.cardOverlay}>
                  <h3>DevOps</h3>
                  <span>
                    <BsArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.heroContent}>
            {/* Top Badge */}
            <Subtitle text={"Turning Bold Ideas into Digital Landmark"} />
            {/* Main Heading */}
            <h2 className={styles.mainHeading}>
              Have an Idea? Let&apos;s Build Something{" "}
              <span className={styles.extraordinary}>Extraordinary!</span>
            </h2>

            {/* Description */}
            <p className={styles.description}>
              From the very first sketch to the final launch, our team at Diama
              Technologies transforms bold ideas into powerful digital
              experiences that connect, inspire, and deliver real results.
            </p>

            <CommonButton text={"Get Started Today"} href="#" />
            <div className={styles.heroImage}>
              <img src="/images/team-meeting.png" alt="Team Meeting" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
