import React from "react";

function GameOverBanner({ gameStatus, numOfGuesses, answer }) {
  if (gameStatus === "won") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
      </div>
    );
  } else if (gameStatus === "lost") {
    return (
      <div className="sad banner">
        <p>
          <strong>Game Over!</strong> The word was <strong>{answer}</strong>.
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default GameOverBanner;
