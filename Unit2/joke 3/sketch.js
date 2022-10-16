let state = 0;
let i1, i2, i3 ;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  f1 = loadFont("assets/BebasNeue-Regular.ttf") ;
  f2 = loadFont("assets/LEMONMILK-Regular.otf") ;
  f3 = loadFont("assets/Avocado-Days.ttf") ;
  textAlign(CENTER);
  rectMode(CENTER);

}

function draw() {
  switch(state) {
    case 0:
      background("black");
      fill("white");
      textFont(f2, 108);
      text("What do you call a frenchman in sandals?", width/2, height/2, width/2, height/2);
      break;
  

    case 1:
      background("blue");
      textFont(f1, 108);
      text("Phillpe Floppe.", width/2, height/2, width/2, height/2);
      break;

  }

    rect(100, 100, 100, 100)
}

function mouseReleased() {
  if(mouseX > 100 &&  mouseX < 200 && mouseY > 100 && mouseY < 200) {
    state++ ;
    if (state > 1) state = 0;
  }
}
