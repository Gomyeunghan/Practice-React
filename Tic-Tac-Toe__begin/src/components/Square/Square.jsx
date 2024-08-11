export default function Square({ squareClick, children }) {
  return (
    <button
      type="button"
      className="Square"
      onClick={squareClick}
      disabled={children}
    >
      {children}
    </button>
  );
}
