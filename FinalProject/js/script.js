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
let songImg2;
let songImg3;

let angelBite;
let iconicHeart;
let badApple;

let glowAmount;

let arrowImg;
let cursorImg;
// the 4 main keys for the game
const keys = ["D", "F", "J", "K"];



// setup description
async function setup() {

  // await setupRhythm();

  createCanvas(windowWidth, windowHeight);

  bgSvg = await loadImage("../assets/images/background.png");
  customFont = await loadFont("../assets/Minecraft.ttf");
  songImg1 = await loadImage("../assets/images/songImg1.png");
  songImg2 = await loadImage("../assets/images/songImg2.png");
  songImg3 = await loadImage("../assets/images/songImg3.png");

  angelBite = await loadSound("../assets/sounds/angelBite.mp3");
  badApple = await loadSound("../assets/sounds/badApple.mp3");
  iconicHeart = await loadSound("../assets/sounds/iconicHeart.mp3");


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



  drawRect(width / 2 - 500, height / 2 + 30, 420, 500, 20, "Angel Bite", songImg1, "by TXT\nLength: 76 seconds");
  drawRect(width / 2 + 0, height / 2 + 30, 420, 500, 20, "Iconic Heart", songImg2, "by Hearts2Hearts\nLength: 90 seconds");
  drawRect(width / 2 + 500, height / 2 + 30, 420, 500, 20, "Bad Apple", songImg3, "by Alstroemeria Records & ZUN\nLength: 42 seconds");
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

      if (songTitle === "Iconic Heart") {
        iconicHeart.play();
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
  drawLanes();
  // drawGameInfo();

}


function drawLanes() {

  let laneWidth = min(155, width * 0.2);
  let startX = (width - laneWidth * 4) / 2;
  let topY = 40;
  let hitY = height - 115;

  push();
  //draw the 4 lanes using for loop
  for (let i = 0; i < 4; i++) {
    let x = startX + i * laneWidth;

    fill(0, 150);
    stroke(255, 153);
    strokeWeight(2);
    rect(x + 3, topY, laneWidth - 6, hitY - topY + 20, 10);

    // hit line
    stroke(255);
    strokeWeight(3);
    line(x + 8, hitY, x + laneWidth - 8, hitY);

    drawButton(x + laneWidth / 2, hitY + 52, laneWidth - 20, 50, keys[i]);
  }

  pop();
}


function drawButton(x, y, w, h, label) {
  rectMode(CENTER);

  noStroke();
  fill('white');
  rect(x, y, w, h, 10);

  // outline around the box while key is held
  if (keyIsDown('Key' + label)) {
    noFill();
    stroke('white');
    strokeWeight(3);
    rect(x, y, w + 12, h + 12, 14);
  }

  fill(15);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(24);
  text(label, x, y);

  rectMode(CORNER);
}


// function drawGameInfo() {
//   textAlign(LEFT, CENTER);
//   textSize(20);
//   textStyle(BOLD);
//   text(songs[0].title, 20, 30);
//   text(songs[0].length, 20, 60);



//   let time = max(0, songs[0].length - songs[0].currentTime());

//   text(`Time Remaining: ${time.toFixed(2)} seconds`, 20, 90);

//   let progress = constrain(songs[0].currentTime() / songs[0].length, 0, 1);

//   fill(45);
//   rect(20, 120, width - 40, 20, 10);

//   fill('black');
//   rect(20, 120, (width - 40) * progress, 20, 10);
// }

