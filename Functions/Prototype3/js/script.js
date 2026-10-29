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
  drawPetRow(hungerImgs, pet.hunger, "Hunger: ", 300, color(235, 0, 125));
  drawPetRow(happinessImgs, pet.happiness, "Happiness: ", 360, color(255, 252, 150));
  drawPetRow(sleepImgs, pet.energy, "Energy: ", 420, color(122, 191, 255));

  // Update button choices cleanly via parameters
  pet.hunger = drawButton("Feed", pet.hunger, 20);
  pet.happiness = drawButton("Play", pet.happiness, 20);
  pet.energy = drawButton("Sleep", pet.energy, 30);
}
