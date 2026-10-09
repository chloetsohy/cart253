/**
 * What's your luck?
 * Chloe Tso
 * 
 * This is a simple game for users to test their luck. The user will be prompted to guess a number from 1- 10, and the program will generate a random number in that range. If the user's guess matches the random number, they win. 
*/

"use strict";

let input;
let randomNum;
let result = "";
/**
 * Sets up the canvas for the game.
*/
function setup() {
    createCanvas(500, 500);

    background("lightblue");

    input = createInput();
    input.center();
    input.elt.addEventListener("keydown", checkGuess);

    randomNum = (random(1, 10));
}

function checkGuess(event) {
    if (event.key === "Enter") {
        const guess = Number(input.value());
        if (guess === randomNum) {
            result = "You win!";
        } else {
            result = "You lose!";
        }
    }
}

function draw() {
    if (result === "You win!") {
        background("green");
    } else if (result === "You lose!") {
        background("red");
    }

    textAlign(CENTER, TOP);
    fill("black");
    textSize(32);
    text(result, width / 2, height / 2 - 80);
    textSize(20);
    text("Guess a number from 1 to 10", width / 2, height / 2 - 35);
}
