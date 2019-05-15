import React from 'react';
import './modal.css';

const Modal = ({ gameOver }) => {
	return (
		<div className={`modal ${gameOver ? 'is-visible' : ''}`}>
			<p className="modal__text">Game Over</p>
		</div>
	);
};

export default Modal;
