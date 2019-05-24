import React from "react";
import Row from "../Row/Row";


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