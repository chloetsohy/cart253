/**
 * Title of Project
 * Chloe Tso
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let currentbg, currentstroke;
let targetbg, targetstroke;

let speed = 0.05;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);


    currentbg = color('lavender');
    currentstroke = color('midnightBlue');
    targetbg = color('hotpink');
    targetstroke = color('lemonChiffon');

    noCursor();

}

function draw() {
    background('white');

    // Allow mouse rotation
    orbitControl();

    // Wireframe styling
    noFill();
    strokeWeight(1);

    if (mouseX < width / 2 && mouseY < height / 2) {
        targetstroke = color('midnightBlue');
        targetbg = color('lavender');
    }

    else if (mouseX > width / 2 && mouseY < height / 2) {
        targetstroke = color('hotpink');
        targetbg = color('LemonChiffon');
    }

    else if (mouseX < width / 2 && mouseY > height / 2) {
        targetstroke = color('DarkOliveGreen');
        targetbg = color('PapayaWhip');
    }

    else {
        targetstroke = color('orange');
        targetbg = color('honeydew');
    }

    currentbg = lerpColor(currentbg, targetbg, speed);
    currentstroke = lerpColor(currentstroke, targetstroke, speed);

    background(currentbg);
    stroke(currentstroke);

    rotateY(map(mouseX, 0, width, -HALF_PI, HALF_PI));
    rotateX(map(mouseY, 0, height, -HALF_PI, HALF_PI));

    // Draw sphere with radius 100
    // Lower detail parameters (e.g., 12, 12) make a low-poly wireframe look
    sphere(200, 16, 12);
}
