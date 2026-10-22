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
            fill(255, 255, 255);
            textSize(random(10, 30));
            textAlign(CENTER, CENTER);

            for(let obj of fallingText){
                obj.y += obj.speed;
                text(obj.character, obj.x, obj.y);
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

function fallingState(){
    // remove the input box
    inputText.remove();

    for (let character of inputText.value()){

        fallingText.push({
            character: character,
            x: random(width),
            y: random(-200, -20),
            speed: random(1, 4)
        });
    }
}
