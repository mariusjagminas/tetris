import React from 'react';
import '../btn.css'

const PauseButton = ({ pauseGame }) => {
	return (
		<button className="btn btn--pause" onClick={pauseGame}>
			Pause
		</button>
	);
};

export default PauseButton;
