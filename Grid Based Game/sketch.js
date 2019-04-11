// Grid Based Game
// Pouya, Jienan
// April 16, 2019
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let buttonText = ["Spasky", "Charter"];
let difficulty = ["Spasky", "Charter"];
let buttonAndTextPlacement = ["3", "6"];
let buttonX, buttonY, buttonWidth, buttonHeight;

let size;
let state = 1;
let startButtonX, startButtonY, startButtonWidth, startButtonHeight;

let clicked = false;


function setup() { 
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  textAlign(CENTER);
  
  //Assigning start menu button values
  startButtonX = width / 2;
  startButtonY = height / 2;
  startButtonWidth = 250;
  startButtonHeight = 125;
  
  //Introduction menu button placement/values
  buttonX = width / 2;
  buttonY = height /8;
  buttonWidth = width /2;
  buttonHeight = (height/2 - 10) / 2;
  size = (height / 2 - 10) / 4;
}



function draw() {
  if (state === 1) {
    loadStartScreen();
  }
  if (state === 2) {
    introductionMenu();
  }
  if (state === "Spasky") {
    easyGrid();
  }
  if (state === "Charter") {
    hardGrid();
  }
}

function loadStartScreen() {
  if (state === 1) {
    background("brown");
    fill("white");
    stroke("grey");
    rect(startButtonX, startButtonY, startButtonWidth, startButtonHeight);
    strokeWeight(3);
    stroke("black");
    text("Start", startButtonX, startButtonY);
    textSize(startButtonWidth / 5, startButtonHeight / 5);
    if (clickedOnStartButton() && clicked) {
      state = 2;
    }
  }
}

function mousePressed() {
  clicked = true;
  if (state === 2) {
    state = "";  
    for (let i = 0; i < buttonAndTextPlacement.length; i++){
      if (mouseX > buttonX - buttonWidth/2 & mouseX < buttonX + buttonWidth/2 & mouseY > buttonAndTextPlacement[i]* buttonY - buttonHeight/2 & mouseY < buttonAndTextPlacement[i]* buttonY + buttonHeight/2) {
        state = difficulty[i];
      }
    }
  }
}

function clickedOnStartButton() {
  return mouseX >= startButtonX - startButtonWidth / 2 &&
         mouseX <= startButtonX + startButtonWidth / 2 &&
         mouseY >= startButtonY - startButtonHeight / 2 &&
         mouseY <= startButtonY + startButtonHeight / 2;
}

function introductionMenu() {
  if (state === 2) {
    background("black");
    fill("white");
    stroke("red");
    strokeWeight(3);
    drawButtons();
  }
}

function drawButtons(){
  textSize(size);
  for (let i = 0; i < buttonAndTextPlacement.length; i++){
    rect(buttonX, buttonAndTextPlacement[i] * buttonY, buttonWidth, buttonHeight);
    text(buttonText[i], buttonX, buttonAndTextPlacement[i] * buttonY);
  }
}

function easyGrid() {
  background("beige");
}

function hardGrid() {
  background("yellow");
}

