var bubbles = [];
let url = "";
let eggs ;
let s1 ;

function preload() {

  s1 = loadSound("assets/egg.mp3") ;
}

function setup() {
  //let key = "1xG5lzBtJV3gK61ZE_qdku3ms9-pCJqwl0T8RVHI11m0"; // this is KEY of the URL from the sheet
    let key ="1Kqz1Z5H4dbi58w_oJDT_werZkMp5aXr2HmqcgCAf7Mc"

  url = "https://opensheet.vercel.app/" + key + "/Form+Responses+1"; // here I'm making the string for loadJSON.

  loadJSON(url, gotData);

  // Regular setup code we usually have
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  eggs = loadImage("assets/eggs.webp") ;
  s1 = loadSound("assets/egg.mp3");
}

// The data comes back as an array of objects

function gotData(data) {
  console.log(data); // Print the data in the console

  // add each line to an array of bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(
      new Bubble(
        data[i]["Do you like eggs?"],
        data[i]["Why do you like eggs?"],
        data[i]["When will you eat eggs?"],
        data[i]["Will you love the eggs like they love you?"],
        data[i]["What came first? The chicken or the egg?"],
        data[i]["Your name here"])); // THESE NEED TO MATCH SPREADSHEET
    
  }
}

function draw() {
  background(100);
      image(eggs, width/2, height/2, windowWidth, windowHeight);
  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

function mouseReleased() {
  if (s1.isPlaying()) {
    s1.pause();
  } else {
    s1.play();
  }
}

function touchStarted() {
  getAudioContext().resume();
}

// my Bubble class
class Bubble {
  constructor(like, why, when, love, first) {
    // only the order of these parameters matters!
    this.like = like;
    this.why = why;
    this.when = when;
    this.love = love;
    this.first = first;
    //this.name = name;
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(random(3, 2), 0);
  }

  display() {
    stroke("red");
    noFill();
    ellipse(this.pos.x, this.pos.y+10, 290, 120);
    fill("white");
    text( 
      this.like + "\n" + this.why + "\n" + this.when + "\n" + this.love + "\n" + this.first,
      this.pos.x,
      this.pos.y
    );
  
    this.pos.add(this.vel) ;
    if (this.pos.x > width) this.pos.x = 0 ;
  
    
  }
  
  
}
