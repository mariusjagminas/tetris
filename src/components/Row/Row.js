import React from "react";
import Cell from "../Cell/Cell";
import "./Row.css";

const Row = ({ row }) => {
  return (
    <div className="row">
      {row.map((cell, index) => (
        <Cell key={index} cell={cell} />
      ))}
    </div>
  );
};

export default Row;
