/**
 * The paintbrush engine
 */


"use strict";

function setup() {
createCanvas(700, 700);
background('beige');

} 

function draw() {

  if (mouseIsPressed) {
    let mouseSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);
    let brushStyle = brushProperties(mouseSpeed)

    drawStroke(mouseX, mouseY, pmouseX, pmouseY, brushStyle, brushStyle.thickness, brushStyle.transparency);
  }
}

function brushProperties(speed) {

  // speed range
let speedLimit = constrain(speed, 0, 100);

// thickness for 0 movement is 50px, for 100 movement is 2px.
let thicknessInitialize = map(speedLimit, 0, 100, 25, 2);

// slow = full opacity, faster= faint transparency
let transparencyInitialize = map(speedLimit, 0, 100, 255, 40);

return {
  thickness: thicknessInitialize, 
  transparency: transparencyInitialize};
}


function drawStroke(x1, y1, x2, y2, brushStyle, strokeSize, transparency) {
  push();

  stroke(12, 61, 23, transparency);
  strokeWeight(strokeSize);
  strokeCap(SQUARE);
  
  line(x1, y1, x2, y2);

  pop();

}
