import React from "react";
import "./controlPanel.css";
import ArrowUp from "./arrowUp/arrowUp";

class ControlPanel extends React.PureComponent {
  constructor(props) {
    super();
    this.handleClick = props.handleClick;
  }

  handleClickButton = e => {
    const controlPanel = document.querySelector(".control-panel");
    const activeClass = e.target.dataset.arrow;
    controlPanel.classList.add(activeClass);
    setTimeout(() => {
      controlPanel.classList.remove(activeClass);
    }, 1000);
    this.handleClick(e);
  };

  render() {
    console.log("render ControlPanel");
    return (
      <div className="control-panel">
        <ArrowUp handleClickButton={this.handleClickButton} />
      </div>
    );
  }
}

export default ControlPanel;
