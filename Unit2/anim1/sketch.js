let x = 0;
let f1

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/BebasNeue-Regular.ttf") ;
}

function draw() {
  background(0, 255, 0);
  textFont(f1, 125)
  fill("blue");
  text ("Iridocyclitis", x, 200);
  x -= 3;
  if (x < -500) {
    x = 500;
  }
}
