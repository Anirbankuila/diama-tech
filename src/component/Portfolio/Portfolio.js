import { useState } from "react";
import styles from "./Portfolio.module.css";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(0);

  const allImages = [
    {
      category: "Design",
      src: "/images/port1.png",
      alt: "Design 1",
      height: "530px",
      title: "NFT Landing UI",
      description: "Explore creative UI designs",
      buttonText: "View More",
    },
    {
      category: "Design",
      src: "/images/port2.png",
      alt: "Design 2",
      height: "530px",
      title: "App Dashboard",
      description: "Fintech application insights",
      buttonText: "View More",
    },
    {
      category: "Design",
      src: "/images/port3.png",
      alt: "Design 3",
      height: "262px",
      title: "AI Landing Page",
      description: "Innovative landing experience",
      buttonText: "View More",
    },
    {
      category: "App Development",
      src: "/images/port4.png",
      alt: "App 1",
      height: "394px",
      title: "Fitness App",
      description: "Track and improve goals",
      buttonText: "View More",
    },
    {
      category: "App Development",
      src: "/images/port5.png",
      alt: "App 2",
      height: "274px",
      title: "Chatbot Apps",
      description: "Engaging AI conversations",
      buttonText: "View More",
    },
    {
      category: "Portfolio",
      src: "/images/port6.png",
      alt: "Portfolio 1",
      height: "400px",
      title: "Product Design",
      description: "Explore detailed case studies",
      buttonText: "View More",
    },
    {
      category: "Website Design",
      src: "/images/port7.png",
      alt: "Website Design 1",
      height: "262px",
      title: "Dark Mode UI",
      description: "Elegant dark-themed designs",
      buttonText: "View More",
    },
    {
      category: "Digital marketing",
      src: "/images/port8.png",
      alt: "Marketing 1",
      height: "274px",
      title: "Marketing Strategy",
      description: "Boost your campaigns effectively",
      buttonText: "View More",
    },
  ];

  const tabs = [
    "All",
    "Design",
    "App Development",
    "Portfolio",
    "Website Design",
    "Digital marketing",
  ];

  const getImagesForTab = () => {
    if (tabs[activeTab] === "All") {
      return allImages;
    } else {
      return allImages.filter((img) => img.category === tabs[activeTab]);
    }
  };

  const images = getImagesForTab();

  const firstColumn = images.slice(0, 2);
  const secondColumn = images.slice(2, 5);
  const thirdColumn = images.slice(5, 8);

  return (
    <div className={styles.portfolioWrap}>
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

      <div className={styles.tabContent}>
        <div className={styles.customGrid}>
          {/* First Column */}
          <div className={styles.column}>
            {firstColumn.map((img, index) => (
              <div key={index} className={styles.eachItem}>
                <div key={index} className={styles.imageItem}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={img.height ? { height: img.height } : {}}
                  />
                </div>
                <div className={styles.itemContent}>
                  <div className={styles.itemLeftContent}>
                    <h3>{img.title}</h3>
                    <p>{img.description}</p>
                  </div>
                  <Link href={"#"}><IoIosArrowRoundForward /></Link>
                </div>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className={styles.column}>
            {secondColumn.map((img, index) => (
              <div key={index} className={styles.eachItem}>
                <div key={index} className={styles.imageItem}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={img.height ? { height: img.height } : {}}
                  />
                </div>
                <div className={styles.itemContent}>
                  <div className={styles.itemLeftContent}>
                    <h3>{img.title}</h3>
                    <p>{img.description}</p>
                  </div>
                   <Link href={"#"}><IoIosArrowRoundForward /></Link>
                </div>
              </div>
            ))}
          </div>

          {/* Third Column */}
          <div className={styles.column}>
            {thirdColumn.map((img, index) => (
              <div key={index} className={styles.eachItem}>
                <div key={index} className={styles.imageItem}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    style={img.height ? { height: img.height } : {}}
                  />
                </div>
                <div className={styles.itemContent}>
                  <div className={styles.itemLeftContent}>
                    <h3>{img.title}</h3>
                    <p>{img.description}</p>
                  </div>
                   <Link href={"#"}><IoIosArrowRoundForward /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
