/**
 * Chloe Tso
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let userText = "";
/**
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    textFont("Helvetica");
    textAlign(CENTER, CENTER);
}


/**
 * 
*/
function draw() {
    background(200);
    text(userText, width / 2, height / 2);
}

function keyTyped() {
    userText += key;
}