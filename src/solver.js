import { globalWordList } from "./globalWordList.js";

export function Solver(letters) {
  let fixedLetters = letters.toLowerCase().replace(/[^a-z]/g, ''); // only allow a-z
  return generateWordCombos(fixedLetters);
}

function resetDictionaryArray(dict) {
  for ( let letter of theAlphabet) {
    dict[letter] = 0;
  }
}

function buildWordLetterCounts(word, dict) {
  for ( let letter of word) {
    dict[letter]++;
  }
}

const theAlphabet = "abcdefghijklmnopqrstuvwxyz";
const gUseLimit = false;
const gLimitCount = 0;
function generateWordCombos(letters) {
  //set letter counts to 0
  let foundWords = [];
  var theWordLetterCounts = [];
  resetDictionaryArray(theWordLetterCounts); // assume there are 0 of each letter
  buildWordLetterCounts(letters, theWordLetterCounts); // how many of each letter are there

  var slen;
  var bValidWord = true;
  var currentLetterCounts = [];
  for (let word of globalWordList) {
    bValidWord = true;
    //reset current word counts
    resetDictionaryArray(currentLetterCounts);

    for (let character of word) {
      currentLetterCounts[character]++;
    }

    for (let letter of theAlphabet) {
      if (currentLetterCounts[letter] > 0) {
        if (theWordLetterCounts[letter] >= currentLetterCounts[letter]) {
          bValidWord = true;
        } else {
          bValidWord = false;
          break;
        }
      }
    }
    if (bValidWord) {
      const isValidLimit = gUseLimit && gLimitCount;

      if (
        (isValidLimit && word.length === gLimitCount) ||
        !gUseLimit ||
        !isValidLimit
      ) {
        foundWords.push(word);
      }
    }
  }
  return foundWords;
}
