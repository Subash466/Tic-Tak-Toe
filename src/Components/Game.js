import React,{useState} from 'react'
import Board from './Board';
import {calculateWinner} from './Winner';

const Game = () => {
  const [history,setHistory]= useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext,setXIsNext]= useState(true);
  const historys=history;
  const current=historys[stepNumber];
  const winner = calculateWinner(current);

  function handleClick(i){
    const histories = history.slice(0,stepNumber+1);
    const current = histories[histories.length-1];
    const squares = [...current];
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = xIsNext ? 'X' : 'O';
      setStepNumber(histories.length)
      setHistory([...histories,squares]);
      setXIsNext(!xIsNext)
}
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
 
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };
 const moves= ()=> 
  history.map((step, move) => {
    const desc = move ? `Go to move #${move}` : "Go to Game Start";
    return (
      <li key={move}>
        <button onClick={() =>jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  return (
    <div>
    <h1>Tic-Tac-Toe</h1>
        <Board 
        squares={current}
        onClick={handleClick}
        />
      <div className="info-wrapper">
        <div >
          <h3>History</h3>
          {moves()}
        </div>
        <h3>{status}</h3>
      </div>
    </div>
  )
}

export default Game

