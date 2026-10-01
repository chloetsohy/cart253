/**
 * Tomato Vision
 * Chloe Tso
 * 
 * This project showcases a simple interactive animation where tomato girl's pupils follows the user's cursor for movement. 
 */

"use strict";

let base = undefined;
let skin = undefined;
let eyewhite = undefined;
let pupils = undefined;
let pupilBuffer = undefined; // buffer for pupils

async function preload() { // add async 
    base = await loadImage('./assets/images/base.png'); // add await
    skin = await loadImage('./assets/images/skin.png');
    eyewhite = await loadImage('./assets/images/eyewhite.png');
    pupils = await loadImage('./assets/images/pupils.png');
}

async function setup() {
    createCanvas(600, 600);
    pupilBuffer = createGraphics(600, 600); // clipping mask
    await preload(); // call preload with await
    noCursor();
}

function draw() {
    background(179, 227, 245);
    image(skin, 0, 0, 600, 600);
    image(eyewhite, 0, 0, 600, 600);


    // map mouse position to offset values for the pupils
    let offsetX = map(mouseX, 0, width, -30, 30);
    let offsetY = map(mouseY, 0, height, -30, 30);


    pupilBuffer.clear(); // clear the buffer before drawing
    pupilBuffer.image(pupils, offsetX, offsetY, 600, 600); // draw pupils with offset

    let clippedPupils = pupilBuffer.get(); // get clippers to get pupils from buffer

    clippedPupils.mask(eyewhite); // apply mask to the pupils

    image(clippedPupils, 0, 0);

    image(base, 0, 0, 600, 600); // draw base on top of everything

}