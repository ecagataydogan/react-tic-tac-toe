import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer] = useState(1);

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
          <GameBoard
            activePlayer={activePlayer}
            setActivePlayer={setActivePlayer}
          />
        </div>
        Logs
      </main>
    </>
  );
}

export default App;
