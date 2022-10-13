let state = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('red');  
  
  }

  switch (state) {
    case 0:
      background("red");
      text("case 0", 100, 100);
      
      fill('white');
  for (let j = 0; j <= height; j += 25) {
    for (let i = 0; i <= width; i += 25) {
      rect(i, j, 20, 20);
    }
  }
      break;
      
      

    case 1:
      background("blue");
      text("case 1", 100, 100);
      break;

    case 2:
      background("green");
      text("case 2", 100, 100);
      break;
      
      case 3:
      background("yellow");
      text("case 3", 100, 100);
      break;
      
      case 4:
      background("orange");
      text("case 4", 100, 100);
      break;
  }

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
