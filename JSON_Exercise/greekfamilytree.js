var gods;

  function preload(){
  gods = loadJSON("greekmythology.json");


}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(0);

}

function draw(){
  
  push()
  fill(255);
  text(gods.description, 500, 10);
  pop()
  text(gods.greek_gods: "Chaos", 30, 30)

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
