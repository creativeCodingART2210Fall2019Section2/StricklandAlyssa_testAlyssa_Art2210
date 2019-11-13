function setup() {
createCanvas(windowWidth, windowHeight);
background(204);

}

function draw() {
  fill(255, 0, 0)
translate(mouseX, mouseY);
ellipse(30, 30, 30, 30); //red square
fill (255)
rotate(mouseX / 100.0);
ellipse(-10, -10, -10, -10); //center rectangle
fill (1, 0, 1) //corner ellipse
rotate(mouseX / 100.0);
ellipse(100, 100, 100, 100);
fill(200, 0, 255)
translate(35, 10);
ellipse(15, 15, 15, 15); //tiny square
fill (90, 0, 90)
rotate(mouseX / 100.0);
ellipse(75, 75, 75, 75); //rectangle

}

function windowResized(){
  canvasResize(windowWidth, windowHeight)
}
