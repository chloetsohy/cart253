/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let faceImg;

function preload() {
    faceImg = loadImage('assets/images/base.png');
}

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background('pink');
    image(faceImg, 0, 0, 600, 600);

}