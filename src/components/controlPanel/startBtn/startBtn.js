import React, { useState } from "react";
import "../btn.css";

const StartButton = ({ startGame, isGameOver }) => {
  const [activeClass, setClass] = useState();

  const toggleClass = () => {
    if (!isGameOver) return;
    setClass("start");
    setTimeout(() => setClass(""), 200);
  };

  return (
    <button
      className={`btn btn--start ${activeClass}`}
      onClick={() => {
        startGame();
        toggleClass();
      }}
    />
  );
};

export default StartButton;
