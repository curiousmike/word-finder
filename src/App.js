import React, { useState, useRef } from "react";
import "./App.css";
import WordInput from "./components/wordInput.component";
import WordList from "./components/wordList.component";
import Button from "@material-ui/core/Button";
// import LetterInputDebugComponent  from "./components/letterInputDebug.component";
import { Solver } from "./solver.js";
import "../node_modules/animate.css/animate.css";

function App() {
  const [letterInput, setLetters] = useState("");
  const [words, setWords] = useState(null);
  const inputRef = useRef();  // need to have ref to text input so I can directly get at it.

  const handleSolveClick = React.useCallback(() => {
    const words = Solver(inputRef.current.value); // because iOS can "Autocomplete insert text", the textInput isn't assured
    setWords(words);
  });

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

  function resetInput () {
    setLetters('');
    setWords(null);
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
            onChange={handleKeyPress}
            onSubmit={handleSubmit}
            theRef={inputRef}
            clearInput={()=>resetInput()}
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
        {/* <LetterInputDebugComponent letters={letterInput}/> */}
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
