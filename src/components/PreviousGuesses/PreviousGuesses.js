import React from "react";

function PreviousGuesses({ guesses }) {
  return (
    <div className="guess-results">
      <div className="guess-result">
        {guesses.map((guess, index) => (
          <div className="result" key={index}>
            {guess}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreviousGuesses;
