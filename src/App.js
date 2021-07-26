import React, { useState } from "react";
import "./App.css";
import WordInput from "./components/wordInput.component";
import WordList from "./components/wordList.component";
import Button from "@material-ui/core/Button";
import { Solver } from "./solver.js";
import "../node_modules/animate.css/animate.css";

function App() {
  const [letterInput, setLetters] = useState("");
  const [words, setWords] = useState([]);

  const handleSolveClick = React.useCallback(() => {
    const words = Solver(letterInput);
    setWords(words);
  }, [letterInput, setWords]);

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
          <div className="Title animate__animated animate__rubberBand">
            Word Finder
          </div>
        </div>

        <div className="InputAndButtonContainer">
          <WordInput
            value={letterInput}
            onKeyPress={handleKeyPress}
            onSubmit={handleSubmit}
          />
          <Button
            variant="contained"
            // color="primary"
            size="large"
            onClick={handleSolveClick}
            onSubmit={handleSolveClick}
            style={{ padding: "8px 48px", background: '#FB8500', fontFamily: 'Roboto Condensed, sans-serif' }}
          >
            Solve
          </Button>
        </div>
      </div>
      <div className="WordListContainer">
        <WordList
          words={words}
        />
      </div>
    </div>
  );
}

export default App;
