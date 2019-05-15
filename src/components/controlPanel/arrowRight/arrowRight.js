import React from 'react';
import '../arrow.css';

const ArrowRight = ({ handleClickButton }) => {
	return (
		<div onClick={handleClickButton} data-arrow="right" className="arrow arrow--right">
			<div className="arrow__content" />
		</div>
	);
};

export default ArrowRight;
