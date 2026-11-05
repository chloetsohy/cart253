/**
 * Arrays Prototype 1
 * Chloe Tso
 *
 * Ten rows of text open from the center, hold, and close in sequence.
 * CHANGED FROM VARIABLES PROTOTYPE 1: Now uses arrays to store words, colours, and speed multipliers for each row.
 */

"use strict";

// array of words to display
const WORDS = ["transformative", "ephemeral", "interactive", "immersive", "ethereal", "reflection", "translucent", "dynamic", "dreamlike", "radiant", "captivating", "enchanting"];

// array of colours to use for each row
const COLOURS = ["#FF6B6B", "#4ECDC4", "#45AAF2", "#FDCB6E",
 "#A8E6CF", "#DED5C4", "#FF8B94", "#A29BFE", "#00CEC9", "#FAB1A0", "#E84393", "#6C5CE7" ];

 // array of speed multipliers for each row
const SPEED = [1.0, 1.3, 0.6, 1.5, 0.8, 1.2, 1.0, 1.4, 0.9, 1.6, 1.1, 1.3];

const ROW_COUNT = 12;
const OPEN_TIME = 500;
const HOLD_TIME = 50;
const CLOSE_TIME = 500;
const ROW_DELAY = 150;
const LOOP_TIME = ROW_COUNT * ROW_DELAY;
const SIDE_PADDING = 28;

let rowHeight;

/**
 * sets up the canvas and initializes animation.
 */
function setup() {
    // declaring the canvas size, font, and text alignment
    createCanvas(650, 400);
    textFont("roboto");
    smooth();
    textSize(20);
    textAlign(CENTER, CENTER);
    rowHeight = height / (ROW_COUNT + 1);
}

function draw() {
    background('#1E272C');
    const elapsed = millis(); // time since the animation started

    // loop through each row and draw the word with the correct spread progress
    for (let row = 0; row < ROW_COUNT; row++) {
        const rowStart = row * ROW_DELAY;
        const timeSinceStart = (elapsed - rowStart) * SPEED[row];

        let rowProgress;
        if (timeSinceStart < 0) {
            rowProgress = 0;
        } else {
            rowProgress = getSpreadProgress(timeSinceStart % LOOP_TIME);
        }


        const currentWord = WORDS[row]; // getting word from current row
        const currentColour = COLOURS[row]; // getting colour from current row
        // conditional to ensure that the rowProgress is 0 if the row hasn't started yet
        drawWord(rowHeight * (row + 1), rowProgress, currentWord, currentColour); // inserts the current row word and colours as arguments
    }
}

function getSpreadProgress(rowElapsed) {
    if (rowElapsed < OPEN_TIME) {
        return easeInOut(rowElapsed / OPEN_TIME);
    }

    if (rowElapsed < OPEN_TIME + HOLD_TIME) {
        return 1;
    }

    if (rowElapsed < OPEN_TIME + HOLD_TIME + CLOSE_TIME) {
        return easeInOut(1 - (rowElapsed - OPEN_TIME - HOLD_TIME) / CLOSE_TIME);
    }

    return 0;
}

// when function is called, it takes those arguments and replaces with the current parameters, allowing program to draw the correct word in the correct colour and position
function drawWord(y, spreadProgress, wordToDraw, wordColour) {
    const letterWidths = [];
    let wordWidth = 0;

    // replacing it with a parameter instead of previous prototype's singular word
    // kinda like using this. from java
    for (let letter of wordToDraw) {
        const letterWidth = textWidth(letter);
        letterWidths.push(letterWidth);
        wordWidth += letterWidth;
    }

    let x = width / 2 - wordWidth / 2;
    for (let index = 0; index < wordToDraw.length; index++) {
        const compactX = x + letterWidths[index] / 2;
        const spreadX = map(index, 0, wordToDraw.length - 1, SIDE_PADDING, width - SIDE_PADDING);
        const letterX = lerp(compactX, spreadX, spreadProgress);

        fill(wordColour);
        text(wordToDraw[index], letterX, y);
        x += letterWidths[index];
    }
}

function easeInOut(value) {
    return value < 0.5
        ? 2 * value * value
        : 1 - pow(-2 * value + 2, 2) / 2;
}