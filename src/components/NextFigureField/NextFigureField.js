import React from "react";
import Row from "../Row/Row";
import './NextFigureField.css';


const NextFigureField = ({  nextFigureField }) => {
  return (
    <div className="field next-figure">
      <div className="next-figure__title">NEXT</div>
      {nextFigureField.map((row, index) => (
        <Row className="row" key={index} row={row} />
      ))}
    </div>
  );
};

export default  NextFigureField;