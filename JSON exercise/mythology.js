var gods;

  function preload(){
  gods = loadJSON("greekmythology.json");


}

function setup(){
  createCanvas(windowWidth, windowHeight);


}

function draw(){
  background(0);
  fill(255);
  textAlign(CENTER);
  text(windowWidth/2, windowHeight/2, gods.description, gods.description);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
