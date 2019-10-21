const radius = 50; //circle size will not change

let a, b; //random locations for each click

let score = 0;

var count = 0; //time
//var down = 15; //countdown


function setup(){
  createCanvas(windowWidth, windowHeight);
a = random(windowWidth);
b = random(windowHeight);

var timer = select('#timer');
timer.html(count) //down - count to go backwards

function timeIt(){
  count++;
  timer.html(count); //(down - count) to go backwards

}
setInterval(timeIt, 1000); //1000 miliseconds per second

}

  function draw() {
background(125);
fill(60, 0, 60);
noStroke();
ellipse(a, b, radius*2, radius*2)


text("Score:" + score, 10, 20) //score points


}

function mousePressed(){ //click on the circle
  let d = dist(mouseX, mouseY, a, b);
  if (d< radius) {
    a = random(windowWidth)
    b = random(windowHeight)
    score++;
  }

}


function windowResize(){
  resizeCanvas(windowWidth,windowHeight);

}
