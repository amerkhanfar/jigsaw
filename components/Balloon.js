// components/Balloon.js

import React, { useEffect, useState } from "react";
import styles from "./Balloon.module.css";

const Balloon = ({ imageSrc }) => {
  const [top, setTop] = useState("100%"); // Initial position at the bottom

  useEffect(() => {
    const interval = setInterval(() => {
      // Move balloon upwards and reset when it reaches the top
      setTop((prevTop) => (prevTop === "-20%" ? "100%" : "-20%"));
    }, 4000); // Adjust speed of animation as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.balloon} style={{ top }}>
        <img src={imageSrc} alt='Balloon' className={styles.image} />
      </div>
      <div className={styles.balloon2} style={{ top }}>
        <img src={imageSrc} alt='Balloon' className={styles.image} />
      </div>
    </div>
  );
};

export default Balloon;
