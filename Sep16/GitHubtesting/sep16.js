function setup() {
createCanvas(windowWidth, windowHeight);
noStroke();
}
function draw() {
background(25,166,12);
for (var y = 0; y < height+45; y += 40) {
fill(255, 140);
ellipse(0, y, 40, 40);
}
for (var x = 0; x < width+45; x += 40) {
fill(255, 140);
ellipse(x, 0, 40, 40);
}

}

function windowResized(){

resizeCanvas (windowWidth, windowHeight);

}
