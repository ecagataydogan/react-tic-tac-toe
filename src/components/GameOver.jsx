export default function GameOver({
  winner = false,
  draw = false,
  handleRematchClick,
}) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} WIN !</p>}
      {draw && <p>Draw !</p>}
      <button onClick={handleRematchClick}>Rematch</button>
    </div>
  );
}
