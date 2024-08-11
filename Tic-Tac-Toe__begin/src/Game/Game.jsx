import Board from '../components/Board/Board';
import History from '../components/History/History';
import './Game.css';

export default function Game() {
  return (
    <div className="Game">
      <Board></Board>
      <History></History>
    </div>
  );
}
