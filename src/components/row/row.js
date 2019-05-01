import React from "react";
import Cell from "../cell/cell";
import "./row.css";

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
