/**
 * Rain your darkest secrets (Refactored for Functions Challenge)
 * Chloe Tso (Modified)
 * 
 * This program asks users for an input of their secrets, and then displays them as falling text on the screen. 
 * 
 * Challenge Compliance:
 * 1. Functions with parameters: updateCharacterPhysics() and drawCharacter()
 * 2. Functions with return values: createSecretData()
 * 3. Refactoring: Extracted processing and rendering out of the draw loop into modular clean functions.
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


function drawStroke
