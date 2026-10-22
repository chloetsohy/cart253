/**
 * Alphabet Proximity
 * Chloe Tso
 * 
 * This is a simple guessing game where the user has to guess a letter from the alphabet. The background colour changes based on the distance of the user's guess from the target letter. 
 */

"use strict";

let targetLetter;
let targetIndex;
let userGuess = '';
let feedbackMessage = 'Type a letter (A-Z) to start guessing:';
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let recentDiff = null;
let state = 'guessing';
let bgColor; // variable to hold the background color


// this setup function determines the initial state of the game and the randomed letter it generates
function setup() {
    createCanvas(800, 800);
    textAlign(CENTER, CENTER);

    bgColor = color(187, 212, 252);

    targetIndex = floor(random(0, 26));
    targetLetter = alphabet[targetIndex];

    if (state === 'guessing')
        guessing();
    else if (state === 'win')
        win();
}


// this draw function calls to update the user's guess and display the message. 
function draw() {
    background(bgColor);

    fill(25);
    textSize(32);
    text('Alphabet Guessing Game!', width/2, 250);

    textSize(22);
    text("Your last guess: ", width/2, 350);

    // Displays the actual key the user pressed
    fill(0, 50, 150);
    textSize(64);
    text(userGuess, width/2, 420);

    // Displays your conditional feedback messages
    fill(25);
    textSize(22);
    text(feedbackMessage, width/2, 520);
}

function guessing() {
}

function win() {
}


// this function checks if the key pressed is a letter and compares it to the target letter. it will show that specific feedback message based on how close the guess is

function keyPressed() {
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) { // this checks if the key pressed is a letter (A-Z or a-z)
        userGuess = key.toUpperCase(); // changes to uppercase to match the target letter
        let guessIndex = alphabet.indexOf(userGuess); // gets the index of the guessed letter in the alphabet

        // get the diff
        let currentDifference = abs(targetIndex - guessIndex);


        // conditional statements to determine the feedback messsage and background
        if (currentDifference === 0) {
            feedbackMessage = "Correct! The letter was " + targetLetter + "!";
            bgColor = color(144, 238, 144); // green for win
            state = 'win';
        } 
        // Checks if we have a previous guess to compare to
        else if (recentDiff !== null && currentDifference > recentDiff) {
            feedbackMessage = "Too Far!!";
            bgColor = color(255, 182, 193); // light pink for colder
        }
        else if (currentDifference <= 1) {
            feedbackMessage = "It's one of your neighbours!"; 
            bgColor = color(255, 69, 0); // red orange for super close
        }
        else if (currentDifference <= 3) {
            feedbackMessage = "You're quite close!"; 
            bgColor = color(255, 140, 0); // dark orange
        }
        else if (currentDifference <= 5) {
            feedbackMessage = "It's getting closer!"; 
            bgColor = color(255, 215, 0); // yellow
        }
        else if (currentDifference <= 8) {
            feedbackMessage = "You're getting there."; 
            bgColor = color(173, 216, 230); // light blue
        }
        else {
            feedbackMessage = "Not even close!";
            bgColor = color(200, 200, 200); // gray for far away
        }

        // update the recent difference
        recentDiff = currentDifference; 
    }
}
