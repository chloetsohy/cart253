/**
 * Variables Prototype 1
 * Chloe Tso
 *
 * Ten rows of text open from the center, hold, and close in sequence.
 */

"use strict";

// variables here are all fixed in the rest of the code
const WORD = "transformative";
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
    background('seagreen');
    const elapsed = millis(); // time since the animation started

    // loop through each row and draw the word with the correct spread progress
    for (let row = 0; row < ROW_COUNT; row++) {
        const rowStart = row * ROW_DELAY;
        const timeSinceStart = elapsed - rowStart;
        const rowProgress = timeSinceStart < 0 ? 0 : getSpreadProgress(timeSinceStart % LOOP_TIME);
        // conditional to ensure that the rowProgress is 0 if the row hasn't started yet
        drawWord(rowHeight * (row + 1), rowProgress);
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

function drawWord(y, spreadProgress) {
    const letterWidths = [];
    let wordWidth = 0;

    for (let letter of WORD) {
        const letterWidth = textWidth(letter);
        letterWidths.push(letterWidth);
        wordWidth += letterWidth;
    }

    let x = width / 2 - wordWidth / 2;
    for (let index = 0; index < WORD.length; index++) {
        const compactX = x + letterWidths[index] / 2;
        const spreadX = map(index, 0, WORD.length - 1, SIDE_PADDING, width - SIDE_PADDING);
        const letterX = lerp(compactX, spreadX, spreadProgress);

        fill(255);
        text(WORD[index], letterX, y);
        x += letterWidths[index];
    }
}

function easeInOut(value) {
    return value < 0.5
        ? 2 * value * value
        : 1 - pow(-2 * value + 2, 2) / 2;
}