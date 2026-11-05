/**
 * Incremental Tails
 * Chloe Tso
 * 
 * This project
 */
"use strict";



const MAXSIZE = 40;
const MINSIZE = 5;
const EASING = 0.08;

let ballPosition = [];
let ballNum = []; 


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(windowWidth, windowHeight);
noCursor();

for (let i = 0; i < 5; i++) {
    addBall();
}

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background(255);


for (let i = 0; i < ballPosition.length; i++) {
    let targetX, targetY;
    
    if (i === 0) {
        targetX = mouseX;
        targetY = mouseY;
    } 
    
    else {
        targetX = ballPosition[i - 1].x;
        targetY = ballPosition[i - 1].y;
    }

    ballPosition[i].x += (targetX - ballPosition[i].x) * EASING;
    ballPosition[i].y += (targetY - ballPosition[i].y) * EASING;

}



    // ensuring larger balls are on top of the smaller balls
for (let i = ballPosition.length - 1; i >= 0; i--) {
        let position = ballPosition[i];
        let distFromMouse = i / ballPosition.length;

        let currentSize = map(i, 0, ballPosition.length - 1, MAXSIZE, MINSIZE);
        let currentOpacity = map(i, 0, ballPosition.length - 1, 255, 50);


        fill(0, currentOpacity);
        noStroke();
        ellipse(position.x, position.y, currentSize, currentSize);


        fill(100);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Clicks: " + ballNum.length + "\nClick to add more balls!", width/2, 50);

    }


}


function mousePressed() {
    addBall();
}

function addBall() {
    ballPosition.push(createVector(mouseX, mouseY));
}
