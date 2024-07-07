import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import PreviousGuesses from "../PreviousGuesses";
import GameOverBanner from "../GameOverBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }
  return (
    <>
      {gameStatus}
      <PreviousGuesses guesses={guesses} answer={answer} />
      <Form handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === "won" || gameStatus === "lost" ? (
        <GameOverBanner
          gameStatus={gameStatus}
          numOfGuesses={guesses.length}
          answer={answer}
        />
      ) : null}
    </>
  );
}

export default Game;
