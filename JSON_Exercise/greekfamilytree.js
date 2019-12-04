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
  text(gods.greek_gods[17], 30, 60); //chaos
   text(gods.greek_gods[19], 30, 60); //erebus
   text(gods.greek_gods[26], 70, 60); //tartarus
   text(gods.greek_gods[20], 90, 60); //Eros
   text(gods.greek_gods[30], 110, 60); //Nyx
   text(gods.greek_gods[22], 30, 90); //Uranus
   text(gods.greek_gods[25], 50, 90); //Pontus
   text(gods.greek_gods[29], 70, 90); //hemera
   text(gods.greek_gods[31], 200, 70); //Nemesis
   text(gods.greek_gods[28], 200, 100); //Thanatos
   text(gods.greek_gods[21], 220, 100); //Hypnos
   text(gods.greek_gods[18], 30, 110); //Chronos
   text(gods.greek_gods[6], 60, 120); //Demeter
   text(gods.greek_gods[12], 80, 120); //Hestia
   text(gods.greek_gods[10], 100, 120); //Hera
   text(gods.greek_gods[8], 100, 140); //Hades
   text(gods.greek_gods[13], 120, 140); //Poseidon
   text(gods.greek_gods[14], 140, 140); //Zeus
   text(gods.greek_gods[2], 60, 160); //Apollo
   text(gods.greek_gods[4], 80, 160); //Artemis
   text(gods.greek_gods[5], 140, 160); //Athena
   text(gods.greek_gods[9], 160, 160); //Hephaestus
   text(gods.greek_gods[3], 180, 160); //Ares
   text(gods.greek_gods[11], 120, 180); //Hermes
   text(gods.greek_gods[1], 180, 180); //Aphrodite
   text(gods.greek_gods[11], 100, 80); //Hermes
   text(gods.greek_gods[7], 30, 200); //Hermes


}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
