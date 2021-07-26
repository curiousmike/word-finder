import React, { useEffect, useState } from "react";
import "./wordSection.component.css";

function WordSection(props) {
  const [wordList, setFormattedWords] = useState(null);
  useEffect(() => {
    function getCommaSeparatedWordList(words) {
      let list = '';
      for (let i = 0; i < words.length; i++) {
        list += words[i];
        list += (i === words.length - 1) ? '' : ', ';
      }
      return list;
    }
    const formattedWords = getCommaSeparatedWordList(props.wordGroup.words);
    setFormattedWords(formattedWords);
  }, [wordList, setFormattedWords, props.wordGroup.words]);

  return (
    <ul className="wordSectionContainer" >
      <div className="charCountContainer">{props.wordGroup.charCount}</div>
      <textarea readOnly className="wordSection" value={wordList} />
    </ul>
  );
}

export default WordSection;
