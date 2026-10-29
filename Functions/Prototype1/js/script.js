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
let thickness = map(speedLimit, 0, 100, 50, 2);

// slow = full opacity, faster= faint transparency
let transparency = map(speedLimit, 0, 100, 255, 40);

return thickness, transparency;
}


function drawStroke(x1, x2, y1, y2, thickness, transparency) {
  push();

  stroke(12, 61, 23, transparency);
  strokeWeight(thickness);
  strokeCap(ROUND);
  
  line(x1, x2, y1, y2);

  pop();

}
