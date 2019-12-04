const radius = 50; //circle size will not change

let a, b; //random locations for each click

let score = 0;

var count = 0; //time
var down = 15; //countdown

function convertSeconds(s){ //converts total seconds to 0:00 clock //Developer Tools --> Console
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ':' + nf(sec, 2);
}


function setup(){
  createCanvas(windowWidth, windowHeight);
a = random(windowWidth);
b = random(windowHeight);


var timer = select('#timer');
timer.html(convertSeconds(down - count)) //down - count to go backwards

function timeIt(){
  count++;
  timer.html(convertSeconds(down - count)); //(down - count) to go backwards
  //counter = 0;

}
setInterval(timeIt, 1000); //1000 miliseconds per second

}

  function draw() {
background(66);
fill(125, 0, 125);
noStroke();
ellipse(a, b, radius*3, radius*3)


text("Score:" + score, 10, 50); //score points
textSize(40);



}

function mousePressed(){ //click on the circle
  let d = dist(mouseX, mouseY, a, b);
  if (d < radius) {
    a = random(windowWidth)
    b = random(windowHeight)
    score++;

  }
}


function windowResize(){
  resizeCanvas(windowWidth,windowHeight);

}
