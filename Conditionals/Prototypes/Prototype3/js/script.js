/**
 * What's your luck?
 * Chloe Tso
 * 
 * This is a simple game for users to test their luck. 
*/

"use strict";
let luck = undefined;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

function mousePressed() {
    const loot = random();

    if (loot < 0.1) {
        luck = "You got the ultra rare golden shark!";
    }
    else if (loot < 0.2) {
        luck = "You got a super rare rainbow fish!";
    }
    else if (loot < 0.3) {
        luck = "Woah! A rare jellyfish!";
    }
    else {
        luck = "Just another common fish...";
    }
}

/**
 * Display the resulting drop on this run
 */
function draw() {

}