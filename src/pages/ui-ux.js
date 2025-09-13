import CommonButton from "@/component/CommonBtn/CommonBtn";
import { Company } from "@/component/Company/Company";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Heading from "@/component/Heading/Heading";
import Subtitle from "@/component/Subtitle/Subtitlle";
import Testimonial from "@/component/Testimonial/Testimonial";
import styles from "@/styles/ui-ux.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useRef } from "react";
import { Form } from "react-bootstrap";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Service() {
  const swiperRef = useRef(null);
  return (
    <>
      <Head>
        <title>DIAMA Technologies | UI/UX Design Services</title>
        <meta
          name="description"
          content="Transform your digital products with DIAMA Technologies' expert UI/UX design services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* ======Banner======= */}
      <section
        className={styles.mainBanner}
        style={{ backgroundImage: "url(/images/bannerBg.png)" }}
      >
        <div className="container">
          <div className={styles.bannerContent}>
            <div className={styles.bannerLeftContent}>
              <Subtitle text={"Innovating Beyond Limits"} />
              <h1>
                Crafting seamless experiences that captivate users and{" "}
                <span> grow your business. </span>
              </h1>
              <CommonButton text="Talk to Our Team" href="/" />
            </div>
          </div>
        </div>
      </section>

      {/* ======Hire us====== */}
      <section className={styles.hireUs}>
        <div className="container">
          <div className={styles.hireUsContent}>
            <Heading mainText={"Hire Expert UX/UI Designers"} />
            <p>
              Turn your ideas into reality with our high-end design solutions.
              We help businesses enhance performance through interactive
              prototypes that deliver exceptional user experiences. Our team
              transforms your concepts into highly functional and engaging
              designs, ensuring your brand stands out.
            </p>
          </div>
          <div className={styles.whyUs}>
            <div className="row">
              <div className="col-lg-7">
                <div className={styles.whyUsContent}>
                  <h4>Why Choose Our UX/UI Services?</h4>
                  <div className={styles.whyUsList}>
                    <div className={styles.whyUsItem}>
                      <h2>01</h2>
                      <div className={styles.whyUsText}>
                        <h5>Integrated Approach</h5>
                        <p>
                          Our designers combine creativity and strategy to
                          deliver holistic solutions.
                        </p>
                      </div>
                    </div>
                    <div className={styles.whyUsItem}>
                      <h2>02</h2>
                      <div className={styles.whyUsText}>
                        <h5>Expert Execution</h5>
                        <p>
                          Industry-leading experts craft intuitive and engaging
                          user experiences.
                        </p>
                      </div>
                    </div>
                    <div className={styles.whyUsItem}>
                      <h2>03</h2>
                      <div className={styles.whyUsText}>
                        <h5>Integrated Approach</h5>
                        <p>
                          Our designers combine creativity and strategy to
                          deliver holistic solutions.
                        </p>
                      </div>
                    </div>
                    <div className={styles.whyUsItem}>
                      <h2>04</h2>
                      <div className={styles.whyUsText}>
                        <h5>Integrated Approach</h5>
                        <p>
                          Our designers combine creativity and strategy to
                          deliver holistic solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.whyUsImg}>
                    <img src="/images/ui-services.png" alt="whyUs" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className={styles.letsTalk}>
                  <Form>
                    <h4>Schedule a Free Consultation</h4>
                    <div className="row">
                      <div className="col-lg-6">
                        <Form.Group
                          className={styles.formGroup}
                          controlId="formBasicEmail"
                        >
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            className={styles.eachInput}
                            type="text"
                            placeholder="First Name"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group
                          className={styles.formGroup}
                          controlId="formBasicEmail"
                        >
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            className={styles.eachInput}
                            type="text"
                            placeholder="Last Name"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group
                          className={styles.formGroup}
                          controlId="formBasicEmail"
                        >
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            className={styles.eachInput}
                            type="text"
                            placeholder="Phone Number"
                          />
                        </Form.Group>
                      </div>
                      <div className="col-lg-6">
                        <Form.Group
                          className={styles.formGroup}
                          controlId="formBasicEmail"
                        >
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            className={styles.eachInput}
                            type="email"
                            placeholder="Email Address"
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <Form.Group
                      className={styles.formGroup}
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Website</Form.Label>
                      <Form.Control
                        className={styles.eachInput}
                        type="text"
                        placeholder="Website"
                      />
                    </Form.Group>
                    <Form.Group
                      className={styles.formGroup}
                      controlId="formBasicEmail"
                    >
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        className={styles.eachInput}
                        as="textarea"
                        rows={4}
                        placeholder="Leave us message..."
                      />
                      {/* <Form.TextArea rows={4} placeholder="Leave us message..." /> */}
                    </Form.Group>
                    <p>
                      Disclaimer: By submitting this form, you agree to be
                      contacted by Diama Technologies. You may opt out anytime.
                    </p>
                    <CommonButton text="Submit" href="/" />
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========Companies======= */}
      <section
        className={styles.companyBg}
        style={{ backgroundImage: "url(/images/companyBg.png)" }}
      >
        <Company />
      </section>

      {/* =======UI/UX Services======= */}
      <section className={styles.uiServices}>
        <div className={styles.servicShape}>
          <img src="/images/serviceBg.png" alt="drivingForce" />
        </div>
        <div className="container">
          <div className={styles.uiServicesContent}>
            <Heading mainText={"How UI/UX Services Help Your Business"} />
          </div>
          <div className={`row ${styles.servicesRow}`}>
            <div className="col-lg-4">
              <div className={styles.serviceItem}>
                <span data-text="1">1</span>
                <h5>Understand Your Users</h5>
                <p>
                  Every successful product starts with knowing the audience.
                  Through research, surveys, and usability studies, UI/UX design
                  helps you identify user needs, behaviors, and pain points.
                  This ensures your product is built for the right people.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.serviceItem}>
                <span data-text="2">2</span>
                <h5>Build Intuitive Interfaces</h5>
                <p>
                  Complexity turns users away. A well-structured interface with
                  clear navigation, readable layouts, and logical design
                  elements makes it easy for users to explore your website or
                  app without confusion.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.serviceItem}>
                <span data-text="3">3</span>
                <h5>Enhance Engagement</h5>
                <p>
                  Engagement is the key to retention. Interactive features,
                  smooth animations, and visually appealing elements make your
                  platform more enjoyable, encouraging users to spend more time
                  and return often.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.serviceItem}>
                <span data-text="4">4</span>
                <h5>Boost Conversions</h5>
                <p>
                  Good design is directly linked to business growth. By
                  simplifying checkout flows, optimizing call-to-actions, and
                  reducing friction in the user journey, UI/UX design increases
                  conversions and revenue.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.serviceItem}>
                <span data-text="5">5</span>
                <h5>Strengthen Brand Value</h5>
                <p>
                  Your digital presence reflects your brand. A consistent design
                  language — colors, typography, and style — builds trust and
                  recognition, making your brand memorable and reliable.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className={styles.serviceItem}>
                <span data-text="6">6</span>
                <h5>Scale with Confidence</h5>
                <p>
                  UI/UX design reduces costly mistakes by testing ideas early
                  through prototypes and usability sessions. This ensures
                  products are scalable, reliable, and future-ready, saving both
                  time and money in development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========testimonials======= */}
      <div
        className={styles.testimonialBg}
        style={{ backgroundImage: "url(/images/testibackground.png)" }}
      >
        <Testimonial />
      </div>

      {/* ========driving force======= */}
      <section className={styles.drivingForce}>
        <div className="container">
          <div className={styles.drivingForceContent}>
            <Heading
              mainText={"TMeet the Driving Force Behind Our Success: "}
              highlightText={"Our Exceptional Team"}
            />
            <div className={styles.drivingForceImg}>
              <img src="/images/drivingForce.png" alt="drivingForce" />
            </div>
            <div className={styles.teamText}>
              <p>
                At <strong>Diama Technologies</strong>, our team is more than
                just a group of professionals — they are the visionaries,
                innovators, and creators who drive our growth. With unmatched
                expertise, creativity, and dedication, they transform challenges
                into opportunities and ideas into powerful solutions.
              </p>
              <p>
                Guided by passion and collaboration, our exceptional team
                consistently pushes boundaries, sets new benchmarks, and
                delivers lasting value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ------footer-------- */}
      <Footer />
    </>
  );
}
