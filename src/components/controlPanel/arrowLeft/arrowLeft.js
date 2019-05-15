import React from "react";
import "../arrow.css";

const ArrowLeft = ({ handleClickButton }) => {
  return (
    <div
      onClick={handleClickButton}
      data-arrow="left"
      className="arrow arrow--left"
    >
      <div className="arrow__content">
   
     </div>
    </div>
  );
};

export default ArrowLeft;
