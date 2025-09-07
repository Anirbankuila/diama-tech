import CommonButton from "@/component/CommonBtn/CommonBtn";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Heading from "@/component/Heading/Heading";
import Subtitle from "@/component/Subtitle/Subtitlle";
import styles from "@/styles/Contact.module.css";
import Head from "next/head";
export default function contact() {
  return (
    <>
      <Head>
        <title>Diama Technology</title>
      </Head>
      <Header />
      <section
        className={styles.mainBanner}
        style={{ backgroundImage: "url(/images/bannerBg.png)" }}
      >
        <div className="container">
          <div className={styles.bannerContent}>
            <Subtitle text={"Get in Touch"} />
            <h1>
              We’d Love To Hear <span> From You!</span>
            </h1>
          </div>
        </div>
        <div className={styles.bottomLeftShape}>
          <img
            src="/images/portfolio-union-shape.png"
            alt="portfolio-union-shape"
          />
        </div>
      </section>
      <section
        className={styles.contactSection}
        style={{ backgroundImage: "url(/images/contactBg.png)" }}
      >
        <div className="container">
          <div className={styles.contactContent}>
            {/* Left: Form */}
            <div className={styles.formWrapper}>
              <h2>Let’s chat, Reach Out to Us</h2>
              <p>
                Have question or feedback? We&apos;re here to help, send us a
                message, and we&apos;ll respond within 24 hours.
              </p>

              <div className={styles.inputGrid}>
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
                <input type="email" placeholder="Email address" />
                <input type="tel" placeholder="Phone number" />
              </div>

              <textarea
                placeholder="Leave us message..."
                className="textarea"
                style={{
                  height: "275px",
                  width: "100%",
                  borderRadius: "20px",
                  padding: "10px",
                  marginBottom: "2rem",
                }}
              ></textarea>

              <label className={styles.checkboxLabel}>
                <input type="checkbox" />I agree to our friendly{" "}
                <a href="#">privacy policy</a>
              </label>

              <CommonButton text="Send message" href="#" />
            </div>

            {/* Right: Image + Contact Info */}
            {/* <div className={styles.infoWrapper}>
              <div className={styles.contactImage}>
                <img
                  src="/images/contact page banner.png"
                  alt="People chatting"
                />
              </div>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span>Email</span>
                  <p>mm@diamatechnologies.com</p>
                </div>
                <div className={styles.contactItem}>
                  <span>Phone Number</span>
                  <p>+91 98747 07685</p>
                </div>
              </div>
            </div> */}
            <div className={styles.infoWrapper}>
              <div className={styles.contactImage}>
                <img
                  src="/images/contact page banner.png"
                  alt="People chatting"
                />
              </div>

              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <img src="/images/email icon.png" alt="Email Icon" />
                  </div>
                  <div className={styles.textWrapper}>
                    <span>Email</span>
                    <p>mm@diamatechnologies.com</p>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <img src="/images/call icon.png" alt="Phone Icon" />
                  </div>
                  <div className={styles.textWrapper}>
                    <span>Phone Number</span>
                    <p>+91 98747 07665</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.locationSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Subtitle text={"Come say hello!"} />
            <h2>
              Step into our world <br />
              <span>discover our location.</span>
            </h2>
          </div>

          <div className={styles.mapWrapper}>
            <img src="/images/come-say-hello.png" alt="come say hello" />
          </div>
        </div>
      </section>

      {/*Showcase Section */}
      <section
        className={styles.buildTogether}
        style={{ backgroundImage: "url(/images/buildBg.png)" }}
      >
        <img
          src={"/images/Union.png"}
          alt="segemnt"
          className={styles.buildshape}
        />
        <div className="container">
          <div className={styles.buildTogetherContent}>
            <Heading
              mainText={"Ready To bring your "}
              highlightText={"vision to life?"}
              className={styles.buildTogetherHeading}
            />

            <CommonButton text={"Start Your Project"} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
