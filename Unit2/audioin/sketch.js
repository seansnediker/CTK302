var mic;
var vol = 0;

let i1, i2, i3 ;

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn(); // what does "new" mean?
  mic.start();

  i1 = loadImage("imgs/human.webp") ;
  i2 = loadImage("imgs/mayo.jpg") ;
  i3 = loadImage("imgs/feesh.jpg") ;
}

function draw() {
  background("#87CEEB");

  // get the sound input
  vol = mic.getLevel(); // returned level is between 0 and 1

  // text on the screen for debugging
  textSize(18);
  text(
    "Click the screen first to give\npermission for mic input.\nMy volume is " +
      vol.toFixed(2),
    10,
    60
  );

  // this moves the box
  //  x = vol*200 ;
  x = map(vol, 0, .5, 0, width);
  image(i2, x, 200, 200, 200 );
}

// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
