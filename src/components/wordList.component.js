import React from "react";
import WordSection from './wordSection.component';
import "./wordList.component.css";

function WordList(props) {
  let wordLists = [];
  wordLists = [];
  for (let filterLength = 2; filterLength < 20; filterLength++) {
    const result = props.words.filter(function (word) {
      return word.length === filterLength;
    });
    if (result.length) {
      const wordGroup = { charCount: filterLength, words: result };
      wordLists.push(wordGroup);
    }
  }

  return (
    <ul className="wordList">
      {wordLists.map(function (wordGroup, index) {
        return <WordSection key={index} wordGroup={wordGroup} />;
      })}
    </ul>
  );
}

export default WordList;
