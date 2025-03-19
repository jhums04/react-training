import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/Player.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, columnIndex) {
    setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updated = [
        { square: { row: rowIndex, col: columnIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updated;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            playerName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            playerName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
    </main>
  );
}

export default App;
