var a = 525;
var b = 150;

function setup(){
  createCanvas (windowWidth, windowHeight);
  background(225, 200, 185)

}
function draw(){
noStroke();{
fill (220, 100, 77);//nosebridge
quad (675, 150, 575, 150, 635, 307, 605, 307); //nosebridge
  fill (144, 100, 100);//nose
  triangle(650, 300, 590, 300, 620, 305, 88, 77); //nose
  triangle(640, 280, 600, 280, 620, 275);
  fill (200, 0, 100) //mouth
  ellipse (618, 360, 50, 20)
}

  let c = color(0); // Define color 'c'
  fill(c); // Use color variable 'c' as fill color
  noStroke(); // Don't draw a stroke around shapes
  strokeWeight(0);
  ellipse(635, 307, 7, 8); //left nostril
  ellipse(605, 307, 7, 8); //right nostril
  ellipse(a, b, 19, 23); //right eye pupil
  ellipse(a, 144, 45, 10); //right eye pupil
  quad ( 715, b, 745, b,  725, 180, 735, 180); //left eye pupil
  line (300, 100, 300, 700)


  noFill();{
    stroke (c);
strokeWeight(2);
curve(500, 400, 503, 145, 547, 145, 500, 145); //(arcx, arcy, point1x, point1y, point2x, point2y, arc2x, arc2y)
curve(500, 400, 503, 150, 547, 145, 500, 145); //right eyebrow
curve(500, 400, 503, 140, 547, 145, 500, 145);
curve(500, 400, 503, 135, 547, 145, 500, 145);
curve(550, 400, 703, 145, 700, 145, 500, 200); //left eyebrow
curve(550, 400, 703, 145, 700, 145, 500, 200);
curve(580, 400, 750, 145, 700, 145, 500, 200);

}


}

function windowResized(){


resizeCanvas (windowWidth, windowHeight);

}
