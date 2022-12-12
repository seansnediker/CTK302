var r;
var g;
var b;
var a;
var cap;

function setup() {
  // Use the windowWidth and windowHeight variables as the width and height of the canvas
  createCanvas(windowWidth, windowHeight);
  cap = createCapture(VIDEO);
  cap.hide();
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke();
}

function draw() {
  // Set the background to white
  background(255);

  // Draw the video capture as the background
  image(cap, windowWidth, windowHeight, windowWidth, windowHeight);

  // Set the fill color to white
  fill(255);

  cap.loadPixels();

  for (var cy = 0; cy < cap.height; cy += 2) {
    for (var cx = 0; cx < cap.width; cx += 2) {
      var offset = ((cy*cap.width)+cx)*2;
      var xpos = (cx / cap.width) * width;
      var ypos = (cy / cap.height) * height;
      
      // Draw the ellipse with the white fill color
      ellipse(xpos, ypos, 5, 5 * (cap.pixels[offset+200]/255));
    }
  }
    
  

 // image(cap, mouseX, mouseY, 160, 120);
  

}
