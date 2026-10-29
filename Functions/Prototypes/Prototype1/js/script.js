/**
 * The paintbrush engine
 * This program is a paintbrush simulation that includes a colour palette. When users slowly draw on the canvas, the stroke is thick and bold, but as users move the mouse around at a faster speed, the stroke slowly changes into a more opaque and thin appearance.
 */


"use strict";


// variable declarations
let currentColour;
let paletteColours = [];
const BOX_SIZE = 50;
const PALETTE_Y = 630;


// SETUP FUNCTION, it defines the canvas size, background colour and the palette colours that will be displayed using array indexing

function setup() {
createCanvas(700, 700);
background(255, 254, 237);

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


// DRAW FUNCTION
// it first draws the UI of the palette to ensure it shows up on the user's screen
function draw() {

  drawPaletteUI();

  // when the user starts drawing, it calls drawStroke and system draws based on the parameters that will be detailed below.
  if (mouseIsPressed) {
    if (mouseY< PALETTE_Y) {
      
    // speed determined by the distance of current mouse position and previous position
    let mouseSpeed = dist(mouseX, mouseY, pmouseX, pmouseY);
    let brushStyle = brushProperties(mouseSpeed)

    drawStroke(mouseX, mouseY, pmouseX, pmouseY, currentColour, brushStyle, brushStyle.thickness, brushStyle.transparency);
  }
}
}



// by inputting the speed variable in the parameter, it tracks the current mouseSpeed to determine what the thickness and transparency it should be
function brushProperties(speed) {

  // speed range
let speedLimit = constrain(speed, 0, 100);

// thickness for 0 movement is 50px, for 100 movement is 2px.
let thicknessInitialize = map(speedLimit, 0, 100, 25, 2);

// slow = full opacity, faster= faint transparency
let transparencyInitialize = map(speedLimit, 0, 100, 255, 40);

return {
  // put into a container as an object
  thickness: thicknessInitialize, 
  transparency: transparencyInitialize};
}




// DRAW STROKE function defines how the stroke looks like. It takes the individual RGB values, along with the transparency for the colour/opacity. 

// it then states the stroke weight and cap, and draws the line based on these variables. 
function drawStroke(x1, y1, x2, y2, currentColour, brushStyle, strokeSize, transparency) {
  push();

  stroke(red(currentColour), green(currentColour), blue(currentColour), transparency);

  strokeWeight(strokeSize);
  strokeCap(PROJECT);
  
  line(x1, y1, x2, y2);

  pop();

}


//draws the interface for the colour palette
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



// determining whether the user's click is within the palette boxes bounds
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
