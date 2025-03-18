import { useState } from "react";

export default function Player({ playerName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(playerName);

  function handleClick() {
    setIsEditing(!isEditing);
  }

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <li>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            name="playerName"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "SAVE" : "EDIT"}</button>
    </li>
  );
}
