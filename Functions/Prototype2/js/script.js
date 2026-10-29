/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let currentRGB = {
    r: 0,
    g: 0,
    b: 0
};

const BUTTON_WIDTH = 80
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

}