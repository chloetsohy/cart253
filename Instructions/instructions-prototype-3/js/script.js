/**
 * Weird Prototype
 * Chloe Tso
 * 
 * This project displays a weird prototype.
 */


/**
 * This function sets up the canvas size.
*/
let bluex = 200;
let bluey = 200;
let blueSpeedX = 4;
let blueSpeedY = 3;
let blueradius = 25;


let redx = 200;
let redy = 200;
let redSpeedX = 8;
let redSpeedY = 4;
let redRadius = 25;


function setup() {
    createCanvas(400, 400);

}


/*
    * This function draws the canvas and the bouncing ellipses.
*/
function draw() {

    background(220);
    let stripeWidth = 15; // width of each stripe
    noStroke();

    // draw the stripes with alternating colors
    for (let x = 0; x < width; x += stripeWidth) {
        if (x % 10 == 0) {
            fill('#FAE6E7');
        } else {
            fill('lightyellow');
        }
        rect(x, 0, stripeWidth, height);
    }
    fill('blue');
    // draw the blue eclipse
    ellipse(bluex, bluey, blueradius * 2, blueradius * 2);

    //moves the eclipse
    bluex += blueSpeedX;
    bluey += blueSpeedY;

    // bounce off left or right walls
    if (bluex > width - blueradius || bluex < blueradius) {
        blueSpeedX *= -1;
    }

    // bounce off top or bottom walls
    if (bluey > height - blueradius || bluey < blueradius) {
        blueSpeedY *= -1;
    }


    // draw the red eclipse
    fill('red');
    ellipse(redx, redy, redRadius * 2, redRadius * 2);

    // 2. Move the ellipse
    redx += redSpeedX;

    // 3. Check for wall collisions (Bounce logic)
    if (redx + redRadius >= width || redx - redRadius <= 0) {
        redSpeedX *= -1; // Reverse the direction
    }
}
