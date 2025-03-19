import { useState } from "react";

export default function Player({ playerName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(playerName);

  function handleClick() {
    if (isEditing && name.trim().length === 0) return;
    setIsEditing((editing) => !editing);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            name="playerName"
            value={name}
            onChange={handleChange}
          />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={handleClick}
        disabled={isEditing && name.trim().length === 0}
      >
        {isEditing ? "SAVE" : "EDIT"}
      </button>
    </li>
  );
}
