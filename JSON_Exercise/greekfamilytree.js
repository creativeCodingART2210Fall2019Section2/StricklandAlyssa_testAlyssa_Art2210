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
  text(gods.description, 550, 10);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
