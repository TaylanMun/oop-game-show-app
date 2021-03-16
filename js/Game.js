/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Gets phrases for the list and adds to the phrases property
     * @return {array} list of phrases
     */
    createPhrases() {   
        const phrasesList = [
            "Piece of cake",
            "Cool as a cucumber",
            "Hold your horses",
            "Blue in the face",
            "Head in the clouds"
        ];
        const phrases = []
        phrasesList.map(phrase => phrases.push(new Phrase(phrase)));
        return phrases;
    }

    /**
     * Gets a random phrase
     * @return {Object} phrase
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }

    /**
     *  The game starts with a random phrase
     */
    startGame() {
        const overlayDiv = document.getElementById("overlay");
        overlayDiv.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Checks to see if the letter selected by the player matches a letter in the phrase
     * @param event
     */
    handleInteraction(event) {
        // get keys of the keyboard on the screen
        const keys = document.querySelectorAll('.key');
        let btnVal;
        const eventType = event.type;
        // assign the selected letter to button value
        if (eventType === 'click') {
            btnVal = event.target.innerText;
        } else if (eventType === 'keypress') {
            btnVal = event.key;
        }

        if (this.activePhrase.checkLetter(btnVal)) {
            if (eventType === 'click') {
                event.target.disabled = true;
                event.target.classList.add('chosen');
            } else if (eventType === 'keypress') {
                keys.forEach(key => {
                    if (event.key === key.innerText) {
                        key.disabled = true;
                        key.classList.add("chosen");
                    }
                });
            }
            this.activePhrase.showMatchedLetter(btnVal);
        } else {
            if (eventType === 'click') {
                event.target.disabled = true;
                event.target.classList.add('wrong');
            } else if (eventType === 'keypress') {
                keys.forEach(key => {
                    if (event.key === key.innerText) {
                        key.disabled = true;
                        key.classList.add("wrong");
                    }
                });
            }
            this.removeLife();
        }

        if (this.checkForWin()) {
            this.gameOver(true);
        }
    }

    /**
     * Checks win
     *
     * @return {Boolean} true if game is won or false otherwise     */
    checkForWin() {
        const shownChars = document.getElementsByClassName("show");
        const allChars = document.getElementsByClassName("letter");
        return shownChars.length === allChars.length;
    }

    /**
     * Increments the missed property
     * Removes a life from the scoreboard
     * If the player has five missed guesses, then end the game by calling the gameOver() method
     */
     removeLife() {
        this.missed++;
        const tries = document.querySelectorAll(".tries");
        const lostHeart = document.createElement("LI");
        lostHeart.classList.add("tries");
        lostHeart.innerHTML = '<img src="images/lostHeart.png" alt="Heart Icon" width="36" height="36">&nbsp;';
        tries[0].parentNode.appendChild(lostHeart);
        tries[0].remove();
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    
    /**
     * Show game over message
     *
     * @param {boolean} gameStatu - user status in the game
     */
    gameOver(gameStatu) {
        const overlayDiv = document.getElementById('overlay');
        const gameOverMessage = document.getElementById('game-over-message');
        const resetButton = document.getElementById('btn__reset');

        if (gameStatu) {
            overlayDiv.style.display = 'flex';
            gameOverMessage.innerText = 'You win!';
            resetButton.innerText = 'Play Again';
        } else {
            overlayDiv.style.display = 'flex';
            gameOverMessage.innerText = 'You lost!';
            resetButton.innerText = 'Try Again';
        }
    }

    /**
     * resets game for start
     */
    resetGame() {
        const gameOverMessage = document.getElementById('game-over-message');
        gameOverMessage.innerText = "";
        this.resetKeyboard();
        this.resetPhrase();
        this.resetTries();
    }

    /**
     * Clears phrase and characters
     */
    resetPhrase() {
        const phraseDiv = document.querySelector("#phrase");
        const chars = phraseDiv.querySelector("ul");
        while (chars.firstChild) {
            chars.removeChild(chars.firstChild);
        }
    }

    /**
     * Clears on screen keyboard styling
     */
    resetKeyboard() {
        const keys = document.querySelectorAll('.key');
        keys.forEach(key => {
            key.classList.remove("wrong");
            key.classList.remove("chosen");
            key.disabled = false;
        });
    }

    /**
     * Reset the hearts
     */
    resetTries() {
        this.missed = 0;
        const scoreboardDiv = document.querySelector("#scoreboard");
        const triesOl = scoreboardDiv.querySelector("ol");
        while (triesOl.firstChild) {
            triesOl.removeChild(triesOl.firstChild);
        }

        for (let i = 0; i < 5; i++) {
            const liveHeartLi = document.createElement("LI");
            liveHeartLi.classList.add("tries");
            liveHeartLi.innerHTML = '<img src="images/liveHeart.png" alt="Heart Icon" width="36" height="36">&nbsp;';
            triesOl.appendChild(liveHeartLi);
        }
    }
}