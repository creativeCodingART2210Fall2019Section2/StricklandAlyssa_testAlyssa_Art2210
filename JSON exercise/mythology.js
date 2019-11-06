var gods;

  function preload(){
  greekmythology = loadJSON("greekmythology.json");

}

function setup(){
  createCanvas(windowWidth, windowHeight);


}

function draw(){
  background(0);
  fill(255);
  textAlign(CENTER);
  text(greekmythology., windowWidth/2, windowHeight/2);

}
