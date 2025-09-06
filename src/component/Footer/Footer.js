import { HiLocationMarker } from "react-icons/hi";
import styles from "./Footer.module.css";
import { BsEnvelopeFill } from "react-icons/bs";
import Link from "next/link";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrYoutube } from "react-icons/gr";
import { GoArrowRight } from "react-icons/go";

const Footer = () => {
  return (
    <footer className={styles.footer} style={{ backgroundImage: 'url(/images/footerBg.png)' }}>

      <div className={styles.footerTop}>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            <div className={styles.eachSlideTem}>
              <span>Launching new features soon!</span>
              <div className={styles.arrwIcon}>
                <GoArrowRight />
              </div>
            </div>
            <div className={styles.eachSlideTem}>
              <span>Check out our portfolio.</span>
              <div className={styles.arrwIcon}>
                <GoArrowRight />
              </div>
            </div>
            <div className={styles.eachSlideTem}>
              <span>Contact us for custom solutions.</span>
              <div className={styles.arrwIcon}>
                <GoArrowRight />
              </div>
            </div>
            <div className={styles.eachSlideTem}>
              <span>Follow us on social media!</span>
              <div className={styles.arrwIcon}>
                <GoArrowRight />
              </div>
            </div>
            <div className={styles.eachSlideTem}>
              <span>Launching new features soon!</span>
              <div className={styles.arrwIcon}>
                <GoArrowRight />
              </div>
            </div>
            <div className={styles.eachSlideTem}>
              <span>Check out our portfolio.</span>
              <div className={styles.arrwIcon}>
                <GoArrowRight />
              </div>
            </div>
            <div className={styles.eachSlideTem}>
              <span>Contact us for custom solutions.</span>
              <div className={styles.arrwIcon}>
                <GoArrowRight />
              </div>
            </div>
            <div className={styles.eachSlideTem}>
              <span>Follow us on social media!</span>
              <div className={styles.arrwIcon}>
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* About Section */}
        <div className="row">
          <div className="col-lg-8">
            <div className={styles.about}>
              <img
                className={styles.footerLogo}
                src={"/images/logo.png"}
                alt="logo"
              />
              <ul>
                <li>
                  <div className={styles.icon}>
                    <HiLocationMarker />
                  </div>
                  <p>
                    46, Rabindra Nagar Market, <br /> Durgapur-713206
                  </p>
                </li>
                <li>
                  <div className={styles.icon}>
                    <BsEnvelopeFill />
                  </div>
                  <Link href={"mailto:contact@diamatechnologies.com"}>
                    contact@diamatechnologies.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Links Section */}
          <div className="col-lg-2">
            <div className={styles.links}>
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Studio</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-lg-2">
            <div className={styles.links}>
              <h4>Terms & Policies</h4>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
                <li>
                  <a href="#">Accesibility</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerImg}>
        <img src={"/images/footerImg.png"} alt="footerImg" />
      </div>
      <div className="container">
        <div className={styles.copyrightWrap}>
          <div className={styles.copy}>
            Copyright &copy; {new Date().getFullYear()} Diama Technologies. All
            rights reserved.
          </div>
          <div className={styles.social}>
            <ul>
              <li>
                <Link href={"#"}>
                  <TbBrandLinkedinFilled />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <PiInstagramLogoFill />
                  Instagram
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <GrYoutube />
                  Youtube
                </Link>
              </li>
              <li>
                <Link href={"#"}>
                  <FaSquareXTwitter />
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
