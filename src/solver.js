import { globalWordList } from "./globalWordList.js";

export function Solver(letters) {
  return generateWordCombos(letters);
}

function resetDictionaryArray(dict) {
  for (var k = 0; k < theAlphabet.length; k++) {
    var letter = theAlphabet[k];
    dict[letter] = 0;
  }
}

function buildWordLetterCounts(word, dict) {
  for (var k = 0; k < word.length; k++) {
    var letter = word[k];
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
  for (var i = 0; i < globalWordList.length; i++) {
    bValidWord = true;
    //reset current word counts
    resetDictionaryArray(currentLetterCounts);

    slen = globalWordList[i].length;
    for (var k = 0; k < slen; k++) {
      let c = globalWordList[i][k];
      currentLetterCounts[c]++;
    }

    for (var m = 0; m <= theAlphabet.length; m++) {
      var letter = theAlphabet[m];
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
        (isValidLimit && globalWordList[i].length === gLimitCount) ||
        !gUseLimit ||
        !isValidLimit
      ) {
        foundWords.push(globalWordList[i]);
      }
    }
  }
  return foundWords;
}
