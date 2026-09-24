/**
 * Mr. Furious
 * Pippin Barr
 *
 * A guy who becomes visibly furious!
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
let shake = {
  x: 200,
  y: 200
};

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
  background(sky.r, sky.g, sky.b);
  if (sky.b > 0) {
    sky.b -= 0.5;
    sky.g -= 0.5;
    sky.r -= 0.5;
  }
  mrFurious.x = random(shake.x, shake.y);
  mrFurious.y = random(shake.x, shake.y);

  if (shake.x > 170) {
    shake.x -= 0.1;
    shake.y += 0.1;
    mrFurious.size += 0.5;
  }
  push();
  noStroke();

  fill(mrFurious.fill.r, mrFurious.fill.gb, mrFurious.fill.gb);
  if (mrFurious.fill.gb > 70) {
    mrFurious.fill.gb -= 0.5;
  }
  ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
  pop();



  push();
  noStroke();
  fill(bird.fill.r, bird.fill.g, bird.fill.b);
  quad(bird.x1, bird.y1, bird.x4, bird.y4, bird.x2, bird.y2, bird.x3, bird.y3);

  if (bird.x1 < 400) {
    bird.x1 += 2;
    bird.x2 += 2;
    bird.x3 += 2;
    bird.x4 += 2;

    let x = bird.x1;
    bird.y1 = 30 * sin(x * 0.1) + 150;
    bird.y2 = 30 * sin(x * 0.1) + 150;
  }


  pop();
}
