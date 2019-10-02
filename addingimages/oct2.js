
var img;

function preload(){
  img=loadImage('https://github.com/AlyssaStrickland/Strickland_Alyssa_Art2210/blob/master/Image/ca2e34fc.jpg');

}

function setup(){
      createCanvas(windowWidth,windowHeight);

}


function draw(){
image(img,windowWidth/2-345,windowHeight/2-194);

}


function windowResized(){
  resizeCanvas(windowWidth,windowHeight);

}
