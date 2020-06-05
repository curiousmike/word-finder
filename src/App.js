import React, { useState } from "react";
import "./App.css";

import WordInput from "./components/wordInput.component";
import WordList from "./components/wordList.component";
import Button from "@material-ui/core/Button";
import ContinuousSlider from './components/continuousSlider.component';
// import Div100vh from 'react-div-100vh'
// import Typography from "@material-ui/core/Typography";
import { Solver } from "./solver.js";

const footerText = "Michael Coustier's Word Finder 2020";
function App() {
  console.log('App!');
  const [letterInput, setLetters] = useState("");
  const [words, setWords] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [minWordLength, setMinWordLength] = useState(0);
  const [maxWordLength, setMaxWordLength] = useState(0);
  const handleSolveClick = React.useCallback(() => {
    const words = Solver(letterInput);
    setWords(words);
    
    var min = null;
    for (let i = 0; i < words.length; i++){
      if (words[i].length < min || !min ){
        min = words[i].length;
      }
    }
    if (!min){
      min = 2;
    }
    setMinWordLength(min);

    var max = null;
    for (let i = 0; i < words.length; i++){
      if (words[i].length > max || !max ){
        max = words[i].length;
      }
    }
    if (!max){
      max = 2;
    }
    setMaxWordLength(max);
    setSliderValue(2);

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

  function handleSliderChange(e, value) {
    setSliderValue(value);
  }

  return (
    <div>
      <div className="InnerContent">
        <div className="TitleContainer">
          <div className="Title">Word Finder</div>
        </div>
  
        <WordInput
          value={letterInput}
          onKeyPress={handleKeyPress}
          onSubmit={handleSubmit}
        />

        { minWordLength ? (<ContinuousSlider onSliderChange={handleSliderChange} min={minWordLength} max={maxWordLength} value={sliderValue}></ContinuousSlider> )
        : ''
        }

        <WordList words={words} filterLength={sliderValue > 0 ? sliderValue : null} />
      </div>
      <div className="App-button">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSolveClick}
          onSubmit={handleSolveClick}
          style={{padding: '8px 48px'}}
        >
          Solve
        </Button>
      </div>
      <div className="footer">
        <div className="footerText">{footerText}</div>
      </div>
    </div>
  );
}

export default App;
