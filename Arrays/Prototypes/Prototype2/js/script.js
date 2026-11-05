/**
 * Incremental Tails
 * Chloe Tso
 * 
 * This project displays a series of balls that follow the mouse cursor. The more clicks the user makes, the more balls will be added to the screen.
 */


"use strict";

const MAXSIZE = 40;
const MINSIZE = 5;
const EASING = 0.1;

let ballPosition = [];
let ballNum = []; 


// This function sets up canvas and starts program with 5 balls.
function setup() {
createCanvas(windowWidth, windowHeight);
noCursor();

for (let i = 0; i < 5; i++) {
    addBall();
}

}


// This function draws the balls on the canvas and applies easing to make the balls follow the mouse cursor smoothly. It also displays the number of clicks made by the user.
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
        text("Clicks: " + (ballNum.length -5)+ "\nClick to add more balls!", width/2, 50);

    }


}


// calls addball function when the mouse is pressed
function mousePressed() {
    addBall();
}


// pushing new ball to the ballNum array, this will allow users to see how many clicks they have made and how many balls are on the screen
function addBall() {
    ballPosition.push(createVector(mouseX, mouseY));
    ballNum.push(1);
}
