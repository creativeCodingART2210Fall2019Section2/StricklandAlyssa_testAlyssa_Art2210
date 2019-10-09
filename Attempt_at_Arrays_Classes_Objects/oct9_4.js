var x = [];
var a, b, c, d, e;

function setup(){

  createCanvas(windowWidth, windowHeight);
  noStroke();
    for (var i = 0; i < 3000; i++) {
    x[i] = random(-1000, 200);
    ellipseMode(RADIUS);

  }

}

  function draw() {
    background(66);

    a = random(50);
    b = random(50);
    c = random (255);
    d = random(255);
    e = random (255);

    for (var i = 0; i < x.length; i++) {
    x[i] += 0.5;
    var y = i * 0.4;

    fill(c,d,e)
    ellipse(x[i], y, a, b);

    }
}

function windowResize(){
  resizeCanvas(windowWidth,windowHeight);

}
