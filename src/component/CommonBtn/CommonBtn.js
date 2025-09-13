import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
import styles from "./CommonBtn.module.css";

const CommonButton = ({
  text,
  href = "/",
  className = "",
  btnType = "text",
}) => {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        if (href == "/") return;
        else router.push(href);
      }}
      className={`${styles.cmnBtn}
        ${className}
      `}
      type={btnType}
    >
      {text}
      <span className={styles.arrow}>
        <FiArrowRight />
      </span>
    </button>
  );
};

export default CommonButton;
