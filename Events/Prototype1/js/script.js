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


// MENU
function drawMenu() {

    // welcome message
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Welcome to the rhythm game!", width / 2, height / 2 - 50);
    textSize(24);
    text("Press anywhere to start", width / 2, height / 2);
    textFont("Monospace");


    // once user pressed key or mouse, the game state changes to game and timer begins
    if (mouseIsPressed || keyIsPressed) {
        gameState = "game";
        startTime = millis(); // starting timer
        score = 0;
        feedbackText = ""; 
        w = 325; 
        h = 325;
        isCircleVisible = true;
    }
}



function drawGame() {
    // 1. Check if 10 seconds have passed
    let elapsedTime = millis() - startTime;
    if (elapsedTime >= gameDuration) {
        gameState = "gameOver";
    }

    // Calculate remaining time to show the user
    let remainingTime = Math.ceil((gameDuration - elapsedTime) / 1000);

    strokeWeight(1);
    noStroke();
    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Press 'space' when it reaches the circle target!", width / 2, height / 2 - 300);
    text("Score: " + score, width / 2, height / 2 - 250);
    
    // Display the feedback text below the score
    text(feedbackText, width / 2, height / 2 - 210);

    // Display the timer countdown
    text("Time Left: " + remainingTime + "s", width / 2, height / 2 - 170);

    // --- DRAW GLOW EFFECT ---
    if (glowAmount > 0) {
        noFill();
        // Semi-transparent pink stroke for the glow aura
        stroke(255, 192, 203, 100); 
        strokeWeight(glowAmount);
        ellipse(width / 2, height / 2, 150, 150);
        
        // Fade the glow out across frames
        glowAmount -= 1.5; 
    }

    // Draw the target circle (diameter 150, so radius is 75)
    noFill();
    stroke(255);
    strokeWeight(3);
    ellipse(width / 2, height / 2, 150, 150);
    
    // Update the shrinking dimensions (happens in background even if hidden)
    w -= shrink;
    h -= shrink;

    // Draw the shrinking circle only if it hasn't been struck yet
    if (isCircleVisible) {
        noFill();
        stroke('pink');
        strokeWeight(3);
        ellipse(width / 2, height / 2, w, h);
    }

    // Reset circle step: runs when the note timeline completely finishes
    if (w <= 50 || h <= 50) {
        w = 325;
        h = 325;
        
        // If it shriveled up without being clicked, it's a natural miss
        if (isCircleVisible) {
            feedbackText = "Miss!";
            console.log("Miss!");
        }
        
        // Bring back visibility for the fresh oncoming note
        isCircleVisible = true; 
    }
}

// GAME OVER
// displays the game over message
function drawGameOver() {
    fill(255);
    noStroke();
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Game Over!", width / 2, height / 2 - 50);
    textSize(24);
    text("Final Score: " + score, width / 2, height / 2); // getting score
}



// WHEN THE KEY IS PRESSSED FOR GAME STARTING, automatically triggers the function
function keyPressed() {

    // conditional for when space is pressed
    if (gameState === "game" && key === " " && isCircleVisible) {
        
        // hiding circle for a clean look after the user presses space
        isCircleVisible = false;

        // triggering the glow amount and refers back to the drawGame function to create the glow effect
        glowAmount = 25; 
        
        // distance using radius of the shrinking circle and the fixed target circle
        let currentRadius = w / 2;
        let targetRadius = 75; // 150 / 2
    }
}
