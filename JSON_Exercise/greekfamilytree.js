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
  text(gods.greek_gods[17], 60, 120); //chaos
   text(gods.greek_gods[19], 160, 120); //erebus
   text(gods.greek_gods[26], 260, 120); //tartarus
   text(gods.greek_gods[20], 360, 120); //Eros
   text(gods.greek_gods[30], 460, 120); //Nyx
   text(gods.greek_gods[22], 60, 180); //Uranus
   text(gods.greek_gods[25], 260, 180); //Pontus
   text(gods.greek_gods[29], 360, 180); //hemera
   text(gods.greek_gods[31], 460, 180); //Nemesis
   text(gods.greek_gods[28], 360, 240); //Thanatos
   text(gods.greek_gods[21], 260, 240); //Hypnos
   text(gods.greek_gods[18], 60, 240); //Chronos
   text(gods.greek_gods[6], 160, 240); //Demeter
   text(gods.greek_gods[12], 560, 120); //Hestia
   text(gods.greek_gods[10], 560, 240); //Hera
   text(gods.greek_gods[8], 200, 280); //Hades
   text(gods.greek_gods[13], 300, 280); //Poseidon
   text(gods.greek_gods[14], 400, 280); //Zeus
   text(gods.greek_gods[2], 120, 340); //Apollo
   text(gods.greek_gods[4], 60, 340); //Artemis
   text(gods.greek_gods[5], 160, 340); //Athena
   text(gods.greek_gods[9], 260, 340); //Hephaestus
   text(gods.greek_gods[3], 360, 340); //Ares
   text(gods.greek_gods[11], 560, 240); //Hermes
   text(gods.greek_gods[1], 500, 340); //Aphrodite
   text(gods.greek_gods[11], 560, 180); //Hermes
   text(gods.greek_gods[7], 200, 400); //Hermes


}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
