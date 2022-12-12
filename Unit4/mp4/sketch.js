var r;
var g;
var b;
var a;
var cap;
function setup() {
  createCanvas(windowWidth, windowHeight);
  cap = createCapture(VIDEO);
  cap.hide();
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke();
}
function draw() {
  background("black");
  
  cap.loadPixels();
  
  for (var cy = 0; cy < cap.height; cy += 3) {
    for (var cx = 0; cx < cap.width; cx += 2) {
      var offset = ((cy*cap.width)+cx)*4;
      var xpos = (cx / cap.width) * width;
      var ypos = (cy / cap.height) * height;
      
      // Generate random colors for each ellipse
      var r = random(100, 255);
      var g = random(100, 200);
      var b = random(0, 100);
      
      fill(r, g, b);
      ellipse(xpos, ypos, 4,
       3 * (cap.pixels[offset+200]/100));
      
      
    }
  }
  
  

 // image(cap, mouseX, mouseY, 160, 120);
  
}
