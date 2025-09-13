import Heading from "@/component/Heading/Heading";
import Subtitle from "@/component/Subtitle/Subtitlle";
import { Inter } from "next/font/google";
import { useRef } from "react";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import {
  HiOutlineArrowSmLeft,
  HiOutlineArrowSmRight,
  HiStar,
} from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Testimonial.module.css";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const Testimonial = () => {
  const swiperRef = useRef(null);
  return (
    <section className={styles.testimonial}>
      <div className="container">
        <div className={styles.testimonialWrap}>
          <img
            src={"/images/testi1.png"}
            alt="testi"
            className={styles.testiImg1}
          />
          <img
            src={"/images/testi2.png"}
            alt="testi"
            className={styles.testiImg2}
          />
          <img
            src={"/images/testi4.png"}
            alt="testi"
            className={styles.testiImg4}
          />
          <img
            src={"/images/testi5.png"}
            alt="testi"
            className={styles.testiImg5}
          />
          <img
            src={"/images/testi6.png"}
            alt="testi"
            className={styles.testiImg6}
          />
          <img
            src={"/images/testi7.png"}
            alt="testi"
            className={styles.testiImg7}
          />
          <img
            src={"/images/testi8.png"}
            alt="testi"
            className={styles.testiImg8}
          />
          <img
            src={"/images/testi9.png"}
            alt="testi"
            className={styles.testiImg9}
          />
          <div className={styles.topHeading}>
            <Subtitle text={"Testimonial"} />
            <Heading
              mainText={"What our customer"}
              highlightText={"says About Us"}
            />
          </div>
          <div
            className={styles.testimonialSlider}
            style={{ backgroundImage: "url('/images/testiBg.png')" }}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              pagination={false}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              <SwiperSlide>
                <div className={styles.slideItem}>
                  <BiSolidQuoteAltLeft className={styles.quoteLeft} />
                  <BiSolidQuoteAltRight className={styles.quoteRight} />
                  <p>
                    We were invisible on Google before partnering with DIAMA
                    Technologies. Within just three months, our website ranked
                    on the first page for our primary keywords. Their SEO team
                    knows exactly what they’re doing."
                  </p>
                  <ul>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                  </ul>
                  <h4>Rajesh Mehra</h4>
                  <span>Founder</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slideItem}>
                  <BiSolidQuoteAltLeft className={styles.quoteLeft} />
                  <BiSolidQuoteAltRight className={styles.quoteRight} />
                  <p>
                    We were invisible on Google before partnering with DIAMA
                    Technologies. Within just three months, our website ranked
                    on the first page for our primary keywords. Their SEO team
                    knows exactly what they’re doing."
                  </p>
                  <ul>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                  </ul>
                  <h4>Rajesh Mehra</h4>
                  <span>Founder</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.slideItem}>
                  <BiSolidQuoteAltLeft className={styles.quoteLeft} />
                  <BiSolidQuoteAltRight className={styles.quoteRight} />
                  <p>
                    We were invisible on Google before partnering with DIAMA
                    Technologies. Within just three months, our website ranked
                    on the first page for our primary keywords. Their SEO team
                    knows exactly what they’re doing."
                  </p>
                  <ul>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                    <li>
                      <HiStar />
                    </li>
                  </ul>
                  <h4>Rajesh Mehra</h4>
                  <span>Founder</span>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className={styles.navigationWrap}>
              <button
                onClick={() => {
                  swiperRef.current.slidePrev();
                  console.log("Prev button clicked");
                }}
                className={styles.customPrev}
              >
                <HiOutlineArrowSmLeft />
              </button>
              <button
                onClick={() => {
                  swiperRef.current.slideNext();
                  console.log("Next button clicked");
                }}
                className={styles.customNext}
              >
                <HiOutlineArrowSmRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
