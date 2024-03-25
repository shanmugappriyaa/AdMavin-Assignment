import React, { useState, useEffect } from "react";

const Assign4 = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft === 0) {
        setTimerRunning(false);
        clearInterval(timer);
      } else {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    const keywordTimer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 9);
      setCurrentIndex(randomIndex);
    }, 1000);

    return () => clearTimeout(keywordTimer);
  }, [currentIndex]);

  const handleClick = (clickedKeyword) => {
    console.log(clickedKeyword, currentIndex);
    if (clickedKeyword === currentIndex) {
      setScore(score + 5);
    } else {
      setScore(score - 2.5);
    }
    setCurrentIndex(-1);
  };

  return (
    <div>
      <div className="grid-parent">
        <h1>Box Game</h1>
      </div>
      <div className="grid-parent">
        <p>Time Left: {timeLeft} seconds</p>
        <div className="grid-div">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="grid-box"
              onClick={() => handleClick(index)}
            >
              {currentIndex === index && <span>HIT</span>}
            </div>
          ))}
        </div>
        <p>Score: {score}</p>
      </div>
      {!timerRunning && <h2>Game Over! Final Score: {score}</h2>}
    </div>
  );
};

export default Assign4;
