// === First screen animations ===
const titleWords = ["nonsensical", "jokes", "generator"];

const dynamicWord = (inputWordsArray, elemId, speed) => {
  const letters = inputWordsArray.join(" ").split("");
  let letterIndex = 0;
  setInterval(() => {
    if (letterIndex < letters.length) {
      document.getElementById(elemId).textContent += letters[letterIndex];
      letterIndex++;
    } else {
      clearInterval;
    }
  }, speed);
};

dynamicWord(titleWords, "dynamicTitle", 100);

gsap.to("#animated-emoji", {
  duration: 1,
  opacity: 1,
  delay: 2.6,
  x: 0,
});
gsap.to("#animated-emoji", {
  duration: 1,
  delay: 3,
  rotate: 20,
});
gsap.to("#animated-emoji", {
  duration: 1,
  delay: 3.5,
  rotate: -10,
});
gsap.to(".choose-structure-btn", {
  duration: 1,
  opacity: 1,
  delay: 3.6,
  x: -100,
});

// === Switch to second screen ===
document
  .getElementById("choose-structure-btn")
  .addEventListener("click", () => {
      document.getElementById("screen-1").style.display = "none"
      document.getElementById("screen-2").style.display = "block"
      gsap.to("#screen-2", {
        duration: 0.75,
        opacity: 1,
      })
      gsap.to("#screen-2-title", {
        duration: 0.75,
        opacity: 1,
        scale: 1,
        delay: 0.5
      })
  });
