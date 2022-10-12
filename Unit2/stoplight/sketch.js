function setup() {
  createCanvas(500, 500);
  elipseMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  
    background(100);
  fill('yellow');
  rect (width/2, height/2, 200, 700)
  
  switch (state) {

    case 0:
      text("0", 100, 100);
      break;

    case 1:
      text("1", 100, 100);
      break;

    case 2:
      text("2", 100, 100);
      break;

  }
}

function mouseReleased() {
  state++;
  if (state > 2) state = 0;

}
