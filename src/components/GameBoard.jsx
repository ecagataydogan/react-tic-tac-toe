export default function GameBoard({
  setGameBoard,
  gameBoard,
  activePlayer,
  setActivePlayer,
  setGameTurns,
}) {
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevGameBoard) => {
      const updatedGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedGameBoard[rowIndex][colIndex] = activePlayer === 1 ? "X" : "O";
      return updatedGameBoard;
    });
    setActivePlayer((prevActivePlayer) => (prevActivePlayer === 1 ? 2 : 1));
    setGameTurns((prevGameTurns) => {
      const updatedGameTurns = [...prevGameTurns];
      const turn = {
        rowIndex,
        colIndex,
        symbol: activePlayer === 1 ? "X" : "O",
      };
      updatedGameTurns.push(turn);
      return updatedGameTurns;
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol !== null}
                  onClick={() => handleSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>{" "}
        </li>
      ))}
    </ol>
  );
}
