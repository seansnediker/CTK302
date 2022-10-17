let state = -1;
let timer = 0;
let i1, i2, i3, i4, i5, i6, i7, i8, i9 ;
let s1;
let f1;

function preload() {

  s1 = loadSound("assets/bonus.mp3") ;
}

function setup() {
  createCanvas(400, 400);
  i1 = loadImage("imgs/1st.jpg") ;
  i2 = loadImage("imgs/2st.jpg") ;
  i3 = loadImage("imgs/3rd.jpg") ;
  i4 = loadImage("imgs/4th.jpg") ;
  i5 = loadImage("imgs/5th.jpg") ;
  i6 = loadImage("imgs/6th.jpg") ;
  i7 = loadImage("imgs/7th.jpg") ;
  i8 = loadImage("imgs/8th.jpg") ;
  i9 = loadImage("imgs/9th.jpg") ;
imageMode(CENTER);

  f1 = loadFont("assets/BebasNeue-Regular.ttf") ;
textAlign(CENTER);

  s1 = loadSound("assets/bonus.mp3");
}

function draw() {
  background(220);
  
  switch(state) {

    case -1:
      background("blue");
      textFont(f1, 38);
      text("Click to see some goofy fellas", width/2, height/2);
      break;

    case 0:
    image(i1, width/2, height/2, 400, 400) ;
    if (!s1.isPlaying()) {
      s1.play();
    }
      
    timer++;
      if (timer > 3*60) {
        timer = 0;
        state = 1 ;
      }
    break ;
      
      case 1:
      image(i2, width/2, height/2, 400, 400) ;

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

function mouseReleased() {
  if(state <= -1)
  {
    state++;
  }
}

function touchStarted() {
  getAudioContext().resume();
}