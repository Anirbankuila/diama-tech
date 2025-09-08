import CommonButton from "@/component/CommonBtn/CommonBtn";
import { Company } from "@/component/Company/Company";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import ServicesSection from "@/component/ServicesSection/ServicesSection";
import Subtitle from "@/component/Subtitle/Subtitlle";
import styles from "@/styles/About.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <Head>
        <title>Diama Technology</title>
      </Head>
      <Header />
      {/* ====== About Us Section ====== */}
      <section
        className={styles.section}
        style={{ backgroundImage: "url(/images/bannerBg.png)" }}
      >
        <div className={styles.container}>
          {/* Left Text Content */}
          <div className={styles.textBlock}>
            <div>
              <Subtitle text={"About Us"} />
              <h1 className={styles.heading}>
                Driven by <span className={styles.white}>Creativity</span>,{" "}
                <span className={styles.orange}>Powered by Technology</span>
              </h1>{" "}
            </div>
            <div className={styles.circleWrapper}>
              <svg
                viewBox="0 0 200 200"
                width="200"
                height="200"
                className={styles.circleSvg}
              >
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  />
                </defs>
                <text
                  fill="#aaa"
                  fontSize="13"
                  fontWeight="500"
                  letterSpacing="3"
                >
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    • SCHEDULE A MEETING NOW • EXPLORE SOLUTIONS
                  </textPath>
                </text>
              </svg>

              <div className={styles.circleCenter}>
                LET’S <br /> GO
              </div>
            </div>
          </div>

          {/* Right Image + Circle */}
          <div className={styles.imageBlock}>
            <div className={styles.subBlock}>
              <h3 className={styles.subHeading}>SmartPlatform Integration</h3>
              <p className={styles.subText}>
                Integrating platforms smartly so your business runs faster,
                smoother, and smarter. Empowering you with seamless connectivity
                and future-ready solutions.
              </p>
            </div>
            <img
              src="/images/team-collaboration.png"
              alt="Team Collaboration"
              className={styles.mainImage}
            />
          </div>
        </div>
      </section>
      {/* ====== Solution Section ====== */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.solutionWrapper}>
            {/* Left Image */}
            <div className={styles.leftImage}>
              <img src="/images/office-building.png" alt="Office Building" />
            </div>

            {/* Middle Content */}
            <div className={styles.content}>
              <Subtitle text={"Not Just a Company, A Mindset"} />

              <h2>
                Turning imagination into{" "}
                <span className={styles.orange}>powerful solutions.</span>
              </h2>

              <p>
                We are a team of passionate innovators, designers, and
                developers dedicated to building digital experiences that make a
                real difference. With creativity at our core and technology as
                our tool, we help businesses grow, adapt, and thrive in
                today&apos;s fast-changing digital world.
              </p>
              <div className={styles.bottomTextPart}>
                <div className={styles.bottomTextLeftPart}>
                  <p>
                    <strong>Our Mission →</strong> To empower brands and
                    businesses through innovative solutions in Digital
                    Marketing, Development, and UI/UX Design, ensuring
                    measurable growth and long-term success.
                  </p>

                  <p>
                    <strong>Our Vision →</strong> To become a global leader in
                    digital innovation, creating transformative solutions that
                    empower businesses, inspire creativity, and shape a smarter,
                    connected future.
                  </p>
                </div>
                <div className={styles.rightImage}>
                  <img src="/images/team.png" alt="Teamwork" />
                </div>
              </div>
            </div>

            {/* Right Image */}
          </div>
        </div>
      </section>
      <Company />
      <ServicesSection />
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            {/* Top Badge */}
            <Subtitle text={"Turning Bold Ideas into Digital Landmark"} />

            {/* Main Heading */}
            <h1 className={styles.mainHeading}>
              Have an Idea? Let&apos;s Build Something{" "}
              <span className={styles.extraordinary}>Extraordinary!</span>
            </h1>

            {/* Description */}
            <p className={styles.description}>
              From the very first sketch to the final launch, our team at Diama
              Technologies transforms bold ideas into powerful digital
              experiences that connect, inspire, and deliver real results.
            </p>

            <CommonButton text={"Get Started Today"} href="" />
            {/* CTA Button */}
            {/* <button className={styles.ctaButton}>
              Get Started Today
              <span className={styles.arrow}>↗</span>
            </button> */}
          </div>
        </div>
      </section>
      {/* ====== Solution Section For Stats====== */}
      <section className={styles.statsSection}>
        <div className="container">
          {/* Top Image */}
          <div className={styles.heroImage}>
            <img src="/images/team-meeting.png" alt="Team Meeting" />
          </div>

          {/* Left Content */}

          {/* Main Section with 4 Overlapping Columns */}
          <div className={styles.mainSection}>
            {/* Column 1 */}
            <div className={styles.column}>
              <div className={styles.statCircle}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>
                  <div>Satisfied</div>
                  <div>Clients</div>
                </div>
              </div>
              {/* <div className={styles.leftContent}>
                <p className={styles.freeConsultation}>
                  Free consultation for you
                </p>
                <h2>We are here to help any stage</h2>
              </div> */}
              <div className={styles.stageCard}>
                <div className={styles.stageHeader}>
                  <h4>Early Stage</h4>
                </div>
                <p>Get to elevate your business with big-tech IT technology</p>
                <button className={styles.knowMoreBtn}>
                  Know More <span>→</span>
                </button>
              </div>
            </div>

            {/* Column 2 - Highlighted */}
            <div className={`${styles.column}`}>
              <div className={styles.statCircle}>
                <div className={styles.statNumber}>5K+</div>
                <div className={styles.statLabel}>
                  <div>Successful</div>
                  <div>Projects Delivered</div>
                </div>
              </div>
              <div className={styles.stageCard}>
                <div className={styles.stageHeader}>
                  <h4>Growth Stage</h4>
                </div>
                <p>
                  Get to elevate your business with top-notch IT technology and
                  enter the world
                </p>
                <button className={styles.knowMoreBtn}>
                  Know More <span>→</span>
                </button>
              </div>
            </div>

            {/* Column 3 */}
            <div className={styles.column}>
              <div className={styles.statCircle}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>
                  <div>Ongoing</div>
                  <div>Projects</div>
                </div>
              </div>
              <div className={styles.stageCard}>
                <div className={styles.stageHeader}>
                  <h4>Advance Stage</h4>
                </div>
                <p>
                  Get to elevate your business with top-notch IT technology and
                  deployment
                </p>
                <button className={styles.knowMoreBtn}>
                  Know More <span>→</span>
                </button>
              </div>
            </div>

            {/* Column 4 */}
            <div className={styles.column}>
              <div className={styles.statCircle}>
                <div className={styles.statNumber}>2</div>
                <div className={styles.statLabel}>
                  <div>Awards</div>
                  <div>achievement</div>
                </div>
              </div>
              <div className={styles.stageCard}>
                <div className={styles.stageHeader}>
                  <h4>Final Stage</h4>
                </div>
                <p>Get to elevate your business with top-notch</p>
                <button className={styles.knowMoreBtn}>
                  Know More <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
