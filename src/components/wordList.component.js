import React from "react";
import WordSection from './wordSection.component';
import "./wordList.component.css";

function WordList({words}) {
  let wordLists = [];
  if (words) {
  for (let filterLength = 2; filterLength < 20; filterLength++) {
    const result = words.filter(function (word) {
      return word.length === filterLength;
    });
    if (result.length) {
      const wordGroup = { charCount: filterLength, words: result };
      wordLists.push(wordGroup);
    }
  }
}

  return (
    <>
    {words?.length === 0 ? <div className="wordList">No words found.</div> : 
    <ul className="wordList">
      {wordLists.map(function (wordGroup, index) {
        return <WordSection key={index} wordGroup={wordGroup} />;
      })}
    </ul>
}
    </>
  );
}

export default WordList;
