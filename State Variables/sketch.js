// State Variables
// Pouya Pourhaj
// March 11, 2019
// This project is just a scene where you could move around with the arrow keys with three different characters by clicking a, g, or w.  Each character has their own music and background.
// Extra for Experts:
// - For this project I have made it so that there are 3 different types of music playing depending on the option you have chosen.  You can also control the volume of the music with the mouse wheel.


let godOfWar;
let assasin;
let witcher;
let heroicMusic;
let moreMusic;
let witcherMusic;
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
let state;
let difficulty;

//loading Images and Music
function preload() {
    assasin = loadImage("assets/580b57fcd9996e24bc43c28a.png");
    godOfWar = loadImage("assets/god-of-war-png-god-of-war-clipart-png-image-200.png");
    witcher = loadImage("assets/geralt.png");
    heroicMusic = loadSound("assets/Twelve Titans Music - Bound by Purpose [Epic Music - Powerful Heroic Orchestral].mp3");
    moreMusic = loadSound("assets/Zack Hemsey - See what Ive become.mp3");
    witcherMusic = loadSound("assets/The Witcher 3 Wild Hunt OST - Sword of Destiny - Main Theme.mp3");
    godBack = loadImage("assets/God-of-War-Chains-of-Olympus-god-of-war-35226348-480-272.png");
    assaBack = loadImage("assets/ac_origins_anubis_big.png");
    witchBack = loadImage("assets/wp1854907.png");
}

//Setup of everything
function setup() {
    createCanvas(windowWidth, windowHeight);
    bx = width / 2;
    by = height / 2;
    imageMode(CENTER);
    musicScalar = 0.7;
    heroicMusic.setVolume(musicScalar);
    moreMusic.setVolume(musicScalar);
    witcherMusic.setVolume(musicScalar);
    whichImage = "";
    whichBackground = "";
    state = 1;
    difficulty = "Easy";
}

//Background and Images
function draw() {
    moving();
    clear();
    background("red");
    if (whichImage === "assasin") {
        image(assaBack, bx, by, windowWidth, windowHeight);
        image(assasin, x, y, assasin.width * 0.7, assasin.height * 0.7);
    } else if (whichImage === "godOfWar") {
        image(godBack, bx, by, windowWidth, windowHeight);
        image(godOfWar, x, y);
    } else if (whichImage === "witcher") {
        image(witchBack, bx, by, windowWidth, windowHeight);
        image(witcher, x, y, witcher.width * 0.3, witcher.height * 0.3);
    }
}


//Volume control with mouse wheel
function mouseWheel(event) {
    if (event.delta > 0) {
        musicScalar *= 1.1;
    } else {
        musicScalar *= 0.9;
    }
    musicScalar = constrain(musicScalar, 0.1, 3);
    heroicMusic.setVolume(musicScalar);
    moreMusic.setVolume(musicScalar);
    witcherMusic.setVolume(musicScalar);
}

//Start Screen Menu
function loadStartScreen() {
    if
}

//Switching characters
function keyPressed() {
    if (key === "a") {
        whichImage = "assasin";
        whichBackground = "assaBack";
        heroicMusic.play();
        heroicMusic.setVolume(musicScalar);
        moreMusic.stop();
        witcherMusic.stop();
    } else if (key === "g") {
        whichImage = "godOfWar";
        whichBackground = "godBack";
        moreMusic.play();
        moreMusic.setVolume(musicScalar);
        heroicMusic.stop();
        witcherMusic.stop();
    } else if (key === "w") {
        whichImage = "witcher";
        whichBackground = "witchBack";
        witcherMusic.play();
        witcherMusic.setVolume(musicScalar);
        heroicMusic.stop();
        moreMusic.stop();
    } else if (key === "s") {
        heroicMusic.stop();
        moreMusic.stop();
        witcherMusic.stop();
    }
}

//Moving with character
function moving() {
    if (keyIsDown(LEFT_ARROW) && x >= 0) {
        x -= 7;
    }

    if (keyIsDown(RIGHT_ARROW) && x <= windowWidth) {
        x += 7;
    }

    if (keyIsDown(UP_ARROW) && y >= 0) {
        y -= 7;
    }

    if (keyIsDown(DOWN_ARROW) && y <= windowHeight) {
        y += 7;
    }
}

function choosingSetting() {
    if (state === 1) {
        loadStartScreen();
    } else if (state === 2) {
        chooseAssasin();
    } else if (state === 3) {
        chooseGod();
    } else if (state === 4) {
        chooseWitcher();
    }
}