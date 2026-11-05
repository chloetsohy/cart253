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


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
background


for (let i = 0; i < ballPosition.length; i++) {
    let targetX, targetY;
    if (i === 0) {
        targetX = mouseX;
        targetY = mouseY;
    } else {
        targetX = ballPosition[i - 1].x;
        targetY = ballPosition[i - 1].y;
    }

}

}

}