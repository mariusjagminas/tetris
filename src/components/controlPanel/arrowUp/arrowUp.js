import React from "react";
import "./arrow.css";

const ArrowUp = ({handleClick}) => {
  return <div onClick={handleClick} data-arrow="up" className="arrow arrow--up">Up</div>;
};

export default ArrowUp;
