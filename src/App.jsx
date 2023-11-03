import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";

import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameTurns, setGameTurns] = useState([]);

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }
  const draw = gameTurns.length === 9 && !winner;
  const handleRematchClick = () => {
    setGameBoard(initialGameBoard);
    setGameTurns([]);
    setActivePlayer(1);
  };

  return (
    <>
      <Header></Header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              isActive={activePlayer === 1 ? true : false}
              name="Player 1"
              symbol="X"
            ></Player>
            <Player
              isActive={activePlayer === 2 ? true : false}
              name="Player 2"
              symbol="O"
            ></Player>
          </ol>
          {winner && (
            <GameOver handleRematchClick={handleRematchClick} winner={winner} />
          )}
          {draw && (
            <GameOver handleRematchClick={handleRematchClick} draw={draw} />
          )}
          <GameBoard
            setGameBoard={setGameBoard}
            gameBoard={gameBoard}
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
            setGameTurns={setGameTurns}
          />
        </div>

        <Log gameTurns={gameTurns}></Log>
      </main>
    </>
  );
}

export default App;
