let cars = [] ;
let i1 ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  i1 = loadImage("assets/skink.jpg") ;
  imageMode(CENTER);


  // for (let i = 0; i <20 ; i++){
  //   cars.push(new Car()) ;
  // }
  noStroke() ;
}

function draw() {
  background("grey");
  image(i1, width / 2, height / 2, windowWidth, windowHeight) ;
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++){
  cars[i].display() ;
  cars[i].move();
  if (cars[i].a <= 0) {
    cars.splice(i, 1)
  }
  }
}


class Car {

  // constructor
  constructor() {
    this.pos = createVector(0, 0) ;  // initialize your attributes here
    this.vel = createVector(random(10), random(10)) ;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(200, 255);
    this.s = random (10, 6);


    
  }

  // methods

  display() {
    fill(this.r, this.g, this.g, this.a);
    textSize(random(10, 200));
    text("no more ram", this.pos.x, this.pos.y);
  }

 move(){
  this.pos.add(this.vel) ;
  this.a = this.a -1 ;
  // if (this.pos.x > width) this.pos.x = 0;
  // if (this.pos.x < 0) this.pos.y = width;
  // if (this.pos.y > height) this.pos.y = 0;
  // if (this.pos.y < 0) this.pos.y = height;
 }
  
}