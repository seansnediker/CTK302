let state = -1;
let s1, s2, s3;
let i1, i2, i3 ;

function preload() {

  s1 = loadSound("assets/save.mp3") ;
  s2 = loadSound("assets/preview.ogg") ;
  s3 = loadSound("assets/fisherman.mp3") ;
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  i1 = loadImage("imgs/human.webp") ;
  i2 = loadImage("imgs/mayo.jpg") ;
  i3 = loadImage("imgs/feesh.jpg") ;

  f1 = loadFont("assets/BebasNeue-Regular.ttf") ;
  f2 = loadFont("assets/LEMONMILK-Regular.otf") ;
  f3 = loadFont("assets/Avocado-Days.ttf") ;
textAlign(CENTER);
imageMode(CENTER);
}

function draw() {

  background(100);
  
  switch (state) {
    case -1: 
    background("magenta");
    textFont(f1, 108);
    text("please click to start", width/2, height/2);
    break;

    case 0:
      image(i1, width/2, height/2, window.innerWidth, window.innerHeight);
      textFont(f1, 50);
      fill("red");
      stroke("3");
      text("The sorrows of yesterday creep into tomorrow", width/2, height/2);
      if (!s1.isPlaying()) {
        s1.play();
      }
      break;

    case 1:
      image(i2, width/2, height/2, window.innerWidth, window.innerHeight);
      textFont(f1, 100);
      fill("black");
      text("Oh god. He's escaped!", width/2, 100);
      if (!s2.isPlaying()) {
        s2.play();
      }
      break;

    case 2:
      image(i3, width/2, height/2, window.innerWidth, window.innerHeight);
      textFont(f1, 108)
      fill("blue");
      text("3 simple tricks to be rich and make her yours", width/2, height/2);
      if (!s3.isPlaying()) {
        s3.play();
      }
      break;

  }
}

function mouseReleased() {
  s1.stop() ;
  s2.stop() ;
  s3.stop() ;
  state++;
  if (state > 2) state = 0;
}

function touchStarted() {
  getAudioContext().resume();
}