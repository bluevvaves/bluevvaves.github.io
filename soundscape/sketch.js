
let metalSound;
let riverSound;
let userhasClicked = false;


//remove river sound stuff if issues


function preload() {
  metalSound = loadSound('assets/metal.wav');
  riverSound = loadSound('assets/river.wav');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
}

function draw() {

  background('hotpink');

  if(userhasClicked == false){
    text('click to start!!', width/2, height/2);
  }
  else{

background('red')

if(metalSound.isPlaying() == false){
  metalSound.play();
}

  let targetVolume = map(

    mouseX,
    0,
    width,
    0,
    1

  )
  metalSound.setVolume(targetVolume)

  }

  if(riverSound.isPlaying() == false){
    riverSound.play();
  }
  
    let targetVolume = map(
  
      mouseX,
      0,
      width,
      1,
      0
  
    )
    riverSound.setVolume(targetVolume)
  
    }
//''falsey or truthy''

function mouseClicked(){

userhasClicked = true;

}

