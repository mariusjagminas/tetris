import React from "react";
import Row from "../row/row";


const NextFigureField = ({  nextFigureField }) => {
  return (
    <div className="field">
      {nextFigureField.map((row, index) => (
        <Row className="row" key={index} row={row} />
      ))}
    </div>
  );
};

export default  NextFigureField;