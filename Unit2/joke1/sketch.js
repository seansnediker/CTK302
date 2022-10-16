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
      text("R.I.P boiled water", width/2, height/2);
      break;
  

    case 1:
      background("blue");
      textFont(f1, 108);
      text("You will be mist", width/2, height/2);
      break;

  }
}

function mouseReleased() {
  state++ ;
  if (state > 1) state = 0;
}