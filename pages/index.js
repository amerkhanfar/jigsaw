import React, { useState, useEffect } from "react";
import Puzzle from "../components/Puzzle";
import Balloon from "../components/Balloon";
import styles from "./index.module.css";

export default function Home() {
  const [isComplete, setIsComplete] = useState(false);
  const [steps, setSteps] = useState(0);
  const [imageIndex, setImageIndex] = useState(0); // State to track current image index
  const [showStartScreen, setShowStartScreen] = useState(true); // State to control start screen
  const imageArray = ["/family.jpg", "/puzzle.jpg", "/oplus.png"];

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handleReset = () => {
    setIsComplete(false);
    setSteps(0);
    setImageIndex((prevIndex) => (prevIndex + 1) % imageArray.length); // Cycle through imageArray
    if (imageIndex === imageArray.length - 1) {
      // If completed last image, show start screen again
      setShowStartScreen(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      {showStartScreen && (
        <div className={styles.messageBox}>
          <h1 className={styles.Happy}>Welcome to the Puzzle Game!</h1>
          <div style={{ width: "60%", textAlign: "center", fontSize: "19px" }}>
            <p>
              Your challenge is to rearrange the scattered pieces of an image to
              recreate the complete picture, which you can preview in the bottom
              left corner. To move a puzzle piece, simply click on it to select,
              then click on the destination to place it. Complete the puzzle to
              move on to the next level. Enjoy the fun of piecing together
              memories!
            </p>
          </div>
          <Balloon imageSrc='/balloon.png' />
          <button
            className={styles.Button}
            onClick={() => setShowStartScreen(false)}>
            Start Game
          </button>
        </div>
      )}
      {!showStartScreen && !isComplete && (
        <div>
          <Puzzle
            imageSrc={imageArray[imageIndex]}
            onComplete={handleComplete}
          />
          <img
            src={imageArray[imageIndex]}
            className={styles.fullimage}
            alt={`Image ${imageIndex}`}
          />
        </div>
      )}
      {isComplete && (
        <div className={styles.messageBox}>
          <h1 className={styles.Happy}>Level Completed! Well done!</h1>
          <Balloon imageSrc='/balloon.png' />
          <button className={styles.Button} onClick={handleReset}>
            Next Level
          </button>
        </div>
      )}
    </div>
  );
}
