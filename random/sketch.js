var col = {
  r: 0,
  g: 0,
  b: 0,
}

let amt, startColor, newColor;

function setup() {
let canvas = createCanvas(windowWidth, windowHeight);
    col.r= random(0,255);
  col.g= random(0,255);
  col.b= random(0,255);
background(col.r,col.g,col.b);
}

function mousePressed() {
col.r= random(0,255);
  col.g= random(0,255);
  col.b= random(0,255);
  startColor = newColor;
  newColor = color(random(0,255));
}

function keyPressed() {
if (keyCode === ENTER) {
  saveCanvas('painting', 'png');
}
}


function draw() {
background(random(0,225), 10);
  noFill();
  stroke(225);
  
  circle(random(windowHeight), random(windowWidth), random(30,1000));
  // let x = random(45, 55);
  // let y = random(45, 55);
  //  strokeWeight(random(2));
  // translate(random(70), random(70));
  // circle(150, 500, random, 30, random(750), 500);
  //  circle(23, random, 110, random(35), 640, random(60));
  //  circle(640, 500, random(403), 975, 940, random);
  //    circle(random(10,70), random, 730, random(230), 940, 450);
}

