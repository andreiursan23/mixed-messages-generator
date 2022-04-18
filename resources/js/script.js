// === Dynamic Title ===
const titleWords = ["nonsensical", "jokes", "generator"];

const dynamicWord = (inputWordsArray, elemId, speed) => {
  const letters = inputWordsArray.join(" ").split("");
  let letterIndex = 0;
  setInterval(() => {
    if (letterIndex < letters.length) {
      document.getElementById(elemId).textContent += letters[letterIndex];
      letterIndex++;
    } else {
      clearInterval
    }
  }, speed);
}

dynamicWord(titleWords, "dynamicTitle", 100)

