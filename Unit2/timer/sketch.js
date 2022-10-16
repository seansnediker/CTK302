let state = 0;
let timer = 0;
let i1, i2, i3 ;


function setup() {
  createCanvas(400, 400);
  i1 = loadImage("imgs/ham.jpg") ;
  i2 = loadImage("imgs/5AM-PTSD.jpeg") ;
  i3 = loadImage("imgs/bruh.png") ;
imageMode(CENTER);

  f1 = loadFont("assets/BebasNeue-Regular.ttf") ;
  f2 = loadFont("assets/LEMONMILK-Regular.otf") ;
  f3 = loadFont("assets/Avocado-Days.ttf") ;
textAlign(CENTER);
}

function draw() {
  background(220);
  
  switch(state) {
    case 0:
    background("red");
    textFont(f1, 48);
    image(i1, width/2, height/2, 400, 400) ;
    text("Mrs. Softfingers", width/2, 100);


      
    timer++;
      if (timer > 3*60) {
        timer = 0;
        state = 1 ;
      }
    break ;
      
      case 1:
      background("blue");
      image(i2, width/2, height/2, 400, 400) ;
      textFont(f2, 48);
      text("I misplaced my spaghetti", width/2, 100, 0);

      
      timer++;
      if (timer > 5*60) {
        timer = 0;
        state = 2 ;
      }

      break ;
      
      case 2:
      background("green");
      image(i3, width/2, height/2, 400, 400) ;
      textFont(f3, 20)
      fill("white");
      text("This hangover is nothing compared to the sins crawling on my back. God forgive me", 200, 20, 0);
        
        timer++;
      if (timer > 7*60) {
        timer = 0;
        state = 0 ;

      break;
      
      
  } 
}

}