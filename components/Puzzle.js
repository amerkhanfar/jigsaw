import React, { useState, useEffect } from "react";
import styles from "./Puzzle.module.css";

const shuffleArray = (array) => {
  let shuffledArray = array.slice(); // Copy the array
  do {
    shuffledArray = array.sort(() => Math.random() - 0.5);
  } while (hasDuplicates(shuffledArray));
  return shuffledArray;
};

const hasDuplicates = (array) => {
  return new Set(array).size !== array.length;
};

const Puzzle = ({ imageSrc, onComplete }) => {
  const initialGrid = Array.from({ length: 16 }, (_, i) => i);
  const [grid, setGrid] = useState([]);
  const [steps, setSteps] = useState(0);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setGrid(shuffleArray([...initialGrid]));
  }, []);

  useEffect(() => {
    if (grid.length > 0 && isSolved(grid)) {
      onComplete();
    }
  }, [grid]);

  const handleClick = (index) => {
    if (selected === null) {
      setSelected(index);
    } else {
      const newGrid = [...grid];
      [newGrid[selected], newGrid[index]] = [newGrid[index], newGrid[selected]];
      setGrid(newGrid);
      setSteps(steps + 1);
      setSelected(null);
    }
  };

  const isSolved = (grid) => {
    return grid.every((value, index) => value === index);
  };

  return (
    <div className={styles.puzzle}>
      {grid.map((value, i) => (
        <div
          key={i}
          className={`${styles.square} ${
            selected === i ? styles.selected : ""
          }`}
          onClick={() => handleClick(i)}
          style={{
            transform: `translate(${(i % 4) * 200}px, ${
              Math.floor(i / 4) * 200
            }px)`,
            backgroundImage: `url(${imageSrc})`,
            backgroundPosition: `${(value % 4) * -200}px ${
              Math.floor(value / 4) * -200
            }px`,
            backgroundSize: `400% 400%`,
          }}
        />
      ))}
      <div className={styles.steps}>Steps: {steps}</div>
    </div>
  );
};

export default Puzzle;
