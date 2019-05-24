import React from 'react'
import './ScoreBoard.css'

const ScoreBoard =({title,score}) =>{
  return (
    <div className="score-board">
      <div className="score-board__title">{title}</div>
      <div className="score-board__score">{score}</div>
    </div>
  )
}

export default ScoreBoard