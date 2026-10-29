/**
 * Tomodachi
 * Chloe Tso
 * 
 * This project is a tomodachi pet simulator where the player can interact with their pet by feeding it, playing with it and letting it sleep. 
 */


"use strict";


// initial stats for the pet
let pet = {
    hunger: 100,
    happiness: 100,
    energy: 100
};

const BAR_MAXWIDTH = 250;
const BAR_MAXHEIGHT = 28;

// array to hold the images for each stat
let hungerImgs = [];
let sleepImgs = [];
let happinessImgs = [];

// using async/await to preload the images for each stat
async function preload() {
let loadedAssets = await Promise.all([ // promise all loads all the images and waits for them to finish loading before proceeding
    loadImage('./assets/images/hunger1.png'),
    loadImage('./assets/images/hunger2.png'),
    loadImage('./assets/images/hunger3.png'),
    loadImage('./assets/images/sleep1.png'),
    loadImage('./assets/images/sleep2.png'),
    loadImage('./assets/images/sleep3.png'),
    loadImage('./assets/images/happiness1.png'),
    loadImage('./assets/images/happiness2.png'),
    loadImage('./assets/images/happiness3.png')
  ]);

  hungerImgs = [loadedAssets[0], loadedAssets[1], loadedAssets[2]];
  sleepImgs = [loadedAssets[3], loadedAssets[4], loadedAssets[5]];
  happinessImgs = [loadedAssets[6], loadedAssets[7], loadedAssets[8]];
}



/**
 * Sets up the canvas and disables smoothing for the pixel art
*/
function setup() {
  createCanvas(800, 800);
  noSmooth();  // pixel art hence no need to be smoothed
}



// draw function that renders the pet and its stats, as well as the action buttons
function draw() {
  background(36, 45, 82);
  cursor(ARROW); // changing the cursor back to default arrow at the start of each frame

  // depeleting stats over time in 15 frame intervals
  if (frameCount % 15 === 0) {
    pet.hunger = constrain(pet.hunger - 1, 0, 100);
    pet.happiness = constrain(pet.happiness - 1.5, 0, 100);
    pet.energy = constrain(pet.energy - 0.5, 0, 100);
  }

  textAlign(CENTER, CENTER);
  textSize(36);
  fill(240, 240, 245);
  text("My Tomodachi Pet!", width / 2, 200);


  // passing the images and stats as parameters to drawPetRow
  imageMode(CENTER);
  //calls the drawPetRow function to render the hunger, happiness, and energy stats of the pet
  drawPetRow(hungerImgs, pet.hunger, "Hunger: ", 200, 300, color(235, 0, 125)); 
  drawPetRow(happinessImgs, pet.happiness, "Happiness: ", 200, 360, color(255, 252, 150));
  drawPetRow(sleepImgs, pet.energy, "Energy: ", 200, 420, color(122, 191, 255));


  // ACTION BBUTTONS
  // calls drawButton function and passes on these parameters to render the buttons for feeding, playing, and sleeping
  pet.hunger = drawButton(200, 560, 110, 45, "Feed", pet.hunger, 20);
  pet.happiness = drawButton(345, 560, 110, 45, "Play", pet.happiness, 20);
  pet.energy = drawButton(490, 560, 110, 45, "Sleep", pet.energy, 30);
}



// DRAWPETROW FUNCTION, defines what images to show based on stat values and renders the bars and text
function drawPetRow(imgs, stat, label, x, y, barColor) {
  let index = 0;

  // Determining which image to show when the stat is above 70, between 30 and 70, or below 30
  if (stat > 70) {
    index = 0;
  }

  else if (stat > 30) {
    index = 1;
  }

  else {
    index = 2;
  }

  // render the image
  image(imgs[index], x-8, y+14, 55, 55);

  // BAR TEXT
  push();
  textAlign(LEFT, CENTER);
  textSize(18);
  fill(240, 240, 245);
  text(label + floor(stat) + "%", x + 50, y + 14);

  // bar background container
  stroke(20);
  strokeWeight(2);
  fill(24, 31, 59);
  rect(x + 205, y, 250, 28, 5);

  noStroke();
  fill(barColor);

  // mapping the stat value to the width of the bar, so that it fills up proportionally to the stat value
  let barWidth = map(stat, 0, 100, 0, BAR_MAXWIDTH);
  rect(x + 205, y, barWidth, BAR_MAXHEIGHT, 5); // draws the bar based on the mapped width
  pop();
}


// DRAWBUTTON FUNCTION, defines the button's appearance and behavior when hovered or clicked
function drawButton(x, y, w, h, label, stat, increaseAmount) {
  push();

  // check if mouse is hovering over button
  let isHovered = mouseX > x && 
                  mouseX < x + w && 
                  mouseY > y && 
                  mouseY < y + h;

  if (isHovered) {
    cursor(HAND); // changes to hand as a way to indicate that the button is clickable
      
    if (mouseIsPressed) {
      fill(58, 64, 75);
      stat = min(100, stat + increaseAmount);
      mouseIsPressed = false; // prevent continuous increase while holding down the mouse
    }
    else {
      fill(74, 82, 96);
    }
  }


  else {
    // button is not hovered
    fill(24, 31, 59);
  }


  stroke(20);
  strokeWeight(2);
  rect(x, y, w, h, 8);

  noStroke();
  fill(240, 240, 245);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(label, x + w / 2, y + h / 2); // draws the label text in the center of the button
  
  pop();

  return stat;
  }