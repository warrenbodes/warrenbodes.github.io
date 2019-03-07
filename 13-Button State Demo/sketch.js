// Button State Demo
// Pouya Pourhaj
// March 7, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let state;
let buttonx, buttony, buttonWidth, buttonHeight;
let ballx, bally, ballRadius, dx, dy;

function setup() {
    createCanvas(windowWidth, windowHeight);
    state = "menu";
    buttonx = width / 2;
    buttony = height / 2;
    buttonWidth = 250;
    buttonHeight = 125;
    ballx = width / 2;
    bally = height / 2;
    ballRadius = 40;
    dx = random(3, 10);
    dy = random(3, 10);
}

function draw() {
    background(0);
    if (state === "menu") {
        displayMenu();
    }
    if (state === "ballbounce") {
        bounceTheBall();
    }
}

function bounceTheBall() {
    ballx += dx;
    bally += dy;
    if (ballx <= 0 + ballRadius || ballx >= width - ballRadius) {
        dx *= -1;
    }
    if (bally <= 0 + ballRadius || bally >= height - ballRadius)
}

fill(255);
ellipse(width / 2, height / 2, 50, 50);
}

function displayMenu() {
    rectMode(CENTER);
    rect(buttonx, buttony, buttonWidth, buttonHeight);
}

function mousePressed() {
    if (state === "menu") {
        if (clickedOnButton()) {
            state = "ballbounce";
        }
    }
}

function clickedOnButton(x, y) {
    return x >= buttonx - buttonWidth / 2 &&
        x <= buttonx + buttonWidth / 2 &&
        y >= buttony - buttonHeight / 2 &&
        y <= buttony + buttonHeight / 2;

}