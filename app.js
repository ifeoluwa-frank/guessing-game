"use strict";

//  GENERATE A RANDOM NUMBER
let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(secretNumber);
let attempt = 3;

const btnCheck = document.querySelector(".btn-chk");

const message = (message) => {
  document.querySelector(".message").textContent = message;
};

btnCheck.addEventListener("click", (e) => {
  e.preventDefault();

  const userGuess = document.querySelector(".guess").value;

  if (!userGuess) {
    message("⛔ No number!");
  } else {
    // INPUT VALIDATION
    const sanitizedInput = userGuess.replace(/[^\d]/g, "");

    if (userGuess === sanitizedInput) {
      // CONVERT USER INPUT TO NUMBER
      const convertedInput = Number(userGuess);

      if (convertedInput === secretNumber) {
        message("💃 Correct Number!");
        document.querySelector(".number").textContent = convertedInput;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "18rem";
      } else if (convertedInput != secretNumber) {
        if (attempt > 1) {
          message(userGuess > secretNumber ? "📈 Too high!" : "📉 Too Low!");
          attempt--;
          document.querySelector(
            ".attempts"
          ).textContent = `Attempts: ${attempt}`;
        } else {
          message("💥 You lost the game");
          document.querySelector(".attempts").textContent = `Attempts: 0`;
          document.querySelector("body").style.backgroundColor = "#fa5252";
        }
      }
    } else {
      message("⛔ Unexpected Input!");
    }
  }
});

//  RESET

const btnAgain = document
  .querySelector(".again")
  .addEventListener("click", (e) => {
    e.preventDefault();

    attempt = 3;
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(secretNumber);

    document.querySelector(".attempts").textContent = `Attempts: ${attempt}`;

    message("Start guessing...");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "12rem";
  });
