import CommonButton from "@/component/CommonBtn/CommonBtn";
import { Company } from "@/component/Company/Company";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Heading from "@/component/Heading/Heading";
import MultiStepModal from "@/component/MultiStepModal/MultiStepModal";
import Subtitle from "@/component/Subtitle/Subtitlle";
import Testimonial from "@/component/Testimonial/Testimonial";
import styles from "@/styles/ui-ux.module.css";
import { ServicesData } from "@/utils/constantData";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Service() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const router = useRouter();
  const { category } = router.query;
  const service = ServicesData[category];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Form submitted!");
    const dataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phoneNumber: formData.phoneNumber,
      website: formData.website,
      emailAddress: formData.email,
      message: formData.message,
    };

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (res.ok) {
        alert("Consultation submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          website: "",
          message: "",
        });
      } else {
        const result = await res.json();
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Submit Error:", error);
      alert("Something went wrong");
    }
  };

  if (!service) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>Service Not Found</h1>
        <p>The category &quot;{category}&quot; does not exist.</p>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>{service.title} | Diama Technologies</title>
        {/* <meta
          name="description"
          content="Transform your digital products with DIAMA Technologies' expert UI/UX design services."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header />
      {/* ======Banner======= */}
      <section
        className={styles.mainBanner}
        data-aos="fade-up"
        style={{ backgroundImage: "url(/images/bannerBg.png)" }}
      >
        <div className="container">
          <div className={styles.bannerContent}>
            <div className={styles.bannerLeftContent}>
              <Subtitle text={"Innovating Beyond Limits"} />
              <h1>{service.description}</h1>
              {/* <h1>
                Crafting seamless experiences that captivate users and{" "}
                <span> grow your business. </span>
              </h1> */}
              <CommonButton text="Talk to Our Team" href="/contact" />
            </div>
          </div>
        </div>
        <MultiStepModal isOpen={isModalOpen} onClose={closeModal} />
      </section>

      {/* ======Hire us====== */}
      <section className={styles.hireUs}>
        <div className="container">
          <div className={styles.hireUsContent} data-aos="fade-up">
            <Heading mainText={service.hireUs.heading} />
            <p>{service.hireUs.description}</p>
          </div>
          <div className={styles.whyUs}>
            <div className="row">
              <div className="col-lg-7">
                <div className={styles.whyUsContent} data-aos="fade-right">
                  <h4>Why Choose Our {service.title}?</h4>
                  <div className={styles.whyUsList}>
                    {service?.hireUs.whyUs?.map((reason, index) => {
                      return (
                        <div className={styles.whyUsItem} key={index}>
                          <h2>{reason.number}</h2>
                          <div className={styles.whyUsText}>
                            <h5>{reason.title}</h5>
                            <p>{reason.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className={styles.whyUsImg} data-aos="zoom-in">
                    <img src={service?.hireUs?.image} alt="whyUs" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5" data-aos="fade-left">
                <div className={styles.letsTalk}>
                  <Form onSubmit={handleSubmit}>
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
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
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
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
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
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
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
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
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
                        name="website"
                        placeholder="Website"
                        value={formData.website}
                        onChange={handleChange}
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
                        name="message"
                        placeholder="Leave us message..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <p>
                      Disclaimer: By submitting this form, you agree to be
                      contacted by Diama Technologies. You may opt out anytime.
                    </p>
                    <CommonButton href="#" text="Submit" btnType="submit" />
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
            {service?.benefits?.map((benefit, index) => {
              return (
                <div className="col-lg-4 mb-4" key={index} data-aos="fade-up">
                  <div className={styles.serviceItem}>
                    <span data-text={index + 1}>{benefit.number}</span>
                    <h5>{benefit.title}</h5>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              );
            })}
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
      <section className={styles.drivingForce} data-aos="fade-up">
        <div className="container">
          <div className={styles.drivingForceContent}>
            <Heading
              mainText={"TMeet the Driving Force Behind Our Success: "}
              highlightText={"Our Exceptional Team"}
            />
            <div className={styles.drivingForceImg} data-aos="zoom-in">
              <img src="/images/drivingForce.png" alt="drivingForce" />
            </div>
            <div className={styles.teamText} data-aos="fade-up">
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
