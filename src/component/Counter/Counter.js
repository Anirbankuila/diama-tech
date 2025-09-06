import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import styles from './Counter.module.css';

const counters = [
  { end: 100, suffix: '+', text: 'Partnerships Built on Trust' },
  { end: 50, suffix: '', text: 'Transformations We Made Possible' },
  { end: 20, suffix: '', text: 'Projects Under Development' },
];

const Counter = () => {
  const [hasViewed, setHasViewed] = useState(false);

  // useInView hook to detect when the counter is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.3,    // Trigger when 30% of the component is visible
  });

  // Once inView is true, set hasViewed to true to start animation
  if (inView && !hasViewed) {
    setHasViewed(true);
  }

  return (
    <div className={styles.counter} ref={ref}>
      {counters.map((item, index) => (
        <div key={index} className={styles.counterItem}>
          <h2>
            {hasViewed ? (
              <CountUp start={0} end={item.end} duration={2} /> 
            ) : (
              0
            )}
            {item.suffix}
          </h2>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Counter;
