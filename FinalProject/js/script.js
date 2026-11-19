/**
 * Rhythm Game
 * Chloe Tso
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let screen = "songs";
let bgSvg;
let customFont;

// the 4 main keys for the game
const keys = ["D", "F", "J", "K"];


// setup description
async function setup() {
  createCanvas(windowWidth, windowHeight);

  bgSvg = await loadImage("../assets/images/background.png");
  customFont = await loadFont("../assets/Minecraft.ttf");

  textFont(customFont);
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
  fill('white');

  textFont(customFont);
  textSize(70);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text("Welcome to Cozy Notes", width/2, height/2 - 340);

  
  if (frameCount % 60 < 40) {
    textStyle(NORMAL);
    textSize(25);
    text("Press any key to start...", width/2, height/2 + 420);
  }



  if (keyIsPressed) {
    screen = "songs";
  }
  
  pop();
  
}

function keyPressed() {
  if (screen === "menu" && keyCode === "ENTER") {
    screen = "songs";
  }
}


function drawSongs() {
  push();
  rectMode(CENTER);
  noStroke();
  fill(0, 150);
  rect(width/2, height/2, 1850, 900, 7);

  textFont(customFont);
  textSize(70);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill('white');
  text("Select a song to play:", width/2, height/2 - 330);


  drawRect(width/2 - 500, height/2 +30, 420, 500, 4);
  drawRect(width/2 + 0, height/2 + 30, 420, 500, 4);
  drawRect(width/2 + 500, height/2 +30, 420, 500, 4);
  pop();


}


function drawRect(x, y, rectWidth, rectHeight, radius) {
  push();
  rectMode(CENTER);
  noStroke();
  fill(255, 100);

  let hovering = mouseX > x - rectWidth/2 && mouseX < x + rectWidth/2 && mouseY > y - rectHeight/2 && mouseY < y + rectHeight/2;
  if (hovering) {
    cursor(HAND);
    rectWidth += 20;
    rectHeight += 20;
  }

  rect(x, y, rectWidth, rectHeight, radius);
  pop();
}

