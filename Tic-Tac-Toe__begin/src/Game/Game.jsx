import Board from '../components/Board/Board';
import './Game.css';

export default function Game() {
  return (
    <div className="Game">
      <Board></Board>
      <div className="History">
        <ol>
          <li>
            <button type="button">게임 시작</button>
          </li>
        </ol>
      </div>
    </div>
  );
}
