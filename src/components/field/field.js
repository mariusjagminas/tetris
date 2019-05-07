import React from "react";
import Row from "../row/row";
import "./field.css";
import Modal from "../modal/modal";

class Field extends React.Component {
  constructor() {
    super();
    this.state = {
      field: [[]],
      gameOver: false
    };

    this.speed = 800;
    this.field = this.createField(14, 8);
    this.pathIndex = 0;
    this.isKeyDown = true;
    this.figureCoord = { x: 0, y: 0 };
    this.lastRandomNumber = null;
    this.currentFigure = null;
    this.figurePath = null;
    this.figures = [
      {
        // figure: shape-left
        path: [
          [[0, 0], [0, 1], [1, 1], [1, 2]],
          [[1, 0], [2, 0], [0, 1], [1, 1]]
        ]
      },
      {
        // figure: shape-right
        path: [
          [[1, 0], [0, 1], [1, 1], [0, 2]],
          [[0, 0], [1, 0], [1, 1], [2, 1]]
        ]
      },
      {
        // figure: L-reverse
        path: [
          [[0, 0], [1, 0], [2, 0], [2, 1]],
          [[1, 0], [1, 1], [1, 2], [0, 2]],
          [[0, 0], [0, 1], [1, 1], [2, 1]],
          [[0, 0], [1, 0], [0, 1], [0, 2]]
        ]
      },
      {
        // figure: L-normal
        path: [
          [[0, 0], [1, 0], [2, 0], [0, 1]],
          [[0, 0], [1, 0], [1, 1], [1, 2]],
          [[2, 0], [0, 1], [1, 1], [2, 1]],
          [[0, 0], [0, 1], [0, 2], [1, 2]]
        ]
      },
      {
        // figure: line
        path: [
          [[0, 0], [1, 0], [2, 0], [3, 0]],
          [[1, 0], [1, 1], [1, 2], [1, 3]]
        ]
      },
      {
        // figure: T
        path: [
          [[0, 0], [1, 0], [2, 0], [1, 1]],
          [[1, 0], [1, 1], [1, 2], [0, 1]],
          [[1, 0], [0, 1], [1, 1], [2, 1]],
          [[0, 0], [0, 1], [0, 2], [1, 1]]
        ]
      }
    ];
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

  getRandomFigure = () => {
    const randomNumber = Math.floor(Math.random() * this.figures.length);
    if (this.lastRandomNumber === randomNumber) this.getRandomFigure();
    this.lastRandomNumber = randomNumber;
    return this.figures[randomNumber];
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", () => (this.isKeyDown = true));
    this.loop();
  }

  loop = () => {
    if (this.field[0].includes(2)) {
      this.gameOver();
      return;
    }
    this.pathIndex = 0;
    this.currentFigure = this.getRandomFigure();
    this.figurePath = this.currentFigure.path[0];
    this.drawFigure();
    this.setState({ field: this.field });
    this.interval = setInterval(this.moveFigure, this.speed);
  };

  handleKeyDown = e => {
    if (!this.isKeyDown || this.state.gameOver) return;
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

  drawFigure = () => {
    this.figurePath.forEach(path => {
      this.field[path[1] + this.figureCoord.y][
        path[0] + this.figureCoord.x
      ] = 1;
    });
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
      this.figureCoord.y++;
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
    this.isKeyDown = false;
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
      this.figureCoord.x--;
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
    this.isKeyDown = false;
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
      this.figureCoord.x++;
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
    this.isKeyDown = false;
    clearInterval(this.interval);
    this.interval = setInterval(this.moveFigure, 10);
  };

  rotateFigure() {
    this.isKeyDown = false;
    // check if figure has space to rotate
    let canRotate = true;
    this.nextFigurePath = this.currentFigure.path[this.pathIndex + 1];
    this.nextFigurePath.forEach(path => {
      const x = path[0] + this.figureCoord.x;
      const y = path[1] + this.figureCoord.y;
      if (
        x >= this.field[0].length ||
        y >= this.field.length ||
        this.field[y][x] === 2
      ) {
        canRotate = false;
      }
    });

    if (canRotate) {
      this.pathIndex =
        this.pathIndex >= this.currentFigure.path.length - 2
          ? -1
          : this.pathIndex + 1;
      this.figurePath = this.nextFigurePath;
      // flush cells
      this.field.forEach((row, rowIndex) =>
        row.forEach((cell, cellIndex) => {
          if (cell === 1) {
            this.field[rowIndex][cellIndex] = 0;
          }
        })
      );
      this.drawFigure();
      this.setState({ field: this.field });
    }
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
    this.figureCoord.x = 0;
    this.figureCoord.y = 0;
    this.setState({ field: this.field });
    this.clearFullRow();
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

  gameOver = () => {
    this.setState({ gameOver: true });
    clearInterval(this.interval);
  };

  startGame = () => {
    this.setState({ gameOver: false });
    this.field = this.field.map(row => row.map(cell => (cell = 0)));
    this.loop();
  };

  render() {
    return (
      <React.Fragment>
        <div className="field">
          {this.state.field.map((row, index) => (
            <Row className="row" key={index} row={row} />
          ))}
        </div>
        <Modal gameOver={this.state.gameOver} startGame={this.startGame} />
      </React.Fragment>
    );
  }
}

export default Field;
