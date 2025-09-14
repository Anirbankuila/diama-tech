import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./StatCircle.module.css"; // replace with actual path

const StatCircle = ({ endValue, suffix = "", lines = [] }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const delay = 1000; // 500ms delay
      const timerId = setTimeout(() => {
        let start = 0;
        const duration = 2000;
        const stepTime = Math.abs(Math.floor(duration / endValue));
        const intervalId = setInterval(() => {
          start += 50;
          if (start >= endValue) {
            start = endValue;
            clearInterval(intervalId);
          }
          setCount(start);
        }, stepTime);
      }, delay);

      return () => clearTimeout(timerId); // cleanup if component unmounts
    }
  }, [inView, endValue]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num;
  };

  return (
    <div className={styles.statCircle} ref={ref} data-aos="zoom-in">
      <div className={styles.statNumber}>
        {formatNumber(count)}
        {suffix}
      </div>
      <div className={styles.statLabel}>
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};

export default StatCircle;
