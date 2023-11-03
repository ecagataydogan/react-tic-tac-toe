import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name="Player 1" symbol="X"></Player>
            <Player name="Player 2" symbol="O"></Player>
          </ol>
          GameBoard
        </div>
        Logs
      </main>
    </>
  );
}

export default App;
