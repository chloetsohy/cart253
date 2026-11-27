/**
 * Rhythm Game
 * Chloe Tso
 * 
 * Rhythm game description.
 */

"use strict";

let screen = "songs";
let bgSvg;
let customFont;
let songImg1;
let songImg3;

let angelBite;
let badApple;

let glowAmount;

let arrowImg;
let cursorImg;
// the 4 main keys for the game
const keys = ["D", "F", "J", "K"];



// setup description
async function setup() {


  createCanvas(windowWidth, windowHeight);

  bgSvg = await loadImage("../assets/images/background.png");
  customFont = await loadFont("../assets/Minecraft.ttf");
  songImg1 = await loadImage("../assets/images/songImg.png");
  songImg3 = await loadImage("../assets/images/songImg3.png");

  angelBite = await loadSound("../assets/sounds/angelBite.mp3");
  badApple = await loadSound("../assets/sounds/badApple.mp3");



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

  else if (screen === "songs") {
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
  text("Welcome to Cozy Notes", width / 2, height / 2 - 340);


  if (frameCount % 60 < 40) {
    textStyle(NORMAL);
    textSize(25);
    text("Press any key to start...", width / 2, height / 2 + 380);
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
  rect(width / 2, height / 2, 1850, 900, 7);

  textFont(customFont);
  textSize(70);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill('white');
  text("Select a song to play:", width / 2, height / 2 - 330);



  drawRect(width / 2 - 500, height / 2 + 30, 420, 500, 4, "Angel Bite", songImg1, "Length: 76 seconds");
  drawRect(width / 2 + 0, height / 2 + 30, 420, 500, 4, "Sweetest Escape", songImg1, "Length: 90 seconds");
  drawRect(width / 2 + 500, height / 2 + 30, 420, 500, 4, "Bad Apple", songImg3, "Length: 42 seconds");
  pop();


}



function drawRect(x, y, rectWidth, rectHeight, radius, songTitle, songImg, length) {

  push();
  rectMode(CENTER);
  noStroke();
  fill(255, 100);

  noStroke();
  let hovering = mouseX > x - rectWidth / 2 && mouseX < x + rectWidth / 2 && mouseY > y - rectHeight / 2 && mouseY < y + rectHeight / 2;
  if (hovering) {
    cursor(HAND);
    rectWidth += 20;
    rectHeight += 20;



    if (mouseIsPressed && screen != "game") {
      screen = "game";

      if (songTitle === "Angel Bite") {
        angelBite.play();
      }

      if (songTitle === "Bad Apple") {
        badApple.play();
      }
    }
  }


  rect(x, y, rectWidth, rectHeight, radius);
  pop();


  push();
  fill(255);
  textFont(customFont);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(songTitle);
  text(songTitle, x, y - rectHeight / 2 + 50);

  textSize(20);
  text(length, x, y - rectHeight / 2 + 450);
  pop();


  push();
  songImg.resize(300, 0);
  image(songImg, x - 150, y - rectHeight / 2 + 100);
  pop();
}





//----- GAME FUNCTION
function drawGame() {

  noCursor();
  push();
  rectMode(CENTER);


  noStroke();
  fill(0, 150);
  strokeWeight(2);
  stroke(255);
  rect(width / 2, height / 2, 630, 821);


  push();
  stroke(255, 153);
  strokeWeight(2);
  let topY = height / 2 - 821 / 2;
  let bottomY = height / 2 + 821 / 2;
  line(width * 4.5 / 11, topY, width * 4.5 / 11, bottomY);
  line(width * 5.5 / 11, topY, width * 5.5 / 11, bottomY);
  line(width * 6.5 / 11, topY, width * 6.5 / 11, bottomY);
  pop();

  drawButton(width * 4 / 11, height / 2 + 320, 70, 70, 85, 85, 'KeyD');
  drawButton(width * 5 / 11, height / 2 + 320, 70, 70, 85, 85, 'KeyF');
  drawButton(width * 6 / 11, height / 2 + 320, 70, 70, 85, 85, 'KeyJ');
  drawButton(width * 7 / 11, height / 2 + 320, 70, 70, 85, 85, 'KeyK');

  pop();

}

function drawButton(x, y, s1, s2, o1, o2, keyNum) {
  push();

  fill('white');
  ellipse(x, y, s1, s2);
  pop();

  push();
  noFill();
  stroke('white');
  strokeWeight(3);

  if (keyIsDown(keyNum)) {
    ellipse(x, y, o1 + 20, o2 + 20);
  }
  else {
    ellipse(x, y, o1, o2);
  }
  pop();
}



function rhythmRect(x, y, rectWidth, rectHeight, radius, fillColour) {
  push();
  rectMode(CENTER);
  noStroke();
  fill(fillColour);

  rect(x, y, rectWidth, rectHeight, radius);
  pop();
}