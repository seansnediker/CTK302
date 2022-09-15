let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(800, 600);
  fill(240);
  noStroke();
}

function draw() {
  background("#4a1021");
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  if (mouseIsPressed) {
    
    fill("brown");
    rect(82, 200, 50, 240);
    
    fill("green");
    triangle(30, 220, 103, 127, 185, 220);
    triangle(50, 165, 160, 165, 103, 100);
    triangle(66, 125, 140, 125, 103, 70);
    
    fill("brown");
    ellipse(76, 193, 10, 15);
    ellipse(121, 143, 10, 15);
    ellipse(135, 202, 10, 15);
    ellipse(99, 99, 10, 15);
    
    fill("white");
    ellipse(387, 365, 150, 150);
    ellipse(387, 275, 130, 130);
    ellipse(387, 185, 100, 100);

    fill("black");
    noStroke();
    ellipse(387, 365, 15, 15);
    ellipse(387, 275, 15, 15);
    ellipse(377, 175, 10, 10);
    ellipse(405, 175, 10, 10);
    rect(353, 135, 70, 10);
    rect(363, 110, 50, 30);

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
    rect(0, 440, 1600, 730);
  } else {
    // when the mouse isn't pressed!

    fill("#ECF48A");
    ellipse(701, 73, 100, 100);
    
    fill("#E8DA06");
    ellipse(725, 47, 10, 8);
    ellipse(670, 70, 8, 12);
    ellipse(713, 99, 15, 20);
    ellipse(683, 100, 8, 7);
    ellipse(700, 65, 8, 7);
    
    
    
    fill("brown");
    rect(82, 200, 50, 240);
    
    fill("green");
    triangle(30, 220, 103, 127, 185, 220);
    triangle(50, 165, 160, 165, 103, 100);
    triangle(66, 125, 140, 125, 103, 70);
    
    fill("brown");
    ellipse(76, 193, 10, 15);
    ellipse(121, 143, 10, 15);
    ellipse(135, 202, 10, 15);
    ellipse(99, 99, 10, 15);
    

    
    rect(width, height, 1, 2);

    fill("white");
    ellipse(387, 365, 150, 150);
    ellipse(387, 275, 130, 130);
    ellipse(387, 185, 100, 100);

    fill("black");
    noStroke();
    ellipse(387, 365, 15, 15);
    ellipse(387, 275, 15, 15);
    ellipse(377, 175, 10, 10);
    ellipse(405, 175, 10, 10);
    rect(353, 135, 70, 10);
    rect(363, 110, 50, 30);

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
    rect(0, 440, 1600, 730);
  }

  // this shows mouse location - comment it out when you're done!

  fill(0);
  text(mouseX + ", " + mouseY, 40, 40);
}

// record the mouse location in console when clicked
function mouseReleased() {
  print(mouseX + ", " + mouseY);
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(10, 15);
  this.opacity = random(50, 100);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function (time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function () {
    if (mouseIsPressed) {
      fill(255, 0, 0, this.opacity);
      ellipse(this.posX, this.posY, this.size+5);
    } else {
      fill(255, 255, 255, this.opacity);
      ellipse(this.posX, this.posY, this.size+5);
    }
  };
}
