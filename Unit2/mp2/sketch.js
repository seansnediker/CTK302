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
  i2 = loadImage("imgs/2nd.jpg") ;
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
  
    break ;
      
      case 1:
        image(i2, width/2, height/2, 400, 400) ;

      break ;
      
      case 2:
      background("green");
      image(i3, width/2, height/2, 400, 400) ;

      break;

      case 3:
      background("green");
      image(i4, width/2, height/2, 400, 400) ;
       
      break;

      case 4:
      background("green");
      image(i5, width/2, height/2, 400, 400) ;
       
      break;

      case 5:
      background("green");
      image(i6, width/2, height/2, 400, 400) ;
       
      break;

      case 6:
      background("green");
      image(i7, width/2, height/2, 400, 400) ;
              
      break;
      
      case 7:
      background("green");
      image(i8, width/2, height/2, 400, 400) ;
      
      break;

      case 8:
      background("green");
      image(i9, width/2, height/2, 400, 400) ;
              
      break;
  } 
}

timer++;
if(timer > 3*60 && state > -1)
{
  timer = 0;
  state++;
  if(state > 8)
  {
    state = -1;
  }
}

function mouseReleased() {
  if(state < -1)
  {
    state++;
    if(state > 8)
    {
      state = -1;
    }
}

function touchStarted() {
  getAudioContext().resume();
}
}