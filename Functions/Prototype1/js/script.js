/**
 * Rain your darkest secrets (Refactored for Functions Challenge)
 * Chloe Tso (Modified)
 * 
 * This program asks users for an input of their secrets, and then displays them as falling text on the screen. 
 * It features acceleration due to gravity, causing letters to pile up along the bottom floor.
 * 
 * Challenge Compliance:
 * 1. Functions with parameters: updateCharacterPhysics() and drawCharacter()
 * 2. Functions with return values: createSecretData()
 * 3. Refactoring: Extracted processing and rendering out of the draw loop into modular clean functions.
 */

"use strict";

let inputText;
let fallingText = []; // array to hold the falling text objects
let state = "entering"; // initial state
const GRAVITY = 0.15; // Global constant for downward acceleration

// set up the canvas
function setup() {
  createCanvas(800, 800);

  // input box for user to type their darkest secret
  inputText = createInput('');
  inputText.attribute('placeholder', 'Type your secret here...'); 
  inputText.size(500, 30); 
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

  if (state === "entering") {
    enteringState();
  } else if (state === "falling") {
    textAlign(CENTER, CENTER);

    // Loop through the array and hand off tasks to specialized functions
    for (let obj of fallingText) {
      updateCharacterPhysics(obj); // Modifies the object data using physics rules
      drawCharacter(obj);          // Visualizes the object data onto the canvas
    }
  }
}

function enteringState() {
  // Can be used to render instructions or background designs prior to submission
}

// if enter is pressed, this function switches the state to 'falling' and calls the fallingState function
function keyPressed() {
  if (keyCode === ENTER && state === "entering") {
    state = "falling";
    fallingState();
  }
}

function fallingState() {
  // remove the input box
  inputText.remove();

  // Process the raw input text string
  let rawText = inputText.value();

  // Loop through each character to build our abstract dataset
  for (let character of rawText) {
    // 1. Calling a function that RETURNS an organized data object
    let secretData = createSecretData(character);
    
    // Push the clean data bundle into our storage array
    fallingText.push(secretData);
  }
}

/**
 * CHALLENGE REQUIREMENT 1: Function with a Return Value
 * Generates and returns a fully initialized data object for a single letter.
 */
function createSecretData(char) {
  let assignedSize = random(14, 32);
  
  return {
    character: char,
    x: random(40, width - 40), 
    y: random(-200, -20),
    speed: random(0, 2),        
    size: assignedSize          
  };
}

/**
 * CHALLENGE REQUIREMENT 2: Functions with Parameters (Physics Engine)
 * Takes an object parameter and updates its velocity, position, and floor collision boundaries.
 */
function updateCharacterPhysics(obj) {
  let floorLimit = height - (obj.size / 2); // Calculate floor limit dynamically based on text size

  if (obj.y < floorLimit) {
    obj.speed += GRAVITY; // Gravity increases falling speed over time
    obj.y += obj.speed;   // Update position based on new speed
    
    // Boundary snap: if it overshoots the floor in a single frame, clamp it down
    if (obj.y >= floorLimit) {
      obj.y = floorLimit;
      obj.speed = 0;
    }
  } else {
    // Explicitly sit flat on the bottom if it already arrived
    obj.y = floorLimit;
    obj.speed = 0;
  }
}

/**
 * CHALLENGE REQUIREMENT 2 (Continued): Functions with Parameters (Rendering Engine)
 * Takes a specific object bundle and maps its data properties to visual p5 drawing variables.
 */
function drawCharacter(obj) {
  textSize(obj.size);
  fill(255, 255, 255);
  text(obj.character, obj.x, obj.y);
}
