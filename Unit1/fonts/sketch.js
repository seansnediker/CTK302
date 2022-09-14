let f1, f2, f3 ;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/BebasNeue-Regular.ttf") ;
  f2 = loadFont("assets/LEMONMILK-Regular.otf") ;
  f3 = loadFont("assets/Avocado=Days.ttf") ;
textAlign(CENTER);

}

function draw() {
  background("black");
  fill ("white") ;
  textFont(f1, 48);
  text("Hello there!", width/2, 100);
  textFont(f2, 24);
  text("I am Obiwan!", width/2, 200);
  textFont(f3, 48);
  text("Kenobi!", width/2, 300);
}
