/**
 * Rhythm Game
 * Chloe Tso
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let screen = "menu";
let bgSvg;

// the 4 main keys for the game
const keys = ["D", "F", "J", "K"];


// setup description
async function setup() {
  createCanvas(windowWidth, windowHeight);

  bgSvg = await loadImage("../assets/images/background.png");

  textFont("Courier New");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
  background('#ffffff');

  image(bgSvg, 0, 0, width, height);

  if (screen === "menu") {
      drawMenu();
  }

  else if (screen === "songs"){
      drawSongs();
  }

  else if (screen === "game") {
      drawGame();
  }

  else if (screen === "results") {
      drawResults();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function drawMenu() {
  
  push();
  fill('grey');

  textFont("Monospace");
  textSize(55);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("Welcome to Cozy Notes", width/2, height/2 - 75);

  textStyle(NORMAL);
  textSize(30);
  text("Press ENTER to start", width/2, height/2 + 50);

  if (keyIsPressed && keyCode === ENTER) {
    screen = "songs";
  }
  pop();
  
}


function drawSongs() {
  push();



}