/**
 * Look at the bird!
 * Chloe Tso, Charbel John Dagher
 * 
 * This project showcases the use of variables to create a simple animation of a bird flying across the screen. 
 * The bird's position and color are controlled by variables, and the background color changes over 
 * time to simulate a sunset effect.
 */

/** 
 * Variables for the bird's position, size, and color
 */
"use strict";
let bird = {
  x1: 0,
  y1: 150,
  x2: 100,
  y2: 150,
  x3: 50,
  y3: 200,
  x4: 50,
  y4: 180,
  speed: 0.1,

  // Colour
  fill: {
    r: 255,
    g: 255,
    b: 0
  }
};

// Our friend Mr. Furious
let mrFurious = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    gb: 225,
  }
};

// shake variables for Mr. Furious
let shake = {
  shaker1: 200,
  shaker2: 200
};

// sky colour variables
let sky = {
  r: 173,
  g: 216,
  b: 230
};

/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {

  // sky changing colour
  background(sky.r, sky.g, sky.b);
  if (sky.b > 0) {
    sky.b -= 0.5;
    sky.g -= 0.5;
    sky.r -= 0.5;
  }


  // shaker for mrFurious
  mrFurious.x = random(shake.shaker1, shake.shaker2);
  mrFurious.y = random(shake.shaker1, shake.shaker2);

  // incremental shaking of mrFurious when he gets angrier
  if (shake.shaker1 > 170) {
    shake.shaker1 -= 0.1;
    shake.shaker2 += 0.1;
    mrFurious.size += 0.5;
  }


  push();
  noStroke();

  // changes mrFurious's colour to redder as he gets angrier
  fill(mrFurious.fill.r, mrFurious.fill.gb, mrFurious.fill.gb);
  if (mrFurious.fill.gb > 70) {
    mrFurious.fill.gb -= 0.5;
  }
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();



  push();
  noStroke();
  // colour for bird
  fill(bird.fill.r, bird.fill.g, bird.fill.b);
  // shape for bird
  quad(bird.x1, bird.y1, bird.x4, bird.y4, bird.x2, bird.y2, bird.x3, bird.y3);

  // changes bird speed as he flies across the screen, and makes his wings flap in a sine wave pattern
  if (bird.x1 < 400) {
    bird.x1 += bird.speed;
    bird.x2 += bird.speed;
    bird.x3 += bird.speed;
    bird.x4 += bird.speed;
    bird.speed += 0.05;

    let x = bird.x1;
    bird.y1 = 30 * sin(x * 0.1) + 150;
    bird.y2 = 30 * sin(x * 0.1) + 150;
  }


  pop();
}
