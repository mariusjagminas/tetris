import React from 'react';
import '../btn.css'

const StartButton = ({startGame}) => {
  return <button className="btn btn--start" onClick={startGame} > Start</button>
  ;
};

export default StartButton