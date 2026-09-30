/**
 * Variables Prototype 1
 * Chloe Tso
 *
 * Ten rows of text open from the center, hold, and close in sequence.
 */

"use strict";

const WORD = "longerwordtester";
const ROW_COUNT = 12;
const OPEN_TIME = 500;
const HOLD_TIME = 50;
const CLOSE_TIME = 500;
const ROW_DELAY = 150;
const LOOP_TIME = ROW_COUNT * ROW_DELAY;
const SIDE_PADDING = 28;

let rowHeight;

/**
 * Sets up the canvas and initializes the animation.
 */
function setup() {
    createCanvas(650, 400);
    textFont("monospace");
    smooth();
    textSize(20);
    textAlign(CENTER, CENTER);
    rowHeight = height / (ROW_COUNT + 1);
}

function draw() {
    background('lightblue');
    const elapsed = millis();

    for (let row = 0; row < ROW_COUNT; row++) {
        const rowStart = row * ROW_DELAY;
        const timeSinceStart = elapsed - rowStart;
        const rowProgress = timeSinceStart < 0
            ? 0
            : getSpreadProgress(timeSinceStart % LOOP_TIME);
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