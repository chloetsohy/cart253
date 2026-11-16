/**
 * Rhythm Game
 * Chloe Tso
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let screen = "menu";

// the 4 main keys for the game
const keys = ["D", "F", "J", "K"];

// setup description
function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont("Courier New");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
  background('#ffffff');

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


function drawMenu() {
  
  push();
  fill('grey');

  textFont("Monospace");
  textSize(60);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("Welcome to XXX", width/2, height/2 - 75);

  textStyle(NORMAL);
  textSize(40);
  text("Press ENTER to start", width/2, height/2 + 50);

  pop();
}
