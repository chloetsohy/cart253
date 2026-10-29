/**
 * RGB Colour Mixer
 * This program allows the user to mix RGB colours using buttons. It displays the current colour in the background and shows the RGB values on the screen.
 */

"use strict";

// initial rgb values
let currentRGB = {
    r: 25,
    g: 25,
    b: 25
};


// declaring varianbles
const BUTTON_WIDTH = 80;
const BUTTON_HEIGHT = 60;
const ROW_GAP = 80;
const COL_GAP = 150;


/**
 * Sets up the canvas size
*/
function setup() {
    createCanvas(700,700);
}


/**
 * Draws the background and the buttons for adjusting RGB values
*/
function draw() {
    background(currentRGB.r, currentRGB.g, currentRGB.b);

    textAlign(CENTER, CENTER);
    textSize(30);


    //ALIGNING BUTTONS AND TEXT
    let centerX = width / 2;
    
    let colRedX = centerX - COL_GAP;
    let colGreenX = centerX;
    let colBlueX = centerX + COL_GAP;


    let topRowY = height / 2 - ROW_GAP;
    let labelRowY = height / 2;
    let bottomRowY = height / 2 + ROW_GAP;

    // changing the text colour based on the background colour for better visibility
    fill(getChannelColor(currentRGB.r, currentRGB.g, currentRGB.b));

    text("R\n" + currentRGB.r, colRedX, labelRowY);
    text("G\n" + currentRGB.g, colGreenX, labelRowY);
    text("B\n" + currentRGB.b, colBlueX, labelRowY);

    // drawing the buttons and updating the RGB values based on user interaction
    currentRGB.r = drawButton(colRedX - BUTTON_WIDTH / 2, topRowY - BUTTON_HEIGHT / 2, "+", currentRGB.r, 15);
    currentRGB.g = drawButton(colGreenX - BUTTON_WIDTH / 2, topRowY - BUTTON_HEIGHT / 2, "+", currentRGB.g, 15);
    currentRGB.b = drawButton(colBlueX - BUTTON_WIDTH / 2, topRowY - BUTTON_HEIGHT / 2, "+", currentRGB.b, 15);

    currentRGB.r = drawButton(colRedX - BUTTON_WIDTH / 2, bottomRowY - BUTTON_HEIGHT / 2, "-", currentRGB.r, -15);
    currentRGB.g = drawButton(colGreenX - BUTTON_WIDTH / 2, bottomRowY - BUTTON_HEIGHT / 2, "-", currentRGB.g, -15);
    currentRGB.b = drawButton(colBlueX - BUTTON_WIDTH / 2, bottomRowY - BUTTON_HEIGHT / 2, "-", currentRGB.b, -15);
}


// Draws the button and handles user interaction. Returns the new channel value after user interaction.
function drawButton(x, y, label, channelValue, amount) {
  let newValue = channelValue;
  
  push();

  // check if mouse is hovering over button
  if (mouseX >= x && mouseX <= x + BUTTON_WIDTH && mouseY >= y && mouseY <= y + BUTTON_HEIGHT) {
    fill(240); // slightly darker fill for hover
    cursor(HAND); // update to hand cursor
    
    // check if user is clicking
    if (mouseIsPressed) {
      fill(180);
      newValue += amount;
      newValue = constrain(newValue, 0, 255); // constrain the value to be between 0 and 255
      mouseIsPressed = false;
    }
  } else {
    fill(255);
  }

  // button structure
  stroke(0);
  strokeWeight(2);
  rect(x, y, BUTTON_WIDTH, BUTTON_HEIGHT, 5);

  // button symbol
  noStroke();
  fill(0);
  textSize(20);
  text(label, x + BUTTON_WIDTH / 2, y + BUTTON_HEIGHT / 2);
  pop();

  return newValue;
}


// calculate overall brightness of the background colour and return either black or white for the text colour
function getChannelColor(r, g, b) {
  let brightness = (r+g+b)/3; // average of the three channels
  
  if (brightness > 125) {
    return color(0);
  } else {
    return color(255);
  }
}


