let cars = [];
let frogPos;
let state = 0;
let timer = 0;
let fail, honey, menu, nectars, play, win ;
let types = [];
let s ;
let numCars = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);

  fail = loadImage("assets/fail.png") ;
  honey = loadImage("assets/honey.png") ;
  menu = loadImage("assets/menu.png") ;
  nectars = loadImage("assets/nectars.png") ;
  play = loadImage("assets/play.png") ;
  s = loadImage("assets/spong.png") ;
  win = loadImage("assets/win.png") ;

  types = [nectars, honey];


  // Spawn objects

  for (let i = 0; i < numCars; i++) {
    cars.push(new Car());
  }

  // initialize the "frog position" vector
  frogPos = createVector(width / 2, height - 80);
}

function draw() {
  switch (state) {
    case 0: // menu screen
      background(100);
      image(menu, width/2, height/2, windowWidth, windowHeight);
      //text("click to start", width / 2, height / 2);
      break;

    case 1: // game screen
      game();
      timer++;
      if (timer > 20 * 60) {
        timer = 0;
        state = 3;
      }
      break;

    case 2: // win screen
      background(100);
      image(win, width/2, height/2, windowWidth, windowHeight);
      fill("white");
      text("you won!", width / 2, height / 2);

      break;

    case 3: // lose screen
      background(100);
      image(fail, width/2, height/2, windowWidth, windowHeight);
      fill("white");
      text("you lost!", width / 2, height / 2);

      break;
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1; // go to game
      break;

    case 2: // win state
      numCars=numCars + 10
      resetTheGame();
      state = 0;
      break;

    case 3: // lose state
      numCars=numCars + 50
      resetTheGame();
      state = 0;
      break;
  }
}

function game() {
  background("white");
  image(play, width/2, height/2, windowWidth, windowHeight);

  // operate on every car
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();

    // collision detection
    if (cars[i].pos.dist(frogPos) < 30) {
      cars.splice(i, 1);
    }
  }

  if (cars.length <= 0) {
    timer = 0;
    state = 2;
  }

  // add a "frog"
  image(s, frogPos.x, frogPos.y, 100, 70);
  checkForKeys();
}

function resetTheGame() {
  cars = [];
  timer = 0;
  for (let i = 0; i < numCars; i++) {
    cars.push(new Car());
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
}

function spong() {
  stroke(1);
  fill('gray');
  ellipse(frogPos.x, frogPos.y, 50, 40);
  fill('lightblue');
  ellipse(frogPos.x, frogPos.y, 30, 30);
}

class Car {
  // constructor and attributes
  constructor() {
    this.pos = createVector(random(width), 100); // initialize your attributes here
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.size = random(48, 128);
    this.type = int(random(types.length));
  }

  // methods

  display() {
    // this can be text, images, or shapes
    // fill(this.r, this.g, this.b, this.o);
    // rect(this.pos.x, this.pos.y, this.size, 25);
     //image(this.img, this.pos.x, this.pos.y, 50, 50) ;
     image(types[this.type], this.pos.x, this.pos.y, 50, 50) ;
  }

  move() {
    this.pos.add(this.velocity);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}
