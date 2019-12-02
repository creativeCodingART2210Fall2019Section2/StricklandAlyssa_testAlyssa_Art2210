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
  text(gods.description, 500, 10);

  text(gods.greek_gods.chaos, 30, 30);
  text(gods.greek_gods.erebus, 30, 80);
  text(gods.greek_gods.tartarus, 30, 130);
  text(gods.greek_gods.pontus, 80, 130);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
