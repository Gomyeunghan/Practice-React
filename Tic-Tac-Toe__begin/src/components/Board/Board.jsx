import Square from '../Square/Square';
import { useState } from 'react';

const initialSquares = Array(9).fill(null);
export default function Board() {
  const [square, setSquares] = useState(initialSquares);
  const [isCircleNext, setIsCircleNext] = useState(true);
  const nextPlayer = isCircleNext ? '⚫️' : '🟨';
  const squares = [...initialSquares];

  const squareClick = (index) => () => {
    const nextSquares = [...squares];
    nextSquares[index] = nextPlayer;
    setSquares(nextSquares);
    setIsCircleNext(!isCircleNext);
    console.log(square);
  };
  return (
    <div className="Board">
      <h2 className="Status">플레이어 : {nextPlayer}</h2>
      <div className="Squares">
        {squares.map((square, index) => {
          return (
            <Square key={index} squareClick={squareClick(index)}>
              {index}
            </Square>
          );
        })}
      </div>
    </div>
  );
}
