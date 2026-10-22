/**
 * Alphabet Proximity
 * Chloe Tso
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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
