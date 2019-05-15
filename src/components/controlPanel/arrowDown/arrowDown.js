import React from "react";
import "../arrow.css";

const ArrowDown = ({ handleClickButton }) => {
  return (
    <div
      onClick={handleClickButton}
      data-arrow="down"
      className="arrow arrow--down"
    >
      <div className="arrow__content">
     Down
     </div>
    </div>
  );
};

export default ArrowDown;
