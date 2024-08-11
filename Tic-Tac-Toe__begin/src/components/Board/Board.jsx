import { useState } from 'react';
import Status from '../Status/Status';
import Squares from '../Squares/Squares';

const initialSquares = Array(9).fill(null);
const winnerCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const checkWinner = (squares) => {
  for (const [x, y, z] of winnerCondition) {
    const xValue = squares[x];
    const yValue = squares[y];
    if (xValue && xValue === yValue && yValue === squares[z]) {
      return {
        player: xValue,
        pattern: [x, y, z],
      };
    }
  }
  return null;
};

export default function Board() {
  const [squares, setSquares] = useState(initialSquares);
  const [isCircleNext, setIsCircleNext] = useState(true);
  const nextPlayer = isCircleNext ? '⚫️' : '🟨';
  const winner = checkWinner(squares);

  const squareClick = (index) => () => {
    if (winner) return alert('GAME OVER');
    const nextSquares = [...squares];
    nextSquares[index] = nextPlayer;
    setSquares(nextSquares);
    setIsCircleNext(!isCircleNext);
  };
  return (
    <div className="Board">
      <Status nextPlayer={nextPlayer}></Status>
      <Squares squares={squares} squareClick={squareClick}></Squares>
    </div>
  );
}
