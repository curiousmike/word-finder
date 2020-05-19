import React, { useState } from "react";
import "./App.css";

import WordInput from "./components/wordInput.component";
import WordList from "./components/wordList.component";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Solver } from "./solver.js";

function App() {
  const [letterInput, setLetters] = useState("coustier");
  const [words, setWords] = useState([]);

  const handleSolveClick = React.useCallback(() => {
    const words = Solver(letterInput);
    setWords(words);
  }, [letterInput, setWords]);

  React.useEffect(() => {
    handleSolveClick(); // on component mount, trigger a solve.
  }, [letterInput, handleSolveClick]);

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setLetters(e.target.value);
      handleSolveClick();
    }
  }

  return (
    <div className="App">
      <Typography variant="h3">Word Finder</Typography>
      <WordInput value={letterInput} onKeyPress={handleKeyPress} />
      <WordList words={words} />
      <div className="App-button">
        <Button variant="contained" color="primary" onClick={handleSolveClick}>
          Solve
        </Button>
      </div>
    </div>
  );
}

export default App;
