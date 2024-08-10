function Board() {
  const initialSquares = Array(9).fill(null);
  return (
    <div className="Board">
      <h2 className="Status">플레이어 : 🟨</h2>
      <div className="Squares">
        <button type="button" className="Square"></button>
        <button type="button" className="Square"></button>
        <button type="button" className="Square"></button>
        <button type="button" className="Square"></button>
        <button type="button" className="Square"></button>
        <button type="button" className="Square"></button>
        <button type="button" className="Square"></button>
        <button type="button" className="Square"></button>
        <button type="button" className="Square"></button>
      </div>
    </div>
  );
}
