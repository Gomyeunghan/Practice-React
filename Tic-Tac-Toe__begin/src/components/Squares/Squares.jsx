import Square from '../Square/Square';

export default function Squares({ squares, squareClick }) {
  return (
    <div className="Squares">
      {squares.map((squares, index) => {
        return (
          <Square key={index} squareClick={squareClick(index)}>
            {squares}
          </Square>
        );
      })}
    </div>
  );
}
