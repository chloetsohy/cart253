/**
 * Rain your darkest secrets
 * Chloe Tso
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let inputText;
let fallingText = [];
let state = "entering";

// set up the canvas
function setup() {

    createCanvas(800, 800);

    inputText = createInput('');
    inputText.attribute('placeholder', 'Type your darkest secret here...');
    inputText.size(500, 30);
    inputText.style('text-align', 'center');
    inputText.style('font-size', '20px');
    inputText.style('font-family', 'Arial');
    inputText.position((width - 500) / 2, 700);

}


function draw() {
    background(41, 41, 41);

    if (state === "entering"){
        enteringState();
    }

    else if (state === "falling"){
        for (let textObj of fallingText){
            textObj.update();
            textObj.display();
        }
    }
}


function enteringState(){
}

function keyPressed(){
    if (keyCode === ENTER && state === "entering"){
        state = "falling";
        fallingState();
    }
}
