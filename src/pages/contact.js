import CommonButton from "@/component/CommonBtn/CommonBtn";
import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Heading from "@/component/Heading/Heading";
import Subtitle from "@/component/Subtitle/Subtitlle";
import styles from "@/styles/Contact.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
    isAcceptTermsCondition: false,
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

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Consultation submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          emailAddress: "",
          message: "",
          website: "",
          isAcceptTermsCondition: false,
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
            <div className={styles.formWrapper} data-aos="fade-right">
              <div className={styles.formWrapperHeading}>
                <h2>Let’s chat, Reach Out to Us</h2>
                <p>
                  Have question or feedback? We&apos;re here to help, send us a
                  message, and we&apos;ll respond within 24 hours.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className={styles.inputGrid}>
                  <div className={styles.inputGroup}>
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="First name"
                      name="firstName"
                      onChange={handleChange}
                      value={formData.firstName}
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="Email address"
                      name="emailAddress"
                      onChange={handleChange}
                      required
                      value={formData.emailAddress}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Phone number"
                      name="phoneNumber"
                      onChange={handleChange}
                      value={formData.phoneNumber}
                      required
                    />
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label>Message</label>
                  <textarea
                    placeholder="Leave us message..."
                    className={styles.textarea}
                    value={formData.message}
                    name="message"
                    onChange={handleChange}
                    required
                  />
                </div>

                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    value={formData.isAcceptTermsCondition}
                    onChange={handleChange}
                    required
                    name="isAcceptTermsCondition"
                  />
                  I agree to our friendly <a href="#">privacy policy</a>
                </label>

                <CommonButton text="Send message" btnType="submit" />
              </form>
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
            <div className={styles.infoWrapper} data-aos="fade-left">
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
                    <Link href={"mailto:mm@diamatechnologies.com"}>
                      mm@diamatechnologies.com
                    </Link>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.iconWrapper}>
                    <img src="/images/call icon.png" alt="Phone Icon" />
                  </div>
                  <div className={styles.textWrapper}>
                    <span>Phone Number</span>
                    <Link href={"tel:+919874707665"}>+91 98747 07665</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.locationSection} data-aos="fade-up">
        <div className="container">
          <div className={styles.sectionHeader}>
            <Subtitle text={"Come say hello!"} />
            <Heading
              className={styles.locationHeading}
              mainText={"Step into our world"}
              highlightText={"discover our location."}
            />
          </div>

          <div className={styles.mapWrapper} data-aos="zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d58528.23017704183!2d87.30707363380833!3d23.53198498298426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s46%2C%20Rabindra%20Nagar%20Market%2C%20Durgapur-713206!5e0!3m2!1sen!2sin!4v1757833190161!5m2!1sen!2sin"
              width="600"
              height="450"
              style={styles.map}
              allowfullscreen=""
              loading="lazy"
              
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/*Showcase Section */}
      <section
        data-aos="fade-up"
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
