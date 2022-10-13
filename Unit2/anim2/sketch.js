let x = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  
  push();
 translate(x, 0);
  avatar() ;

  x+=5;
  if (x > width) {
    x = -300;
  }
  pop();

}

function avatar () {

  background("#4a1021");

  fill("white");
  ellipse(387, 335, 150, 150);
  ellipse(387, 245, 130, 130);
  ellipse(387, 155, 100, 100);

  fill("black");
  noStroke();
  ellipse(387, 335, 15, 15);
  ellipse(387, 245, 15, 15);
  ellipse(377, 145, 10, 10);
  ellipse(405, 145, 10, 10);
  rect(353, 105, 70, 10);
  rect(363, 80, 50, 30);

  stroke(16);
  line(448, 223, 534, 180);
  line(452, 263, 522, 230);
  line(522, 230, 531, 215);
  line(522, 230, 536, 227);
  line(534, 180, 533, 167);
  line(534, 180, 543, 172);

  fill("orange");
  triangle(408, 159, 385, 149, 385, 161);

  fill("#484654");
  stroke(16);
  line(374, 175, 393, 180);
  line(360, 125, 375, 136);
  line(405, 135, 418, 123);

  stroke(16);
  line(329, 383, 300, 450);
  line(450, 380, 475, 450);
}

