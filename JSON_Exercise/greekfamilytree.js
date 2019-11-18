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
  text(gods.description, windowWidth/2, 10);
  text(gods.greek_gods: "Chaos", 30, 30)

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
