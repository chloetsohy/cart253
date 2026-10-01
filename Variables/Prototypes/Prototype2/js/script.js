/**
 * variables prototype 2
 * Chloe Tso
 */

"use strict";

// this prototype creates a series of rectangles that change colour over time. 
// the mouse cursor is replaced with a circle that is the next colour of the current hovered rectangle.
const rectangleCount = 16;
const rectangleColours = ["lightpink", "lemonchiffon", "honeydew", "lightblue"];
const framesPerStep = 12;
const mouseCursorSize = 50;

/**
 * created canvas
*/
function setup() {
    createCanvas(1728, 1117);
    noCursor();
}


/**
 * created rectangles that change colour over time
*/
function draw() {
    background("white");

    // equal spacing
    const rectangleWidth = width / rectangleCount;
    const currentColourIndexes = [];



    noStroke();
    for (let rectangle = 0; rectangle < rectangleCount; rectangle++) {
        const colourStep = floor((frameCount - rectangle * framesPerStep) / framesPerStep);
        const colourIndex = max(0, colourStep) % rectangleColours.length; // 0 ensure index in bound
        currentColourIndexes[rectangle] = colourIndex;

        fill(rectangleColours[colourIndex]); // filling rectangle with current colour index
        rect(rectangle * rectangleWidth, 0, rectangleWidth, height);
    }



    // finding rectangle that cursor is currently on, makes sure num stays between 0 and last rect
    const mouseRectangle = constrain(floor(mouseX / rectangleWidth), 0, rectangleCount - 1);
    const mouseRectangleColourIndex = currentColourIndexes[mouseRectangle]; // tracking colour num for rect



    // use the next colour in the array for the custom mouse cursor
    const mouseColourIndex = (mouseRectangleColourIndex + 1) % rectangleColours.length;
    fill(rectangleColours[mouseColourIndex]);
    ellipse(mouseX, mouseY, mouseCursorSize, mouseCursorSize);

}