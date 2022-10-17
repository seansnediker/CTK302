let numberOfTouches ;
let i1, i2, i3, i4 ;


function setup() {
  createCanvas(window.innerHeight, window.innerWidth);

  i1 = loadImage("imgs/human.webp") ;
  i2 = loadImage("imgs/mayo.jpg") ;
  i3 = loadImage("imgs/feesh.jpg") ;
  i4 = loadImage("imgs/2.webp")
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("no one is touching the screen", 5, 22) ; 
      image(i1, width/2, height/2, window.innerWidth, window.innerHeight);
      break ;
      
      case 1: 
       text("it's kind of lonely here", 5, 22) ; 
       image(i2, width/2, height/2, window.innerWidth, window.innerHeight);      
       break ;
      
      case 2:
      text("two fingers are touching the screen", 5, 22) ; 
      image(i3, width/2, height/2, window.innerWidth, window.innerHeight);      
      break ;
      
      case 3:
     text("three are touching the screen", 5, 22) ; 
     image(i2, width/2, height/2, window.innerWidth, window.innerHeight);      
     break ;
  }
  
}