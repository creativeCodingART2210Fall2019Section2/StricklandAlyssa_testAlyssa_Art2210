var birds;

  function preload(){
  birds = loadJSON("plants.json");

}

function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw(){
  background(0);
  fill(255);
  textAlign(CENTER);
  text(birds.birds[0].family, windowWidth/2, windowHeight/2);
}
