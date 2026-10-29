/**
 * Tomodachi
 * Chloe Tso
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let pet = {
    hunger: 100,
    happiness: 100,
    energy: 100
};


const BAR_MAXWIDTH = 250;
const BAR_MAXHEIGHT = 28;

let hungerImgs = [];
let sleepImgs = [];
let happinessImgs = [];



async function preload() {

 let loadedAssets = await Promise.all([
    loadImage('./assets/images/hunger1.png'),
    loadImage('./assets/images/hunger2.png'),
    loadImage('./assets/images/hunger3.png'),
    loadImage('./assets/images/sleep1.png'),
    loadImage('./assets/images/sleep2.png'),
    loadImage('./assets/images/sleep3.png'),
    loadImage('./assets/images/happiness1.png'),
    loadImage('./assets/images/happiness2.png'),
    loadImage('./assets/images/happiness3.png')
  ]);


  hungerImgs = [loadedAssets[0], loadedAssets[1], loadedAssets[2]];
  sleepImgs = [loadedAssets[3], loadedAssets[4], loadedAssets[5]];
  happinessImgs = [loadedAssets[6], loadedAssets[7], loadedAssets[8]];

}

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
  createCanvas(800,800);
  
// pixel art hence no need to smooth
  noSmooth(); 
}

function draw() {

}