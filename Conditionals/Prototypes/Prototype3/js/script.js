/**
 * What's your luck?
 * Chloe Tso
 * 
 * This is a simple game for users to test their luck. 
*/

"use strict";
let luck = undefined;
let sound = undefined;
let hasPlayed = false;

/**
 * Create the canvas
 */
async function setup() {
    createCanvas(400, 400);

    sound = await loadSound("assets/sounds/bubble.mp3");
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
    background("lightblue");

    if (mouseIsPressed && luck !== undefined) {
        if (!hasPlayed) {
            sound.play();
            hasPlayed = true;
        }
        textAlign(CENTER, CENTER);
        textStyle(BOLD);
        textSize(18);
        fill("#222222");
        text(luck, width / 2, height / 2);
    }

    else if (!mouseIsPressed) {
        hasPlayed = false;
        fill("#f5f5f5");
        ellipse(width / 2, height / 2, 200, 200);
        noStroke();

        textAlign(CENTER, CENTER);
        textStyle(BOLD);
        textSize(18);
        fill("hotpink");
        text("Pop me!", width / 2, height / 2);
    }


}