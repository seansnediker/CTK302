// from https://creative-coding.decontextualize.com/video/

var k;
var g;
var b;
var a;
var cap;
function setup() {
  createCanvas(1080, 720);
  cap = createCapture(VIDEO);
  cap.hide();
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke();
}
function draw() {
  background("black");
  r = (255); // r is a random number between 0 - 255
  g = (200); // g is a random number betwen 100 - 200
  b = (100); // b is a random number between 0 - 100
  cap.loadPixels();
  
  for (var cy = 0; cy < cap.height; cy += 4) {
    for (var cx = 0; cx < cap.width; cx += 3) {
      var offset = ((cy*cap.width)+cx)*4;
      var xpos = (cx / cap.width) * width;
      var ypos = (cy / cap.height) * height;
      fill(r, g, b);
      ellipse(xpos, ypos, 5,
       5 * (cap.pixels[offset+200]/455));
      
      
    }
  }
  
  

 // image(cap, mouseX, mouseY, 160, 120);
  
}
