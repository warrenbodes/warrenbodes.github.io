// Translating and Rotating Demo


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  translate(500, 450);
  fill("red");
  stroke("black");
  rect(0, 0, 75, 75);
  ellipse(width / 2, height / 2, width * 0.9, height * 0.2);
}

