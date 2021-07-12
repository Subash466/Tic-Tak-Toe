import React from 'react'
import Square from './Square';


const Board = ({squares,onClick}) => {
  return (
    <div>
      <div className="board">
      {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
        </div>
    </div>
  )}


export default Board
