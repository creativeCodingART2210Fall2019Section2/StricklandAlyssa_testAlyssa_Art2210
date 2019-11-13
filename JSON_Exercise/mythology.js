var gods;

  function preload(){
  gods = loadJSON("greekmythology.json");


}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw(){
  fill(255);
  textAlign(CENTER);
  text(gods.description, windowWidth/2, windowHeight/2);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
