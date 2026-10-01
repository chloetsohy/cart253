/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let base = undefined;
let skin = undefined;
let eyewhite = undefined;
let pupils = undefined;

async function preload() { // add async 
    base = await loadImage('./assets/images/base.png'); // add await
    skin = await loadImage('./assets/images/skin.png');
    eyewhite = await loadImage('./assets/images/eyewhite.png');
    pupils = await loadImage('./assets/images/pupils.png');
}

async function setup() {
    createCanvas(600, 600);
    await preload(); // call preload with await
}

function draw() {
    background('navy');
    image(skin, 0, 0, 600, 600);
    image(eyewhite, 0, 0, 600, 600);
    image(pupils, 0, 0, 600, 600);
    image(base, 0, 0, 600, 600);


    
}