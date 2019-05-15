import React from "react";
import "./controlPanel.css";
import ArrowUp from "./arrowUp/arrowUp";
import ArrowDown from "./arrowDown/arrowDown";

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
        <div className="control-panel__arrows">
          <ArrowUp handleClickButton={this.handleClickButton} />
          <ArrowDown handleClickButton={this.handleClickButton} />
        </div>
      </div>
    );
  }
}

export default ControlPanel;
