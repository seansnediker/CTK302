var k;
var g;
var b;
var a;

let angle = 0;

let state = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  frameRate(60);

  x = 0;
  y = 0;
  speedX = 1;
  speedY = 1;
}

function draw() {
  background("red");

  k = random(255); // r is a random number between 0 - 255
  g = random(100, 200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200, 255); // a is a random number between 200 - 255

  switch (state) {
    case 0:
      background("black");
      for (let j = 0; j <= innerHeight; j += 25) {
        for (let i = 0; i <= width; i += 25) {
          fill(k, g, b);
          rect(i, j, 20, 20);
          fill(k, b, a);
          rect(i, j, 10, 10);
        }
      }

      break;

    case 1:
      background("blue");
      // text("case 1", 100, 100);

      for (let j = 0; j <= innerHeight; j += 25) {
        for (let i = 0; i <= width; i += 20) {
          fill("gold");
          ellipse(i, j, 15, 20);
          fill("#3F51B5");
          ellipse(i, j, 5, 5);
        }
      }
      break;

    case 2:
      background("#673AB7");
      // text("case 2", 100, 100);
      for (let j = 0; j <= innerHeight; j += 25) {
        for (let i = 0; i <= width; i += 25) {
          fill("#F44336");
          translate(width / 2, height / 2);
          translate(p5.Vector.fromAngle(millis() / 100, 420));
          ellipse(i + 20, j, 100, 50);
          rotate(PI / 5);
          fill("#03A9F4");
          ellipse(i + 20, j, 200, 200);
        }
      }
      break;

    case 3:
      push();
      background(0);
      for (let i = 50; i < mouseX; i += 50) {
        for (let j = 50; j < mouseY; j += 50) {
          noFill();
          stroke(mouseX - i, i, mouseY - j);
          strokeWeight(3);

          let d = dist(mouseX, mouseY, i + width / 2, j + height / 2);

          let r = d / 5;
          push();
          translate(i, j);
          rotate(-angle);
          rect(0, 0, r, r);
          pop();

          push();
          translate(i, j);
          rotate(angle);
          rect(0, 0, r, r);
          pop();

          angle += 0.0003;
          pop();
        }
      }
      break;

    case 4:
      background("#00BCD4");
      fill(r, g, b, a);
      var r = 2;
      fill(k, g, b);
      for (var j = 50; j < 500; j = j + 100) {
        for (var i = 50; i < 500; i = i + 100) {
          for (var w = 100; w > 0; w = w - r) {
            r = random(50, 20);
            fill(k, g, b, a);
            rect(i, j, w, w);
          }
        }
      }
      break;
  }
}

function mouseReleased() {
  state++;
  if (state > 4) {
    state = 0;
  }
}
