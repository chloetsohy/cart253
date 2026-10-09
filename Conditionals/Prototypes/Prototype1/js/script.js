/**
 * The Pixel Game
 * Chloe Tso
 * 
 * This is a pixel art game. When the cursor is pressed in a box within the grid, the box changes colour. 
 */

"use strict";

let gridSize = 15;
let columns, rows;
let grid = [];

/**
 * Set up canvas using a grid system. It uses 2 variables: columns and rows to determine the num of boxes in the grid.
*/
function setup() {

    createCanvas(700, 700);
    background('white');

    columns = width / gridSize;
    rows = height / gridSize;



    // Initializing the grid
    for (let x = 0; x < columns; x++) {
        grid[x] = [];

        for (let y = 0; y < rows; y++) {
            grid[x][y] = 0;
        }
    }

}

/**
 * This draw function checks if mouse is pressed and if it is, it checks the box cursor is currently in before filling in the colour.
*/
function draw() {
    background(255);
    // determining which x and y grid position cursor is on
    if (mouseIsPressed) {
        let currentX = floor(mouseX / gridSize); // floor helps with rounding down to the nearest whole number
        let currentY = floor(mouseY / gridSize)

        // verifying it is inside before changing the colour
        if (currentX >= 0 && currentX < columns && currentY >= 0 && currentY < rows) {
            grid[currentX][currentY] = 1;
        }
    }


    // drawing and filling in the grid boxes
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            if (grid[x][y] == 1) {
                fill(28, 40, 128);
            }
            else fill('white');


            stroke(134, 143, 209);

            rect(x * gridSize, y * gridSize, gridSize, gridSize);
        }
    }
}