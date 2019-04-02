// State Variables
// Pouya Pourhaj
// April 2, 2019
// 
// Extra for Experts:
// For this project, I have made a bouncing ball where you have to avoid in order to win the game with different difficulties for my extra for experts.


let size;
let buttonText = ["Easy", "Medium", "Hard", "Impossible"];
let textPlacement = ["1", "3", "5", "7"];
let reaper;
let godOfWar;  
let assasin;
let witcher;
let reaperMusic;
let heroicMusic;
let moreMusic;
let witcherMusic;
let reaperBack;
let godBack;
let assaBack;
let witchBack;
let musicScalar;
let whichImage;
let whichBackground;
let x = 300;
let y = 300;
let by;
let bx;
let state = 1;
let mainButtonX, mainButtonY, mainButtonWidth, mainButtonHeight;
let sideButtonX, sideButtonY, sideButtonWidth, sideButtonHeight;
let enemyX, enemyY, enemyRadius, ex, ey;
let clicked = false;

//loading Images and Music
function preload() {
  assasin = loadImage("assets/580b57fcd9996e24bc43c28a.png");
  reaper = loadImage("assets/12-125664_download-grim-reaper-logo-png-clipart-death-clip.png.jpg");
  godOfWar = loadImage("assets/god-of-war-png-god-of-war-clipart-png-image-200.png");
  witcher = loadImage("assets/geralt.png");
  reaperMusic = loadSound("assets/Witcher 3 - Skellige Combat Song (ReworkRemaster) (Percival - Jomsborg).mp3");
  heroicMusic = loadSound("assets/Twelve Titans Music - Bound by Purpose [Epic Music - Powerful Heroic Orchestral].mp3");
  moreMusic = loadSound("assets/Zack Hemsey - See what Ive become.mp3");
  witcherMusic = loadSound("assets/The Witcher 3 Wild Hunt OST - Sword of Destiny - Main Theme.mp3");
  reaperBack = loadImage("assets/732521.png");
  godBack = loadImage("assets/God-of-War-Chains-of-Olympus-god-of-war-35226348-480-272.png");
  assaBack = loadImage("assets/ac_origins_anubis_big.png");
  witchBack = loadImage("assets/wp1854907.png");
}

//Setup of everything
function setup() {
  createCanvas(windowWidth, windowHeight);
  size = (width/4 - 10)/4;
  mainButtonX = width / 2;
  mainButtonY = height / 2;
  mainButtonWidth = 250;
  mainButtonHeight = 125;
  
  sideButtonX = width / 2;
  sideButtonY = height / 8;
  sideButtonWidth = width/ 2;
  sideButtonHeight = height /4 - 10;
  
  enemyX = width / 2;
  enemyY = height / 2;
  enemyRadius = 40;
  
  ex = random(3, 10);
  ey = random(3, 10);
  bx = width / 2;
  by = height / 2;
  
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  musicScalar = 0.7;
  reaperMusic.setVolume(musicScalar);
  heroicMusic.setVolume(musicScalar);
  moreMusic.setVolume(musicScalar);
  witcherMusic.setVolume(musicScalar);
  whichImage = "";
  whichBackground = "";
}


//Different States
function draw() {
 if(state === 1){
	loadStartScreen();
   
 }
 if(state === 2){
    drawDifficultyButtons();

  }
 if(state === "Easy"){
    difficultyEasy();

  }
 if(state === "Medium"){
    difficultyMedium();

  }
 if(state === "Hard"){
    difficultyHard();

  }
 if(state === "Impossible") {
    difficultyImpossible();
  }
  
  moving();
  
  if (whichImage === "assasin") {
    image(assaBack, bx, by, windowWidth, windowHeight);
    image(assasin, x, y, assasin.width * 0.8, assasin.height * 0.8);
  }
  else if (whichImage === "godOfWar") {
    image(godBack, bx, by, windowWidth, windowHeight);
    image(godOfWar, x, y);
  }
  else if (whichImage === "witcher") {
    image(witchBack, bx, by, windowWidth, windowHeight);
    image(witcher, x, y, witcher.width * 0.6, witcher.height * 0.6);
  }
  else if (whichImage === "reaper") {
    image(reaperBack, bx, by, windowWidth, windowHeight);
    image(reaper, x, y, reaper.width * 0.1, reaper.height * 0.1);
  }
  gameOver();
}

//Drawing the difficulty menu
function drawDifficultyButtons() {
  background("red");
  textSize(size);
  strokeWeight(3);
  stroke(0);
  fill("white");
  for (let i = 0; i < textPlacement.length; i++){
    rect(sideButtonX, textPlacement[i] * sideButtonY, sideButtonWidth, sideButtonHeight);
    text(buttonText[i], sideButtonX, textPlacement[i] * sideButtonY);
  }
}


//Start Screen Menu
function loadStartScreen() { //check to see if start button is clicked
  if (state === 1) {
    background("red");
    rectMode(CENTER);
    textAlign(CENTER);
    fill(255);
    stroke(0);
    rect(mainButtonX, mainButtonY, mainButtonWidth, mainButtonHeight);
    strokeWeight(3);
    stroke(0);
    text("Start", mainButtonX, mainButtonY);
    if (clickedOnMainButton() && clicked) {
      state = 2;
    }
  }
}

