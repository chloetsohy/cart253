/**
 * Weird Prototype
 * Chloe Tso
 * 
 * This project displays a weird prototype.
 */


/**
 * This function sets up the canvas size.
*/
function setup() {
    createCanvas(400, 400);
}


/**
 * This function identifies the background color and 
 * calls the functions to draw the shapes on the canvas.
*/
function draw() {
    background('pink');

    noStroke();

    drawLines();
    drawTriangles();
    drawShapes();
}

function drawLines() {
    fill('yellow');
    rect(0, 0, 400, 4);

    fill('yellow');
    rect(0, 396, 400, 4);

    fill('yellow');
    rect(0, 0, 4, 400);

    fill('yellow');
    rect(396, 0, 4, 400);


    fill('yellow');
    rect(25, 0, 4, 400);

    fill('yellow');
    rect(50, 0, 4, 400);

    fill('yellow');
    rect(75, 0, 4, 400);

    fill('yellow');
    rect(100, 0, 4, 400);

    fill('yellow');
    rect(125, 0, 4, 400);

    fill('yellow');
    rect(150, 0, 4, 400);

    fill('yellow');
    rect(175, 0, 4, 400);

    fill('yellow');
    rect(200, 0, 4, 400);

    fill('yellow');
    rect(225, 0, 4, 400);

    fill('yellow');
    rect(250, 0, 4, 400);

    fill('yellow');
    rect(275, 0, 4, 400);

    fill('yellow');
    rect(300, 0, 4, 400);

    fill('yellow');
    rect(325, 0, 4, 400);

    fill('yellow');
    rect(350, 0, 4, 400);

    fill('yellow');
    rect(375, 0, 4, 400);
}


function drawShapes() {
    fill('black');
    ellipse(50, 50, 50, 50);

    fill('black');
    ellipse(250, 50, 50, 50);

    fill('black');
    ellipse(150, 250, 50, 50);

    fill('black');
    ellipse(350, 250, 50, 50);


}


function drawTriangles() {
    fill('red');
    triangle(250, 50, 150, 250, 50, 50);

    fill('red');
    triangle(350, 250, 250, 500, 150, 250);

    fill('red');
    triangle(250, 50, 450, 50, 350, 250);
}