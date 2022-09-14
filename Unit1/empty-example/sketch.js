function setup() {
  createCanvas(800, 500);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();
}

function draw() {
  background(100);

  if (mouseIsPressed) {
    fill("red");
    ellipse(274, 154, 200, 200);
       
  } else {
    // when the mouse isn't pressed!
    
    
    
    fill("white");
    ellipse(387, 365, 150, 150);
    ellipse(387, 275, 130, 130);
    ellipse(387, 185, 100, 100);
    
    fill("black");
    noStroke();
    ellipse(387, 365, 15, 15);
    ellipse(387, 275, 15, 15);
    ellipse(367, 175, 10, 10);
    ellipse(405, 175, 10, 10);
    rect(387, 145, 70, 10);
    rect(387,130, 50, 30);
    
    stroke(16);
    line(252, 223, 323, 263);
    line(452, 263, 522, 230);
    line(522, 230, 531, 215);
    line(522, 230, 536, 227);
    line(275, 235, 282, 224);
    line(260, 227, 242, 227);
    
    fill("orange");
    triangle(408, 189, 385, 179, 385, 191);
    
    fill("#484654");
    arc(385, 210, 30, 30, 0, PI + QUARTER_PI, CHORD);
    
    fill("white");
    rect(0, 500, 1600, 130);
  }

  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);
}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}
