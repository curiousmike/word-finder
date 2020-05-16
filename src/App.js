import React, { useState } from "react";
import "./App.css";

// import Letter from "./components/letter.component";
import WordInput from "./components/wordInput.component";
import WordList from "./components/wordList.component";
// import Button from "./components/button.component";
import Button from "@material-ui/core/Button";
import { Solver } from "./solver.js";

function App() {
  const [letterInput, setLetters] = useState("encyclopediaA");
  const [words, setWords] = useState([]);

  function handleSolveClick() {
    const words = Solver(letterInput);
    setWords(words);
  }
  function handleLetters(e) {
    setLetters(e.target.value);
  }
  return (
    <div className="App">
      <form noValidate autoComplete="off">
        <WordInput defaultValue={letterInput} onChange={handleLetters} />
      </form>
      {/* <Letter /> */}
      <WordList words={words} />
      <Button variant="contained" color="primary" onClick={handleSolveClick}>
        Solve
      </Button>
    </div>
  );
}

export default App;
