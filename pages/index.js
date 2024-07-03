// pages/index.js
import { useState } from "react";
import Puzzle from "../components/Puzzle";
import styles from "./index.module.css";

export default function Home() {
  const [isComplete, setIsComplete] = useState(false);
  const [steps, setSteps] = useState(0);

  const handleComplete = () => {
    setIsComplete(true);
  };

  const handleReset = () => {
    setIsComplete(false);
    setSteps(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay} />
      {!isComplete ? (
        <Puzzle imageSrc='/puzzle.jpg' onComplete={handleComplete} />
      ) : (
        <div className={styles.messageBox}>
          <h1 className={styles.Happy}>Happy Birthday!</h1>

          <button className={styles.Button} onClick={handleReset}>
            Reset Game
          </button>
        </div>
      )}
    </div>
  );
}
