import React from "react";
import styles from "./CommonBtn.module.css";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";

const CommonButton = ({ text, href = "/", className = "" }) => {
const router = useRouter();
  return (
    <button
      onClick={() => router.push(href)}
      className={`${styles.cmnBtn}
        ${className}
      `}
    >
      {text}
      <span className={styles.arrow}><FiArrowRight /></span>
    </button>
  );
};

export default CommonButton;
