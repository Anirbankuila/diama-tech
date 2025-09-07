import Subtitle from "../Subtitle/Subtitlle";
import styles from "./Company.module.css";

export const Company = () => {
  return (
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
  );
};