function mousePressed(){
  clicked = true;
  for (let i = 0; i < textPlacement.length; i++) {
    if (state === 2 & mouseX > sideButtonX - sideButtonWidth / 2 & mouseX < sideButtonX + sideButtonWidth / 2 & mouseY > textPlacement[i] * sideButtonY - sideButtonHeight / 2 & mouseY < textPlacement[i] * sideButtonY + sideButtonHeight / 2)
      state = buttonText[i];
  }
}

//Clicking on Start Screen Menu
function clickedOnMainButton() {
  return mouseX >= mainButtonX - mainButtonWidth / 2 &&
         mouseX <= mainButtonX + mainButtonWidth / 2 &&
         mouseY >= mainButtonY - mainButtonHeight / 2 &&
         mouseY <= mainButtonY + mainButtonHeight / 2;
}

function startTheEnemyEasy () {
  enemyX += ex;
  enemyY += ey;
  if (enemyY <= 0 + enemyRadius || enemyY >= height - enemyRadius) {
    ey *= -1;
  }
  if (enemyX <= 0 + enemyRadius || enemyX >= width - enemyRadius) {
    ex *= -1;
  }
  fill("red");
  ellipse(enemyX, enemyY, enemyRadius * 2, enemyRadius * 2);
}

function startTheEnemyMedium () {
  enemyX += ex;
  enemyY += ey;
  if (enemyY <= 0 + enemyRadius || enemyY >= height - enemyRadius) {
    ey *= -3;
  }
  if (enemyX <= 0 + enemyRadius || enemyY >= width - enemyRadius) {
    ex *= -3;
  }
  fill("red");
  ellipse(enemyX, enemyY, enemyRadius * 3, enemyRadius * 3);
}

function startTheEnemyHard() {
  enemyX += ex;
  enemyY += ey;
  if (enemyY <= 0 + enemyRadius || enemyY >= height - enemyRadius) {
    ey *= -7;
  }
  if (enemyX <= 0 + enemyRadius || enemyY >= width - enemyRadius) {
    ex *= -7;
  }
  fill("red");
  ellipse(enemyX, enemyY, enemyRadius * 5, enemyRadius * 5);
}

function startTheEnemyImpossible() {
  enemyX += ex;
  enemyY += ey;
  if (enemyY <= 0 + enemyRadius || enemyY >= height - enemyRadius) {
    ey *= -10;
  }
  if (enemyX <= 0 + enemyRadius || enemyX >= width - enemyRadius) {
    ex *= -10;
  }
  fill("red");
  ellipse(enemyX, enemyY, enemyRadius * 7, enemyRadius * 7);
}

//Volume control with mouse wheel
function mouseWheel(event) {
  if (event.delta > 0) {
    musicScalar *= 1.1;
  }
  else {
    musicScalar *= 0.9;
  }
  musicScalar = constrain(musicScalar, 0.1, 5);
  heroicMusic.setVolume(musicScalar);
  moreMusic.setVolume(musicScalar);
  witcherMusic.setVolume(musicScalar);
  reaperMusic.setVolume(musicScalar);
}

//Restarting the game
function keyPressed() {
  if (key === "r") {
 	heroicMusic.stop();
    witcherMusic.stop();
    moreMusic.stop();
    reaperMusic.stop();
    state = 1;
    loadStartScreen();
  }
}

//Moving with character
function moving() {
  if (keyIsDown(LEFT_ARROW) && x >= 0) {
    x -= 12;
  }

  if (keyIsDown(RIGHT_ARROW) && x <= windowWidth) {
    x += 12;
  }

  if (keyIsDown(UP_ARROW) && y >= 0) {
    y -= 12;
  }

  if (keyIsDown(DOWN_ARROW) && y <= windowHeight) {
    y += 12;
  }
}

//Easy difficulty
function difficultyEasy() {
  whichImage = "assasin";
  whichBackground = "assaBack";
  heroicMusic.loop();
  heroicMusic.setVolume(musicScalar);
  reaperMusic.stop();
  moreMusic.stop();
  witcherMusic.stop();
  startTheEnemyEasy();
}

//Medium difficulty
function difficultyMedium() {
  whichImage = "godOfWar";
  whichBackground = "godBack";
  moreMusic.loop();
  moreMusic.setVolume(musicScalar);
  reaperMusic.stop();
  heroicMusic.stop();
  witcherMusic.stop();
  startTheEnemyMedium();
}

//Hard difficulty
function difficultyHard() {
  whichImage = "witcher";
  whichBackground = "witchBack";
  witcherMusic.loop();
  witcherMusic.setVolume(musicScalar);
  reaperMusic.stop();
  heroicMusic.stop();
  moreMusic.stop();
  startTheEnemyHard();

}

//Impossible difficulty
function difficultyImpossible() {
  whichImage = "reaper";
  whichBackground = "reaperBack";
  reaperMusic.loop();
  reaperMusic.setVolume(musicScalar);
  heroicMusic.stop();
  moreMusic.stop();
  witcherMusic.stop();
  startTheEnemyImpossible();
}

//When you have died
function gameOver() {
  if (enemyX === x && enemyY === y) {
    state = 1;
    loadStartScreen();
  }
}

