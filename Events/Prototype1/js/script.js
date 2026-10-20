"use strict";

// variable declarations
let gameState = "menu"; // default state is menu
let score = 0;
let shrink = 4;
let w = 325;
let h = 325;

let feedbackText = ""; // storing perfect, good etc
let startTime; // tracking start time
let gameDuration = 10000;   // 10 seconds in milliseconds

let isCircleVisible = true; // hides circle once clicked
let glowAmount = 0; // glow amount for clarity

// setup creates the canvas based on the user's window dimensions
function setup() {
    createCanvas(windowWidth, windowHeight);
}

// draw function defines the background and the current game state
function draw() {
    background(25, 21, 74);

    // based on current state, system calls the correct function to show on screen
    if (gameState === "menu") {
        drawMenu();
    } else if (gameState === "game") {
        drawGame();
    } else if (gameState === "gameOver") {
        drawGameOver();
    }
}
