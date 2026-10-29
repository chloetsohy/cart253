/**
 * The paintbrush engine
 */


"use strict";


let currentColour;
let paletteColours = [];
const BOX_SIZE = 50;
const PALETTE_Y = 630;

function setup() {
createCanvas(700, 700);
background('beige');

  paletteColours = [
    color('black'),
    color(168, 30, 20),   
    color(232, 108, 0),  
    color(247, 236, 17),  
    color(10, 125, 31), 
    color(11, 123, 222), 
    color(97, 21, 179), 
    color(255, 18, 227)
  ];

  currentColour = paletteColours[0];
} 

function draw() {

  drawPaletteUI();

  if (mouseIsPressed) {
    if (mouseY< PALETTE_Y) {
    let mouseSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);
    let brushStyle = brushProperties(mouseSpeed)

    drawStroke(mouseX, mouseY, pmouseX, pmouseY, currentColour, brushStyle, brushStyle.thickness, brushStyle.transparency);
  }
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


function drawStroke(x1, y1, x2, y2, currentColour, brushStyle, strokeSize, transparency) {
  push();

  stroke(red(currentColour), green(currentColour), blue(currentColour), transparency);
  strokeWeight(strokeSize);
  strokeCap(PROJECT);
  
  line(x1, y1, x2, y2);

  pop();

}


function drawPaletteUI () {
  push();
  noStroke();


  for(let i = 0; i < paletteColours.length; i++) { // looping through the array index for the colours

    // spacing the boxes
    let xOffset = 90 + (i * (BOX_SIZE+15));

    // grab colour at position i and render the square
    fill(paletteColours[i]);
    rect(xOffset, PALETTE_Y, BOX_SIZE, BOX_SIZE);

  }

  pop();
}



function mousePressed() {

  // check if user presses within the vertical height of the boxes
  if (mouseY >= PALETTE_Y && mouseY <= PALETTE_Y + BOX_SIZE) {

    for (let i = 0; i < paletteColours.length; i++) {

      // check if user presses within the horizontal position in square
      let xOffset = 90 + (i * (BOX_SIZE + 15));

      // updating to match palette colour
      if (mouseX >= xOffset && mouseX <= xOffset + BOX_SIZE) {
        currentColour = paletteColours[i]; 
      }
    }
  }
}
