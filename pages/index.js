import React, { useState } from "react";
import Puzzle from "../components/Puzzle";
import Balloon from "../components/Balloon";
import styles from "./index.module.css";

export default function Home() {
  const [isComplete, setIsComplete] = useState(false);
  const [steps, setSteps] = useState(0);
  const [imageIndex, setImageIndex] = useState(0); // State to track current image index
  const imageArray = ["/family.jpg", "/puzzle.jpg", "/oplus.png"];

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handleReset = () => {
    setIsComplete(false);
    setSteps(0);
    setImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length); // Cycle through imageArray
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      {!isComplete ? (
        <div>
          <Puzzle
            imageSrc={imageArray[imageIndex]}
            onComplete={handleComplete}
          />
          {/* <div
            className={styles.fullimage}
            style={{ backgroundImage: `url(${imageArray[imageIndex]})` }}>
           
          </div> */}
          <img src={imageArray[imageIndex]} className={styles.fullimage} />
        </div>
      ) : (
        <div className={styles.messageBox}>
          <h1 className={styles.Happy}>Happy Birthday!</h1>
          <Balloon imageSrc='/balloon.png' />
          <button className={styles.Button} onClick={handleReset}>
            Next Level
          </button>
        </div>
      )}
    </div>
  );
}
