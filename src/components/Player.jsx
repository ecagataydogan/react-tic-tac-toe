import { useState } from "react";

export default function Player({ isActive, name, symbol }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditable, setIsEditable] = useState(true);

  const handleChange = (event) => {
    console.log(event.target.value);
    setPlayerName(() => event?.target.value);
  };
  const handleEditClick = () => {
    setIsEditable((prev) => !prev);
  };
  return (
    <li className={isActive ? "active" : ""}>
      <span className={"player"}>
        {isEditable ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            value={playerName}
            onChange={(event) => handleChange(event)}
          ></input>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={() => handleEditClick()}>
          {isEditable ? "Edit" : "Save"}
        </button>
      </span>
    </li>
  );
}
