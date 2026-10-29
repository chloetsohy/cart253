/**
 * Tomodachi
 * Chloe Tso
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let pet = {
    hunger: 100,
    happiness: 100,
    energy: 100
};

const BAR_MAXWIDTH = 250;
const BAR_MAXHEIGHT = 28;

let hungerImgs = [];
let sleepImgs = [];
let happinessImgs = [];

async function preload() {
let loadedAssets = await Promise.all([
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
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
  createCanvas(800, 800);
  noSmooth();  // pixel art hence no need to be smoothed
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
  background(33, 37, 43);
  cursor(ARROW);

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
  drawPetRow(hungerImgs, pet.hunger, "Hunger: ", 200, 300, color(235, 0, 125));
  drawPetRow(happinessImgs, pet.happiness, "Happiness: ", 200, 360, color(255, 252, 150));
  drawPetRow(sleepImgs, pet.energy, "Energy: ", 200, 420, color(122, 191, 255));


  // ACTION BBUTTONS
  pet.hunger = drawButton(200, 560, 110, 45, "Feed", pet.hunger, 20);
  pet.happiness = drawButton(345, 560, 110, 45, "Play", pet.happiness, 20);
  pet.energy = drawButton(490, 560, 110, 45, "Sleep", pet.energy, 30);
}


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
  fill(50, 50, 50);
  rect(x + 205, y, 250, 28, 5);

  noStroke();
  fill(barColor);

  let barWidth = map(stat, 0, 100, 0, BAR_MAXWIDTH);
  rect(x + 205, y, barWidth, BAR_MAXHEIGHT, 5);
  pop();
}