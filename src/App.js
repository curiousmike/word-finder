import React, { useState } from "react";
import "./App.css";

import Letter from "./components/letter.component";
// import WordInput from "./components/wordInput.component";
import WordList from "./components/wordList.component";
// import Button from "./components/button.component";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function App() {
  const [letterInput, setLetters] = useState("");

  function handleSolveClick() {
    console.log("final letters = ", letterInput);
  }
  function handleLetters(e) {
    setLetters(e.target.value);
  }
  return (
    <div className="App">
      <form noValidate autoComplete="off">
        <TextField
          id="filled-basic"
          label="Enter letters"
          onChange={handleLetters}
        />
      </form>
      <Letter />
      <WordList />
      <Button variant="contained" color="primary" onClick={handleSolveClick}>
        Solve
      </Button>
    </div>
  );
}

export default App;
