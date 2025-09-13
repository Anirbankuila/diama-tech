import Footer from "@/component/Footer/Footer";
import Header from "@/component/Header/Header";
import Heading from "@/component/Heading/Heading";
import Subtitle from "@/component/Subtitle/Subtitlle";
import styles from "@/styles/Articles.module.css";
import { blogContent } from "@/utils/constantData";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const interSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Service() {
  const [activeTab, setActiveTab] = useState(0);
  const swiperRef = useRef(null);
  const tabs = [
    "All",
    "Politics",
    "Skill Acquisition",
    "Education",
    "Sport",
    "Business",
  ];
  const blogData = [
    {
      img: "/images/article-1.png",
      title: "Driving Business Growth Through Digital Inn...",
      description:
        "We help organizations embrace cutting-edge digital strategies, enabling them to scale faster, ad...",
    },
    {
      img: "/images/article-2.png",
      title: "Building Smarter Solutions for Tomorrow’s Enter...",
      description:
        "Our approach focuses on efficiency, productivity, and impact—designing solutions that simplify com...",
    },
    {
      img: "/images/article-3.png",
      title: "Transforming Bold Ideas Into Lasting Business Im...",
      description:
        "We bring concepts to life with practical execution, turning vision into tangible growth that fuels prog...",
    },
    {
      img: "/images/article-4.png",
      title: "Empowering Organizations With Future-Ready Tech...",
      description:
        "From scalable platforms to secure infrastructures, we design technology ecosystems that evolve w...",
    },
    {
      img: "/images/article-5.png",
      title: "Creating Strong Partnerships That Drive Innov...",
      description:
        "We believe collaboration unlocks potential—working closely with businesses to co-create sol...",
    },
    {
      img: "/images/article-6.png",
      title: "Redefining Excellence in Every Business Out...",
      description:
        "Our commitment to quality and precision ensures every project not only meets but exceeds indu...",
    },
  ];
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <>
      <Head>
        <title>Diama Technology</title>
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
              <Subtitle text={"Stay inspired. Stay ahead."} />
              <h1>
                Crafting Experiences That <span> Make an Impact</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ======blog list====== */}
      <section className={styles.portfolio}>
        <div className="container">
          <div
            className={styles.serviceWrap}
            // style={{ backgroundImage: "url('/images/serviceBg.jpg')" }}
          >
            <div className={styles.blogTop}>
              <div className={styles.blogTopHeader}>
                <h3>News and Blog</h3>
                <p>
                  Your go-to source for company news, industry insights, and
                  creative ideas.
                </p>
              </div>
              <div className={styles.blogTab}>
                <ul className={styles.portfolioTab}>
                  {tabs.map((tab, index) => (
                    <li
                      key={index}
                      className={activeTab === index ? styles.active : ""}
                      onClick={() => setActiveTab(index)}
                    >
                      {tab}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.blogTabContent}>
              {tabs.map((tab, index) => {
                const currentContent = blogContent.find(
                  (item) => item.category === tab
                );

                return (
                  <div
                    key={index}
                    className={`${styles.tabPane} ${
                      activeTab === index ? styles.show : styles.hide
                    }`}
                  >
                    <div className="row align-items-start">
                      {/* Left Image Section */}
                      <div className="col-lg-7">
                        <div className={styles.blogImg}>
                          <img
                            src={
                              currentContent?.imageUrl ??
                              "/images/blog-default.png"
                            }
                            alt={tab}
                            className="img-fluid rounded"
                          />
                        </div>
                      </div>

                      {/* Right Blog List */}
                      <div className="col-lg-5">
                        <div className={styles.blogList}>
                          {currentContent?.articles.map((article, idx) => (
                            <div key={idx} className={styles.blogItem}>
                              <h5>{article.title}</h5>
                              <p>{article.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =======other blog======== */}
      <section
        className={styles.otherBlog}
        style={{ backgroundImage: "url('/images/subscribeBg.png')" }}
      >
        <div className="container">
          <div className={styles.blogHeading}>
            <Heading mainText={"More Blogs"} />
            <p>Discover more stories you may find interesting.</p>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className={styles.blogContent}>
                <div className={styles.EachBlogContent}>
                  <h5>Exploring Generative AI in Content Creation</h5>
                  <p>
                    Hello there! As a marketing manager in the SaaS industry,
                    you might be looking for innovative ways to engage your
                    audience. I bet generative AI has crossed your mind as an
                    option for creating content. Well, let me share from my
                    firsthand experience.
                  </p>
                  <p>
                    Google encourages high-quality blogs regardless of whether
                    they're written by humans or created using artificial
                    intelligence like ChatGPT. Here's what matters: producing
                    original material with expertise and trustworthiness based
                    on Google E-E-A-T principles.
                  </p>
                  <p>
                    This means focusing more on people-first writing rather than
                    primarily employing AI tools to manipulate search rankings.
                    There comes a time when many experienced professionals want
                    to communicate their insights but get stuck due to limited
                    writing skills – that’s where Generative AI can step in.
                  </p>
                  <p>
                    So, together, we’re going explore how this technology could
                    help us deliver valuable content without sounding robotic or
                    defaulting into mere regurgitations of existing materials
                    (spoiler alert – common pitfalls!). Hang tight - it’ll be a
                    fun learning journey!
                  </p>
                </div>
                <div className={styles.EachBlogContent}>
                  <h5>Steering Clear of Common AI Writing Pitfalls</h5>
                  <p>
                    Jumping headfirst into using AI, like ChatGPT, without a
                    content strategy can lead to some unfortunate results. One
                    common pitfall I've seen is people opting for quantity over
                    quality - they churn out blogs, but each one feels robotic
                    and soulless, reading just like countless others on the
                    internet.
                  </p>
                  <p>
                    Another fault line lies in creating reproductions rather
                    than delivering unique perspectives that offer value to
                    readers; it often happens if you let an AI tool write your
                    full blog unrestrained! Trust me on this – Ask any
                    experienced marketer or writer about their takeaways from
                    using generative AI tools. They'll all agree that adding a
                    human touch and following specific guidelines are key when
                    implementing these tech pieces.
                  </p>
                  <p>
                    Remember, our goal here isn’t merely satisfying search
                    engines but, more importantly, knowledge-hungry humans
                    seeking reliable information online. So keep your audience's
                    needs at heart while leveraging technology’s assistance!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.blogRightImg}>
                <img
                  src={`/images/blogImg.png`}
                  alt={"tab"}
                  className="img-fluid rounded"
                />
              </div>
              <div className={styles.blogShare}>
                <p>Share with your community!</p>
                <ul>
                  <li>
                    <Link href={"#"}>
                      <FaSquareFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <FaSquareXTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      {" "}
                      <TbBrandLinkedinFilled />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======Articles======= */}
      <div className={`${styles.serviceWrap} ${styles.articleSec}`}>
        <div className="container">
          <div className={styles.articleTop}>
            <h3>
              Articles you may find helpful <br /> and inspiring.
            </h3>
            <div className={styles.customNav}>
              <button
                onClick={handlePrev}
                className={`${styles.navBtn} ${styles.prevBtn}`}
              >
                <GoArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className={`${styles.navBtn} ${styles.nextBtn}`}
              >
                <GoArrowRight />
              </button>
            </div>
          </div>
          <div className={styles.blogSliderSection}>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
            >
              <SwiperSlide>
                <div className={styles.blogGrid}>
                  {blogData.map((blog, index) => (
                    <div className={styles.blogBlock} key={index}>
                      <img src={blog.img} alt={blog.title} />
                      <h4>{blog.title}</h4>
                      <p>{blog.description}</p>
                      <Link href={"#"} className={styles.learnMore}>
                        Learn more <GoArrowRight />
                      </Link>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.blogGrid}>
                  {blogData.map((blog, index) => (
                    <div className={styles.blogBlock} key={index}>
                      <img src={blog.img} alt={blog.title} />
                      <h4>{blog.title}</h4>
                      <p>{blog.description}</p>
                      <Link href={"#"} className={styles.learnMore}>
                        Learn more <GoArrowRight />
                      </Link>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.blogGrid}>
                  {blogData.map((blog, index) => (
                    <div className={styles.blogBlock} key={index}>
                      <img src={blog.img} alt={blog.title} />
                      <h4>{blog.title}</h4>
                      <p>{blog.description}</p>
                      <Link href={"#"} className={styles.learnMore}>
                        Learn more <GoArrowRight />
                      </Link>
                    </div>
                  ))}
                </div>
              </SwiperSlide>

              {/* Add more SwiperSlides if needed for additional sets */}
            </Swiper>
          </div>
        </div>
      </div>

      {/* ======subscribe======= */}
      <div
        className={`${styles.subscribe}`}
        style={{ backgroundImage: "url('/images/subscribeBg.png')" }}
      >
        <div className="container">
          <div className={styles.subscribeWrap}>
            <div className={styles.subscribeWrapImg}>
              <img src={"/images/nask-group.png"} alt="subscribe img" />
            </div>
            <div className={styles.subscribeWrapContent}>
              <Heading mainText={"Subscribe to our newsletter"} />
              <p>
                From the very first sketch to the final launch, our team at
                Diama Technologies transforms bold ideas into powerful digital
                experiences that connect, inspire, and deliver real results.
              </p>
              <Form className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className={styles.emailInput}
                />
                <button type="submit" className={styles.subscribeBtn}>
                  Subscribe
                </button>
              </Form>
              <p>
                Your information will never be shard with third parties, and you
                can unsubscribe from our updates at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ========Companies======= */}
      <section className={styles.companies}>
        <div className="container">
          <Subtitle text={"Trusted by over 50,000 companies of all sizes"} />
          <div className={styles.companyWrap}>
            <ul>
              <li>
                <img src={"/images/segement.png"} alt="segemnt" />
              </li>
              <li>
                <img src={"/images/asana.png"} alt="asana" />
              </li>
              <li>
                <img src={"/images/intercom.png"} alt="intercom" />
              </li>
              <li>
                <img src={"/images/zenefits.png"} alt="zenefits" />
              </li>
              <li>
                <img src={"/images/greenhouse.png"} alt="greenhouse" />
              </li>
              <li>
                <img src={"/images/chargebee.png"} alt="chargebee" />
              </li>
              <li>
                <img src={"/images/lattice.png"} alt="lattice" />
              </li>
              <li>
                <img src={"/images/frame.png"} alt="frame" />
              </li>
              <li>
                <img src={"/images/mutiny.png"} alt="mutiny" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ------footer-------- */}
      <Footer />
    </>
  );
}
