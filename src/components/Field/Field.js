import React from "react";
import Row from "../Row/Row";
import "./Field.css";

const Field = ({ field }) => {
  return (
    <div className="field">
      {field.map((row, index) => (
        <Row className="row" key={index} row={row} />
      ))}
    </div>
  );
};

export default Field;
