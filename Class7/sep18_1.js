var x = 600;
var y = 300;
var px = 600;
var py = 300;
var easing = 0.05;
function setup() {
createCanvas(windowWidth, windowHeight);
stroke(100, 15);
background(4)
}
function draw() {
  if (mouseIsPressed){
var targetX = mouseX;
x += (targetX - x) * easing;
var targetY = mouseY;
y += (targetY - y) * easing;
var weight = dist(x, y, px, py);
strokeWeight(15);
line(10, 10, px, py);
py = y;
px = x;
  } else {
    var targetX = mouseX;
    x += (targetX - x) * easing;
    var targetY = mouseY;
    y += (targetY - y) * easing;
    var weight = dist(x, y, px, py);
    strokeWeight(weight);
    line(5, 5, px, py);
    py = y;
    px = x;
  }

  print(mouseIsPressed);
}

function windowResized(){

  resizeCanvas(wndowWidth, windowHeight)
}
