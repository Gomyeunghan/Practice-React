export default function Square({ children, squareClick }) {
  return (
    <button type="button" className="Square" onClick={squareClick}>
      {children}
    </button>
  );
}
