import React from 'react'
import './Cell.css'

const Cell =({cell}) =>{
  return(
    <div className={`cell ${cell === 1 ? 'active': cell === 2? 'freeze':''}`}></div>
  )
}

export default Cell