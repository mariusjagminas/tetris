import React from "react";
import "../btn.css";

const PauseButton = ({ pauseGame, isPaused }) => {
  return (
    <button
      className={`btn btn--pause ${isPaused ? "isPaused" : ""}`}
      onClick={pauseGame}
    />
  );
};

export default PauseButton;
