import React from 'react';
import './modal.css';

const Modal = ({ isGameOver }) => {
	return (
		<div className={`modal ${isGameOver ? 'is-visible' : ''}`}>
			<p className="modal__text">Game Over</p>
		</div>
	);
};

export default Modal;
