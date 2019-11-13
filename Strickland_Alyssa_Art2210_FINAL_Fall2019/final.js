function setup(){
  createCanvas(windowWidth, windowHeight);
    background(225);
}

function draw(){
  fill(200);
  noStroke();
    ellipse(5, 700, 2400, 570);//forground

}

function windowResize(){
  resizeCanvas(windowWidth,windowHeight);

}
