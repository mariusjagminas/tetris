import React from "react";
import "./modal.css";

const Modal = ({gameOver,startGame}) => {
 
  return (
    <div className={`modal ${gameOver ? 'is-visible':''}`}>
      <p className="modal__text">Game Over</p>
      <button className="modal__button" onClick={startGame}>Restart Game</button>
    </div>
  );
};

export default Modal;
