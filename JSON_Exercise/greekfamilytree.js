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
  text(gods.description, windowWidth/2, 10); 
  text(gods.greek_gods[17], 30, 30); //chaos
  text(gods.greek_gods[19], 30, 80); //erebus
  text(gods.greek_gods[26], 30, 130); //tartarus
  text(gods.greek_gods[25], 80, 130); //pontus
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
