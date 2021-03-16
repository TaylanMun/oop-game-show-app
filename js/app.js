/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// initial empty game
let game;

// form elements
const startButton = document.getElementById("btn__reset");
const keyboardButtonsDiv = document.getElementById("qwerty");

// keyboard keys
let keys = [];

// the game starts when the button is clicked
startButton.addEventListener("click", () => {
  //  restarting a game reset board first
  // if game is not empty, reset when entering the game
  if (game) {
    keys = [];
    game.resetGame();
  }
  // initialize new game
  game = new Game();
  // start game
  game.startGame();

  // keyboard button clicks after the game start
  keyboardButtonsDiv.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      keys.push(event.target.innerText);
      const pressedKey = keys.slice(0, keys.length - 1);
      if (pressedKey.indexOf(event.target.innerText) > -1) {
        event.preventDefault();
        return false;
      } else {
        game.handleInteraction(event);
      }
    }
  });

  // handle keyboard clicks after the game start
  document.addEventListener("keypress", (event) => {
    
    // Only accept letters
    const letterRegex = /^[A-Za-z]+$/;
    if (letterRegex.test(event.key) && event.key !== "Enter") {
      // add pressed keys to a list and prevent reuse of that key
      keys.push(event.key);
      const pressedKeys = keys.slice(0, keys.length - 1);
      if (pressedKeys.indexOf(event.key) > -1) {
        event.preventDefault();
        return false;
      } else {
        game.handleInteraction(event);
      }
    }
  });

});
