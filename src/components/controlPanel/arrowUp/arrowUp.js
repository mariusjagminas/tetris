import React from "react";
import "./arrow.css";

const ArrowUp = ({ handleClickButton }) => {
  return (
    <div
      onClick={handleClickButton}
      data-arrow="up"
      className="arrow arrow--up"
    >
      Up
    </div>
  );
};

export default ArrowUp;
