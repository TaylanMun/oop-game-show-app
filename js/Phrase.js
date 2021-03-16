/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // displays phrase on the page
    addPhraseToDisplay() {
        const phraseDiv = document.querySelector("#phrase");
        const ul = phraseDiv.children[0];
        const phraseLength = this.phrase.length;
        for (let i = 0; i < phraseLength; i++) {
            const li = document.createElement("li");
            li.innerText = this.phrase[i];
            li.className = this.phrase[i] !== ' ' ? 'letter' : 'space'
            ul.appendChild(li);
        }
    }

    /**
     * Checks whether the character is an phrase or not
     * 
     * @param {String} character - for phrase check
     */
    checkLetter(character) {
        return this.phrase.includes(character) ? character : false;
    }

    /**
     * If the selected character matches, it shows it
     *
     * @param {String} character - for phrase check
     */
    showMatchedLetter(character) {
        const letters = document.getElementsByClassName('letter');
        for (let i = 0; i < letters.length; i++) {
            if (character === letters[i].innerText) {
                letters[i].classList.add("show");
            }
        }
    }
}