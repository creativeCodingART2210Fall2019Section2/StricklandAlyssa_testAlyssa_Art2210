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
  text(gods.description, 1100, 20);
  text(gods.greek_gods[17], 60, 120); //chaos
   text(gods.greek_gods[19], 60, 120); //erebus
   text(gods.greek_gods[26], 140, 120); //tartarus
   text(gods.greek_gods[20], 180, 120); //Eros
   text(gods.greek_gods[30], 220, 120); //Nyx
   text(gods.greek_gods[22], 60, 180); //Uranus
   text(gods.greek_gods[25], 100, 180); //Pontus
   text(gods.greek_gods[29], 140, 180); //hemera
   text(gods.greek_gods[31], 400, 140); //Nemesis
   text(gods.greek_gods[28], 400, 200); //Thanatos
   text(gods.greek_gods[21], 440, 200); //Hypnos
   text(gods.greek_gods[18], 60, 220); //Chronos
   text(gods.greek_gods[6], 120, 240); //Demeter
   text(gods.greek_gods[12], 80, 120); //Hestia
   text(gods.greek_gods[10], 200, 240); //Hera
   text(gods.greek_gods[8], 200, 280); //Hades
   text(gods.greek_gods[13], 240, 280); //Poseidon
   text(gods.greek_gods[14], 280, 280); //Zeus
   text(gods.greek_gods[2], 120, 320); //Apollo
   text(gods.greek_gods[4], 160, 320); //Artemis
   text(gods.greek_gods[5], 280, 320); //Athena
   text(gods.greek_gods[9], 320, 320); //Hephaestus
   text(gods.greek_gods[3], 360, 320); //Ares
   text(gods.greek_gods[11], 120, 260); //Hermes
   text(gods.greek_gods[1], 360, 360); //Aphrodite
   text(gods.greek_gods[11], 200, 160); //Hermes
   text(gods.greek_gods[7], 60, 400); //Hermes


}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
