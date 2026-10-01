/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000",
  velocity: {
    x: 0,
    y: 0
  },
  acceleration: 0.987
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  velocity: 1,
  fill: "#000000"
};

const target = {
  x: 900,
  y: 200,
  size: 100,
  fill: "#00ff00"
}

/**
 * Create the canvas
 */
function setup() {
  createCanvas(1200, 600);
  noCursor();
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  drawTarget();
  // Move user circle
  moveUser();

  // Draw the user and puck
  drawUser();
  drawPuck();
  movePuck();
  checkTarget();
  keepInBounds();
}


function keepInBounds() {
  if (puck.x < 0) {
    puck.x = 0;
  }
  if (puck.x > width) {
    puck.x = width;
  }
  if (puck.y < 0) {
    puck.y = 0;
  }
  if (puck.y > height) {
    puck.y = height;
  }
}


/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}


function drawTarget() {
  push();
  noStroke();
  fill(target.fill);
  ellipse(target.x, target.y, target.size);
  pop();
}

function movePuck() {


  const d = dist(user.x, user.y, puck.x, puck.y);
  const overlap = (d < user.size / 2 + puck.size / 2);

  if (overlap) {
    // puck.speed *= puck.acceleration;


    // if (overlap) {

    puck.velocity.x = (puck.x - user.x) * 0.1;
    puck.velocity.y = (puck.y - user.y) * 0.1;



  }
  puck.x += puck.velocity.x;
  puck.y += puck.velocity.y;

  puck.velocity.x *= puck.acceleration;
  puck.velocity.y *= puck.acceleration;

}



function checkTarget() {
  const d = dist(puck.x, puck.y, target.x, target.y);
  const overlap = (d < puck.size / 2 + target.size / 2);

  if (overlap) {
    target.fill = "#0000ff";
  }

  else {
    target.fill = "#00ff00";
  }
}