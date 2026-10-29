/**
 * RGB Colour Mixer
 * This program allows the user to mix RGB colours using buttons. It displays the current colour in the background and shows the RGB values on the screen.
 */

"use strict";


let currentRGB = {
    r: 255,
    g: 255,
    b: 255
};


const BUTTON_WIDTH = 80;
const BUTTON_HEIGHT = 60;
const ROW_GAP = 80;
const COL_GAP = 150;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(700,700);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(currentRGB.r, currentRGB.g, currentRGB.b);

textAlign(CENTER, CENTER);
textSize(30);

let centerX = width / 2;

let colRedX = centerX - COL_GAP;
let colGreenX = centerX;
let colBlueX = centerX + COL_GAP;


let topRowY = height / 2 - ROW_GAP;
let labelRowY = height / 2;
let bottomRowY = height / 2 + ROW_GAP;

fill(getChannelColor(currentRGB.r, currentRGB.g, currentRGB.b));

text("R\n" + currentRGB.r, colRedX, labelRowY);
text("G\n" + currentRGB.g, colGreenX, labelRowY);
text("B\n" + currentRGB.b, colBlueX, labelRowY);

currentRGB.r = drawButton(colRedX - BUTTON_WIDTH / 2, topRowY - BUTTON_HEIGHT / 2, "+", currentRGB.r, 15);
currentRGB.g = drawButton(colGreenX - BUTTON_WIDTH / 2, topRowY - BUTTON_HEIGHT / 2, "+", currentRGB.g, 15);
currentRGB.b = drawButton(colBlueX - BUTTON_WIDTH / 2, topRowY - BUTTON_HEIGHT / 2, "+", currentRGB.b, 15);

currentRGB.r = drawButton(colRedX - BUTTON_WIDTH / 2, bottomRowY - BUTTON_HEIGHT / 2, "-", currentRGB.r, -15);
currentRGB.g = drawButton(colGreenX - BUTTON_WIDTH / 2, bottomRowY - BUTTON_HEIGHT / 2, "-", currentRGB.g, -15);
currentRGB.b = drawButton(colBlueX - BUTTON_WIDTH / 2, bottomRowY - BUTTON_HEIGHT / 2, "-", currentRGB.b, -15);
}

