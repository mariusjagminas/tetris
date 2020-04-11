import React from "react";
import Game from "../Game/Game";
import ScreenOrientationReact from 'screen-orientation-react';
import "./App.css";

const options = {
  message: "This game can't be played in landscape orientation. Please rotate your device",
  bgColor: "var(--secondary-color)",
  color: "#ffff",
  iconColor: "#ffff",
  fontSize: 4
}

const App = () => {
  return (
    <div className="skin">
      <ScreenOrientationReact options={options} />
      <Game />
    </div>
  );
};

export default App;
