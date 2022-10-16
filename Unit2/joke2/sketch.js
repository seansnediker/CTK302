let state = 0;
let timer = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  f1 = loadFont("assets/BebasNeue-Regular.ttf") ;
  f2 = loadFont("assets/LEMONMILK-Regular.otf") ;
  f3 = loadFont("assets/Avocado-Days.ttf") ;
  textAlign(CENTER);
}

function draw() {
  
  switch(state) {
    case 0:
    background("red");
    textFont(f1, 108);
    text("A successful business fish...", width/2, height/2);


      
    timer++;
      if (timer > 6*60) {
        timer = 0;
        state = 1 ;
      }
    break ;
      
      case 1:
      background("orange");
      textFont(f2, 108);
      text("seals the deal!", width/2, height/2);

      
      timer++;
      if (timer > 4*60) {
        timer = 0;
        state = 0 ;
      }

      break ;  
  } 
}
