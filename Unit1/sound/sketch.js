let cbat;

function preload() {
  cbat = loadSound("assets/cbat.mp3");
}

function setup() {
  createCanvas(500, 500);
  s1 = loadSound("assets/cbat.mp3");
}

function draw() {
  background("black");
}

function mouseReleased() {
  if (cbat.isPlaying()) {
    cbat.pause();
  } else {
    cbat.play();
  }
}


function touchStarted() {
  getAudioContext().resume();
}