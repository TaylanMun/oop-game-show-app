# OOP GAME SHOW APP

## JS FILES

### app.js
    - Line 19 - 26 : When button is clicked, creates a game if there is no game created, reset the game and creates a new game
    - Line 29 - 40 : Listening to keyboard values on the screen with click
    - Line 43 - 58 : Listening to the keyboard values on the screen with the values pressed on the keyboard. Regular expression processing is case sensitive only and keyboard with the value pressed is not "Enter"

### Game.js
    - Line 15 - 26 : An array of phrases that takes 5 values. A new phrase is created by navigating the array one by one. If the values are to be increased, they can be moved to a new JavaScript file.
    - Line 32 - 34 : Generates a random number based on the total number of phrases. Use this as phrases object index to get random phrase.
    - Line 39 - 44 : Starts the game
    - Line 50 - 93 : Checks whether the user interaction is with the mouse or the keyboard and performs the operations. Checks if the clicked or pressed value is in the active phrase. 
    - Line 99 - 103 : Checks if she/he has won the game.
    - Line 110 - 121 : Changes the image for each letter clicked or pressed in the phrase. Checks for wrong answer. If total of wrong answer is 5, call gameOver.
    - Line 129 - 143 : If the value is correct, the game is won; if it is wrong, the game is lost.
    - Line 148 - 154 : Resets the game to replay the game after playing
    - Line 159 - 165 : Clears phrase
    - Line 170 - 177 : Clears on screen keyboard
    - Line 182 - 196 : Clears heart image

### Phrase.js
    - Line 11 - 21 : Displays on the screen according to the random phrase
    - Line 28 - 30 : Checks if the clicked or pressed value exists in the phrase
    - Line 37 - 44 : The clicked or pressed value indicates if the phrase is present

## Style

### style.css
    - Added linear-gradient background color
    - Change font family
    - Change start button 
    - The colors of the game screen have been slightly changed according to the added linear gradient and font family.

