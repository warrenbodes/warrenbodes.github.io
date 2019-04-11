// Grid Based Game
// Pouya Pourhaj, Jienan Chen
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

let gridSize = 3;
let grid;
let cellSize;
let autoPlay;

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
    displayEasyGrid();
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
  grid = createRandom2DArray(gridSize, gridSize);
  cellSize = width/gridSize;
}

function hardGrid() {
  background("yellow");
}

function displayEasyGrid() {
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {      
      
      if (grid[y][x] === 0) {
        fill(255);
      }
      else{
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2DArray(cols, rows) {
  let emptyArray = [];
  let options = [[1,0,0],[0,1,0], [0,0,1]];
  let choice = random(options);
  let choice2 = random(options);
  let choice3 = random(options);
  for (let i = 0; i < rows; i++) {
    emptyArray.push([]);
    for (let j = 0; j < cols ; j++) {
      emptyArray[i].push(choice[i]);
      emptyArray[i].push(choice2[i]);
      emptyArray[i].push(choice3[i]);
    }
  }
  return emptyArray;
}