import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Form from "../Form/Form";
import PreviousGuesses from "../PreviousGuesses/PreviousGuesses";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }
  return (
    <>
      <PreviousGuesses guesses={guesses} answer={answer} />
      <Form handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
