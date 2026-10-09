/**
 * What's your luck?
 * Chloe Tso
 * 
 * This is a simple game for users to test their luck. When users click on the bubble, they get a random sea animal. The game also plaus a sound when the bubble is popped.
*/

"use strict";


// variables
let luck = undefined;
let sound = undefined;
let hasPlayed = false;

/**
 * Create the canvas, loaded the sound
 */
async function setup() {
    createCanvas(400, 400);

    sound = await loadSound("assets/sounds/bubble.mp3");
}


// probability distribution for the loot using random 
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
 * Display the resulting drop, and play the sound when the bubble is popped
 */
function draw() {
    background("lightblue");


    // display the result of the loot when the bubble is popped
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

    // display the bubble when the mouse is not pressed and resets the sound played 
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