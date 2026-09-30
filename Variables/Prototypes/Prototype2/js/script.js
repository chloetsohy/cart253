/**
 * variables prototype 2
 * Chloe Tso
 */

"use strict";

// this prototype creates a series of rectangles that change colour over time
const rectangleCount = 16;
const rectangleColours = ["lightpink", "lemonchiffon", "honeydew", "lightblue"];
const framesPerStep = 12;

/**
 * created canvas
*/
function setup() {
    createCanvas(1728, 1117);
}


/**
 * created rectangles that change colour over time
*/
function draw() {
    background("white");

    // equal spacing
    const rectangleWidth = width / rectangleCount;

    noStroke();
    for (let rectangle = 0; rectangle < rectangleCount; rectangle++) {
        const colourStep = floor((frameCount - rectangle * framesPerStep) / framesPerStep);
        const colourIndex = max(0, colourStep) % rectangleColours.length; // 0 ensure index in bound

        fill(rectangleColours[colourIndex]);
        rect(rectangle * rectangleWidth, 0, rectangleWidth, height);
    }

}