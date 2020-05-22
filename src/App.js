import React, { useState } from "react";
import "./App.css";

import WordInput from "./components/wordInput.component";
import WordList from "./components/wordList.component";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Solver } from "./solver.js";

function App() {
  const [letterInput, setLetters] = useState("");
  const [words, setWords] = useState([]);
  const handleSolveClick = React.useCallback(() => {
    const words = Solver(letterInput);
    setWords(words);
  }, [letterInput, setWords]);

  // React.useEffect(() => {
  //   handleSolveClick(); // on component mount, trigger a solve.
  // }, [letterInput, handleSolveClick]);

  function handleKeyPress(e) {
    setLetters(e.target.value);
    if (e.key === "Enter") {
      handleSolveClick();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSolveClick();
  }

  return (
    <div className="App">
      <div className="InnerContent">
        <div className="TitleContainer">
          <Typography variant="h4" className="Title">
            Word Finder
          </Typography>
        </div>

        <WordInput
          value={letterInput}
          onKeyPress={handleKeyPress}
          onSubmit={handleSubmit}
        />
        <WordList words={words} />

        <div className="App-button">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSolveClick}
            onSubmit={handleSolveClick}
          >
            Solve
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
