import React from "react";
import "./GameOver.css";

const GameOver = ({ isGameOver }) => {
  return (
    <div className={`game-over ${isGameOver ? "visible" : ""}`}>
      <div className="game-over__text">GAME</div>
      <div className="game-over__text">OVER</div>
    </div>
  );
};

export default GameOver;
