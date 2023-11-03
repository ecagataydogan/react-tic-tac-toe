export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn, i) => (
        <li key={i}>
          {turn?.symbol} selected {turn?.rowIndex},{turn?.colIndex}
        </li>
      ))}
    </ol>
  );
}
