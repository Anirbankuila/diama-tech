import CommonButton from "@/component/CommonBtn/CommonBtn";
import { Company } from "@/component/Company/Company";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Heading from "@/component/Heading/Heading";
import Subtitle from "@/component/Subtitle/Subtitlle";
import Testimonial from "@/component/Testimonial/Testimonial";
import styles from "@/styles/Portfolio.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { FiArrowRight } from "react-icons/fi";
const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website Design",
      image: "/images/ecommerce.png",
      url: "#",
      description:
        "We designed a modern, conversion-driven e-commerce platform that maximizes a seamless shopping experience.",
    },
    {
      id: 2,
      title: "Promptly – AI Chatbot App",
      image: "/images/ai-chatbot.png",
      url: "#",
      description:
        "A next-generation AI-powered chatbot solution designed to enhance productivity and engagement. The platform integrates intelligent features including real-time chat, secure file sharing, image generation, multilingual translation, and audio-based interaction.",
    },
    {
      id: 3,
      title: "Horoscope App – Personalized Astrology Experience",
      image: "/images/weather-app.png",
      url: "#",
      description:
        "A sleek, intuitive astrology app designed to deliver daily horoscopes, personalized birth chart insights, and compatibility analysis.",
    },
  ];

  return (
    <>
      <Head>
        <title>Diama Technology</title>
      </Head>
      <Header />
      <section
        className={styles.mainBanner}
        data-aos="fade-up"
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
        <div className={styles.bottomLeftShape}>
          <img
            src="/images/portfolio-union-shape.png"
            alt="portfolio-union-shape"
          />
        </div>
      </section>
      {/*Showcase Section */}
      <section className={styles.showcaseSection}>
        <div className="container">
          {projects.map((project) => (
            <div key={project.id} className={styles.showcaseWrapper} data-aos="fade-up">
              {/* Project Preview */}
              <img src={project.image} alt={project.title} />

              {/* Project Info */}
              <div className={styles.projectInfo}>
                <div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                </div>
                <a href={project.url} className={styles.viewCaseLink}>
                  View Case Study{" "}
                  <span className={styles.linkArrow}>
                    <FiArrowRight />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Testimonial backgroundStyle={{ background: "#1a1a1a" }} />
      <Company />
      <section
        className={styles.buildTogether}
        data-aos="fade-up"
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
