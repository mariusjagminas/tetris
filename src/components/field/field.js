import React from "react";
import Row from "../row/row";
import "./field.css";
import Modal from "../modal/modal";

class Field extends React.Component {
  constructor() {
    super();
    this.state = {
      field: [[]],
      showModal: false,
    };
    this.speed = 200;
    this.field = this.createField(14, 8);
    this.figure = [[1, 1], [1, 1]];
  }

  createField = (height, width) => {
    let array = [];
    for (let y = 0; y < height; y++) {
      array[y] = [];
      for (let x = 0; x < width; x++) {
        array[y][x] = 0;
      }
    }
    return array;
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    this.loop();
  }

  loop = () => {
    if (!(this.field[0][0] === 0)){this.gameOver();return} 
    this.clearFullRow();
    this.initFigure();
    this.setState({ field: this.field });
    this.interval = setInterval(this.moveFigure, this.speed);
  };

  handleKeyDown = e => {
    switch (e.keyCode) {
      case 37:
        this.moveFigureLeft();
        break;
      case 39:
        this.moveFigureRight();
        break;
      case 40:
        this.moveFigureDown();
        break;
      case 38:
        this.rotateFigure();
        break;
      default:
        return;
    }
  };

  initFigure = () => {
    this.figure.forEach((row, rowIndex) =>
      row.forEach((cell, cellIndex) => (this.field[rowIndex][cellIndex] = cell))
    );
  };

  moveFigure = () => {
    // check if figure can be moved down
    let canMove = true;
    for (let y = this.field.length - 1; y >= 0; y--) {
      for (let x = 0; x <= this.field[y].length - 1; x++) {
        if (this.field[y][x] === 1) {
          if (y + 1 === this.field.length || this.field[y + 1][x] === 2) {
            canMove = false;
            this.freezeFigure();
          }
        }
      }
    }
    // move a figure down
    if (canMove) {
      for (let y = this.field.length - 1; y >= 0; y--) {
        for (let x = 0; x <= this.field[y].length - 1; x++) {
          if (this.field[y][x] === 1) {
            this.field[y][x] = 0;
            this.field[y + 1][x] = 1;
          }
        }
      }
      this.setState({ field: this.field });
    }
  };

  moveFigureLeft = () => {
    // check if figure can move to left
    let canMove = true;
    for (let x = 0; x <= this.field[1].length - 1; x++) {
      for (let y = 0; y <= this.field.length - 1; y++) {
        if (this.field[y][x] === 1) {
          if (x <= 0 || this.field[y][x - 1] === 2) {
            canMove = false;
          }
        }
      }
    }
    // move figure to left
    if (canMove) {
      for (let x = 0; x <= this.field[1].length - 1; x++) {
        for (let y = 0; y <= this.field.length - 1; y++) {
          if (this.field[y][x] === 1) {
            this.field[y][x] = 0;
            this.field[y][x - 1] = 1;
          }
        }
      }
      this.setState({ field: this.field });
    }
  };

  moveFigureRight = () => {
    let canMove = true;
    for (let x = this.field[1].length - 1; x >= 0; x--) {
      for (let y = 0; y <= this.field.length - 1; y++) {
        if (this.field[y][x] === 1) {
          if (x >= this.field[1].length - 1 || this.field[y][x + 1] === 2) {
            canMove = false;
          }
        }
      }
    }
    // move figure to right
    if (canMove) {
      for (let x = this.field[1].length - 1; x >= 0; x--) {
        for (let y = 0; y <= this.field.length - 1; y++) {
          if (this.field[y][x] === 1) {
            this.field[y][x] = 0;
            this.field[y][x + 1] = 1;
          }
        }
      }
      this.setState({ field: this.field });
    }
  };

  moveFigureDown = () => {
    clearInterval(this.interval);
    this.interval = setInterval(this.moveFigure, 10);
  };

  rotateFigure() {
    console.log("rotate");
  }

  freezeFigure = () => {
    clearInterval(this.interval);
    for (let y = this.field.length - 1; y >= 0; y--) {
      for (let x = 0; x <= this.field[y].length - 1; x++) {
        if (this.field[y][x] === 1) {
          this.field[y][x] = 2;
        }
      }
    }
    this.setState({ field: this.field });
    this.loop();
  };

  clearFullRow = () => {
    const rowIndex = this.getFullRowIndex();
    if (!rowIndex) return;
    for (let i = rowIndex; i > 0; i--) {
      for (let x = 0; x < this.field[0].length; x++) {
        this.field[i][x] = this.field[i - 1][x];
      }
    }
    this.clearFullRow();
  };

  getFullRowIndex = () => {
    let isRowFull;
    for (let y = this.field.length - 1; y >= 0; y--) {
      isRowFull = true;
      for (let x = 0; x <= this.field[y].length - 1; x++) {
        if (this.field[y][x] === 0) {
          isRowFull = false;
        }
      }
      if (isRowFull) {
        return y;
      }
    }
    return false;
  };

  gameOver =()=>{
    this.setState({showModal: true});
  }
  
  startGame =()=> {
    clearInterval(this.interval);
    this.setState({showModal: false});
    this.field = this.createField(14,8);
    this.loop();
  }

  render() {
    console.log('render');
    return (
      <React.Fragment>
      <div className="field">
        {this.state.field.map((row, index) => (
          <Row className="row" key={index} row={row} />
        ))}
      </div>
      <Modal showModal={this.state.showModal} startGame={this.startGame}/>
      </React.Fragment>
    );
  }
}

export default Field;
