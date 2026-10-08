/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;
let loseSound = undefined;
let state = false;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
async function setup() {
    createCanvas(400, 400);
    window.addEventListener("online", lose);
    window.addEventListener("offline", lose);

    loseSound = await loadSound("assets/sounds/fah.mp3");
}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#87ceeb");

    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
    if (gameOver) {
        push();
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}


function lose() {
    gameOver = true;

    if (state == false) {
        loseSound.play();
    }
    state = true;

}

function keyPressed() {
    lose();

}

function mousePressed() {
    lose();
}

function mouseMoved() {
    lose();
}


document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        lose();
    }
});