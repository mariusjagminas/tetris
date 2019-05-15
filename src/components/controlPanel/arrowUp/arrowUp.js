import React from "react";
import "../arrow.css";

const ArrowUp = ({ handleClickButton }) => {
  return (
    <div
      onClick={handleClickButton}
      data-arrow="up"
      className="arrow arrow--up"
    >
     <div className="arrow__content">
     Up
     </div>
    </div>
  );
};

export default ArrowUp;
