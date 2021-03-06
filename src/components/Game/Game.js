import React from "react";
import Field from "../Field/Field";
import NextFigureField from "../NextFigureField/NextFigureField";
import "./Game.css";
import { figures } from "../../data/figures";
import ControlPanel from "../ControlPanel/ControlPanel";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import GameOver from "../GameOver/GameOver";

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      field: [[]],
      nextFigureField: [[]],
      isGameOver: false,
      isPaused: false,
      score: 0,
      hiScore: 0
    };

    this.speed = 800;
    this.field = this.createField(20, 10);
    this.nextFigureField = this.createField(5, 5);
    this.pathIndex = 0;
    this.isKeyUp = true;
    this.figureCoord = { x: 0, y: 0 };
    this.lastRandomNumber = null;
    this.currentFigure = null;
    this.figurePath = null;
    this.figures = figures;
    this.score = 0;
    this.savedHiScore = null;
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
    document.addEventListener("keyup", () => (this.isKeyUp = true));
    this.getHiScore();
    this.nextFigure = this.getRandomFigure();
    this.loop();
  }

  loop = () => {
    if (this.field[0].includes(2)) {
      this.gameOver();
      return;
    }
    this.pathIndex = 0;
    this.nextFigureField = this.nextFigureField.map(row =>
      row.map(cell => (cell = 0))
    );
    this.currentFigure = this.nextFigure;
    this.figurePath = this.currentFigure.path[0];
    this.drawFigure(
      this.field,
      this.figurePath,
      this.figureCoord.x,
      this.figureCoord.y
    );
    this.nextFigure = this.getRandomFigure();
    this.drawFigure(this.nextFigureField, this.nextFigure.path[0], 1, 1);
    this.setState({ field: this.field, nextFigureField: this.nextFigureField });
    this.interval = setInterval(this.moveFigure, this.speed);
  };

  handleKeyDown = e => {
    if (!this.isKeyUp) return;

    if (!this.state.isPaused && !this.state.isGameOver) {
      switch (e.keyCode) {
        case 37:
          this.isKeyUp = false;
          this.moveFigureLeft();
          break;
        case 39:
          this.isKeyUp = false;
          this.moveFigureRight();
          break;
        case 40:
          this.isKeyUp = false;
          this.moveFigureDown();
          break;
        case 38:
          this.isKeyUp = false;
          this.rotateFigure();
          break;
        default:
          break;
      }
    }

    switch (e.keyCode) {
      case 80:
        this.isKeyUp = false;
        this.pauseGame();
        break;
      case 83:
        this.isKeyUp = false;
        this.startGame();
        break;
      default:
        return
    }
  };

  handleClick = e => {
    if (this.state.isGameOver || this.state.isPaused) return;
    switch (e.target.dataset.arrow) {
      case "left":
        this.moveFigureLeft();
        break;
      case "right":
        this.moveFigureRight();
        break;
      case "down":
        this.moveFigureDown();
        break;
      case "up":
        this.rotateFigure();
        break;
      default:
        return;
    }
  };

  drawFigure = (field, figure, x, y) => {
    figure.forEach(path => {
      field[path[1] + y][path[0] + x] = 1;
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
    clearInterval(this.interval);
    this.interval = setInterval(this.moveFigure, 10);
  };

  rotateFigure() {
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
      this.drawFigure(
        this.field,
        this.figurePath,
        this.figureCoord.x,
        this.figureCoord.y
      );
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
    this.addScore();
    this.clearFullRow();
  };

  addScore = () => {
    this.score = this.score + 10;
    this.setState({ score: this.score });
  };

  getHiScore = () => {
    this.savedHiScore = parseInt(
      window.localStorage.getItem("hi-score-tetris")
    );
    this.setState({ hiScore: this.savedHiScore ? this.savedHiScore : 0 });
  };

  setHiScore = () => {
    if (this.score < this.savedHiScore) return;
    window.localStorage.setItem("hi-score-tetris", this.score);
    this.getHiScore();
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
    this.setState({ isGameOver: true });
    clearInterval(this.interval);
    this.setHiScore();
  };

  startGame = () => {
    if (!this.state.isGameOver) return;
    this.score = 0;
    this.setState({ isGameOver: false, score: 0 });
    this.field = this.field.map(row => row.map(cell => (cell = 0)));
    this.loop();
  };

  pauseGame = () => {
    if (this.state.isGameOver) return;
    if (this.state.isPaused) {
      this.interval = setInterval(this.moveFigure, this.speed);
      this.setState({ isPaused: false });
    } else {
      clearInterval(this.interval);
      this.setState({ isPaused: true });
    }
  };

  render() {
    return (
      <>
        <div className="game">
          <div className="game__frame--outer">
            <div className="game__frame--middle">
              <div className="game__frame--inner">
                <Field field={this.state.field} />
                <div className="game__side-panel">
                  <ScoreBoard title={"HI-SCORE"} score={this.state.hiScore} />
                  <ScoreBoard title={"SCORE"} score={this.state.score} />
                  <NextFigureField
                    nextFigureField={this.state.nextFigureField}
                  />
                  <GameOver isGameOver={this.state.isGameOver} />
                </div>
              </div>
            </div>
          </div>
          <ControlPanel
            handleClick={this.handleClick}
            pauseGame={this.pauseGame}
            startGame={this.startGame}
            isPaused={this.state.isPaused}
            isGameOver={this.state.isGameOver}
          />
        </div>
      </>
    );
  }
}

export default Game;
