/**
 * Abstract Prototype
 * Chloe Tso
 * 
 * This project displays a simple abstract art piece with a grid background.
 */

"use strict";

/**
 * This function sets up the canvas size.
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * This function identifies the background color and 
 * calls the functions to draw the shapes on the canvas.
*/
function draw() {
    background('black');

    noStroke();

    drawRectangle();
    drawBrownInside();

    drawBLackInside();

}


/**
 * Draw a grid square background.
 */
function drawRectangle() {
    fill('brown');
    rect(0, 0, 200, 200);

    fill('brown');
    rect(200, 200, 200, 200);
}


/**
 * Draw circle and square shapes inside the brown squares.
 */
function drawBrownInside() {

    fill('black');
    ellipse(100, 100, 150, 150);

    fill('white');
    ellipse(100, 100, 50, 50);


    fill('black');
    rect(225, 225, 150, 150);

    fill('white');
    rect(275, 275, 50, 50);
}

/**
 * Draw triangle shapes inside the black squares.
 */
function drawBLackInside() {

    fill('brown');
    triangle(300, 50, 350, 150, 250, 150);

    fill('brown');
    triangle(100, 350, 150, 250, 50, 250);
}

