let numberOfTouches ;
let i1, i2, i3;


function setup() {
  createCanvas(window.innerHeight, window.innerWidth);

  i1 = loadImage("imgs/human.webp") ;
  i2 = loadImage("imgs/mayo.jpg") ;
  i3 = loadImage("imgs/feesh.jpg") ;
  imageMode(CENTER);
}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);
  
  switch(numberOfTouches) {
    case 0: 
      text("touch me", 5, 22) ; 
      image(i1, width/2, height/2, window.innerWidth, window.innerHeight);
      break ;
      
      case 1: 
       text("add more touch pls", 5, 22) ; 
       image(i2, width/2, height/2, window.innerWidth, window.innerHeight);      
       break ;
      
      case 2:
      text("MORE!!!!", 5, 22) ; 
      image(i3, width/2, height/2, window.innerWidth, window.innerHeight);      
      break ;
      
      case 3:
     text("HES ESCAPED AGAIN.", 5, 22) ; 
     image(i2, width/2, height/2, window.innerWidth, window.innerHeight);      
     break ;
  }
  
}