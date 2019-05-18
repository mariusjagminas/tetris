import React from 'react';
import '../btn.css'

const PauseButton = ({ pauseGame }) => {
	return (
		<button className="btn btn--pause" onClick={pauseGame}>
		</button>
	);
};

export default PauseButton;
