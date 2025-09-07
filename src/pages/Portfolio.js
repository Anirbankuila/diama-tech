import CommonButton from "@/component/CommonBtn/CommonBtn";
import { Company } from "@/component/Company/Company";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Subtitle from "@/component/Subtitle/Subtitlle";
import Testimonial from "@/component/Testimonial/Testimonial";
import styles from "@/styles/Portfolio.module.css";
import { Inter } from "next/font/google";
const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Portfolio() {
  return (
    <>
      <Header />
      <section
        className={styles.mainBanner}
        style={{ backgroundImage: "url(/images/bannerBg.png)" }}
      >
        <div className="container">
          <div className={styles.bannerContent}>
            <Subtitle text={"Innovating Beyond Limits"} />
            <h1>
              Strategic design and development tailored to{" "}
              <span> meet business goals</span>
            </h1>
            <CommonButton text="Start Your Project" href="/" />
          </div>
        </div>
      </section>

      {/*Showcase Section */}
      <section className={styles.showcaseSection}>
        <div className="container">
          <div className={styles.showcaseWrapper}>
            {/* Project Preview */}
            <img src={"/images/ecommerce.png"} alt="ecommerce" />

            {/* Project Info */}
            <div className={styles.projectInfo}>
              <div>
                <h3 className={styles.projectTitle}>
                  E-Commerce Website Design
                </h3>
                <p className={styles.projectDescription}>
                  We designed a modern, conversion-driven e-commerce platform
                  that maximizes a seamless shopping experience.
                </p>
              </div>
              <a href="#" className={styles.viewCaseLink}>
                View Case Study <span className={styles.linkArrow}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Testimonial />
      <Company />
      <Footer />
    </>
  );
}
