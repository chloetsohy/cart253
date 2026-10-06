/**
 * The Pixel Game
 * Chloe Tso
 * 
 * This is a pixel art game. When the cursor is pressed in a box within the grid, the box changes colour. 
 */

"use strict";

let gridSize = 10;
let columns, rows;
let grid = [];

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

    createCanvas(700, 700);
    background('black');

    columns = width / gridSize;
    rows = height / gridSize;



    // Initializing the grid
    for (let i = 0; i < columns; i++) {
        grid[i] = [];

        for (let j = 0; j < rows; j++) {
            grid[i][j] = 0;
        }
    }

}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255);

    if (mouseIsPressed) {
        let currentX = floor(mouseX / gridSize);
        let currentY = floor(mouseY / gridSize)


        if (currentX >= 0 && currentX <= gridSize && currentY >= 0 && currentY <= gridSize) {
            grid[currentX][currentY] = 1;
        }
    }
}