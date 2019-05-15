import React from "react";
import "./controlPanel.css";
import ArrowUp from "./arrowUp/arrowUp";

class ControlPanel extends React.PureComponent {
  constructor() {
    super();
  }

  // handleClick(e) {
  //   console.log(e.target.dataset.arrow);
  // }
  render() {
     console.log('render ControlPanel')
    return (
      <div className="control-panel">
        <ArrowUp handleClick={this.props.handleClick} />
      </div>
    );
  }
}

export default ControlPanel;
