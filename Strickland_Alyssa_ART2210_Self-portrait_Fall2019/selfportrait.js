var a = 525;
var b = 150;

function setup(){
  createCanvas (windowWidth, windowHeight);
  background(200, 200, 185);

}
function draw(){
noStroke();{
    fill(12.5, 45, 45);
    quad (375, 1, 900, 1, 900, 800, 375, 800);//face blue backg
    fill (100, 50, 0); // brown stripes
    quad (1, 50, 1, 70, 1500, 50, 1500, 70);
    quad (200, 1, 250, 1, 250, 800, 200, 800);
fill(50, 65, 20); //green stripes
     quad (1, 800, 1, 700, 1500, 50, 1500, 70);
     quad (600, 1, 700, 1, 1500, 50, 1500, 70);
  fill(180, 50, 0) //redbrown stripes
     quad (300, 1, 305, 1, 305, 800, 300, 800);
     quad (1, 850, 1, 850, 1500, 50, 1500, 70)
  fill(225, 200, 185);
     quad (400, 85, 875, 85, 675, 400, 550, 400); //face pink
     quad (485, 300, 755, 300, 685, 400, 550, 400) //lower

fill (200, 200, 185);//nosebridge
quad (675, 150, 575, 150, 635, 307, 605, 307); //nosebridge
  fill (144, 100, 100);//nose
  triangle(650, 300, 590, 300, 620, 305, 88, 77); //nose
  triangle(640, 280, 600, 280, 620, 275);
  fill (200, 90, 100); //mouth
  ellipse (618, 360, 50, 20);

}

  let c = color(100, 50, 0); // Define color 'c'
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
