/**
 * Rain your darkest secrets
 * Chloe Tso
 * 
 * This program asks users for an input of their secrets, and then displays them as falling text on the screen. It uses state conditionals and manipulation of fallingText array to create the effect of each character falling down at different positions.
 */

"use strict";

let inputText;
let fallingText = []; // array to hold the falling text objects
let state = "entering"; // initial state

// set up the canvas
function setup() {

    createCanvas(800, 800);

    // input box for user to type their darkest secret
    inputText = createInput('');
    inputText.attribute('placeholder', 'Type your secret here...'); // the 'placeholder' text in the input box, disappears when user starts typing
    inputText.size(500, 30); // size of the input box
    inputText.style('text-align', 'center');
    inputText.style('font-size', '20px');
    inputText.style('font-family', 'Arial');
    inputText.center();

}

function windowResized() {
    if (state === "entering") {
        inputText.center();
    }
}


function draw() {
    background(41, 41, 41);

    // state changing, if enter is pressed, program switches to the 'falling' state
    if (state === "entering"){
        enteringState();
    }

    else if (state === "falling"){
            // draw the falling text
            fill(255, 255, 255);
            textSize(random(10, 30));
            textAlign(CENTER, CENTER);

            // loop through the fallingText array and update the position of each character
            for(let obj of fallingText){
                obj.x += obj.vx; // drifting left and right
                obj.y += obj.vy; // drifting up or down


                textSize(obj.size);
                text(obj.character, obj.x, obj.y);
            }
        }
}


function enteringState(){
}

// if enter is pressed, this function switches the state to 'falling' and calls the fallingState function
function keyPressed(){
    if (keyCode === ENTER && state === "entering"){
        state = "falling";
        fallingState();
    }
}



function fallingState(){
    let secret = inputText.value(); // get the value of the input box
    // remove the input box
    inputText.remove();

    // for loop to loop through each character in input text, create object w random variables and push to the fallingText array
    for(let i = 0; i < secret.length; i++){
        let character = secret[i];


        let startX = width/2 - (secret.length*10)+(i*20); // starting x position for each character, centered on the canvas
        let startY = height/2;

        fallingText.push({
            character: character,
            x: startX,
            y: startY,
            vx: random(-4, 4), // allowing it to drift around
            vy: random(-4, 4),
            size: random(10, 30),
        });
    }
}