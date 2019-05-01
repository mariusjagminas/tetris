import React from "react";
import "./modal.css";

const Modal = ({showModal,startGame}) => {
 
  return (
    <div className={`modal ${showModal ? 'is-visible':''}`}>
      <p className="modal__text">Game Over</p>
      <button className="modal__button" onClick={startGame}>Restart Game</button>
    </div>
  );
};

export default Modal;
