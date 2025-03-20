import { useEffect, useState } from "react";

export default function Player({ playerName, symbol, isActive, setPlayers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(playerName);

  function handleClick() {
    if (isEditing && name.trim().length === 0) return;
    setIsEditing((editing) => !editing);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  const newPlayer = { name, symbol };

  // useEffect to add or update the player in setPlayers
  useEffect(() => {
    setPlayers((prevPlayers) => {
      console.log("Previous Players List:", prevPlayers); // Logs the current players list

      // Check if the player already exists
      const playerExists = prevPlayers.some(
        (player) => player.symbol === symbol
      );

      if (playerExists) {
        console.log(`Updating player with symbol: ${symbol}`);
        const updatedPlayers = prevPlayers.map((player) =>
          player.symbol === symbol ? newPlayer : player
        );
        console.log("Updated Players List:", updatedPlayers); // Logs updated players list
        return updatedPlayers;
      } else {
        console.log(`Adding new player: ${JSON.stringify(newPlayer)}`);
        const newPlayers = [...prevPlayers, newPlayer];
        console.log("New Players List after addition:", newPlayers); // Logs new players list
        return newPlayers;
      }
    });
  }, [name]); // Runs whenever 'name' changes

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
