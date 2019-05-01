import React from 'react'
import './cell.css'

const Cell =({cell}) =>{
  return(
    <div className={`cell ${cell === 1 ? 'active': cell === 2? 'freeze':''}`}></div>
  )
}

export default Cell