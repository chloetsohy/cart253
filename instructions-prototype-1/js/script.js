/**
 * House Prototype
 * Chloe Tso
 * 
 * This project displays a simple house with a grass land.
 */

"use strict";

/**
 * This function sets up the canvas size.
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * This function identifies the background color and calls the 
 * functions to draw the grass, house and clouds.
*/
function draw() {
    background('#C4E2FF');

    noStroke();

    drawClouds();
    drawGrass();
    drawHouse();

}


/**
 * Draws a simple house design.
 */
function drawHouse() {
    // Draw the house body
    fill('#bf8c60');
    rect(100, 230, 200, 150);

    // Draw the roof
    fill('#591f0a');
    triangle(100, 230, 300, 230, 200, 100);

    // Draw the door
    fill('#cf4747');
    rect(180, 305, 40, 75);

    // Draw windows
    fill('#dcd1e1');
    rect(130, 250, 40, 40);
    rect(230, 250, 40, 40);
}



/**
 * Draw a simple grass land.
 */
function drawGrass() {
    // Draw the grass
    fill('#82c983');
    rect(0, 380, 400, 20);
}


/**
 * Draw clouds in the sky using 3 ellipses for each cloud.
 */
function drawClouds() {
    // Draw the clouds
    fill('#ffffff');
    ellipse(110, 80, 80, 60);
    ellipse(70, 80, 80, 60);
    ellipse(90, 60, 80, 60);

    ellipse(290, 100, 80, 50);
    ellipse(320, 100, 80, 50);
    ellipse(305, 80, 80, 50);
}