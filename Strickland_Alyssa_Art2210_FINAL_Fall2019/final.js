var drop = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 1000; i++) {
    drop[i] = new raindrop();
  }

}

function draw(){
  background(225);

//city
noStroke();

  fill(200); //background left building
    rect(2, 200, 350, 330);
  fill(215); //right buildings
      rect(850, 40, 100, 500);
      rect(780, 80, 75, 460);
  fill(210);
      rect(950, 40, 75, 500);

  fill(200);
    rect(1, 550, 1500, 300);//forground //grey //water?

  fill(0); //black
    rect(2, 390, 100, 150); // rect(location x, location y, line w, line h)
    rect(2, 1, 3, 400);//left vertical
    rect(35, 1, 3, 400);
    rect(97, 1, 4, 400);
    rect(105, 390, 3, 150);

    rect(290, 380, 3, 150);//middle verticle
    rect(950, 380, 6, 210);
    rect(320, 530, 3, 30);//left peg
    rect(300, 530, 3, 40);
    rect(450, 530, 4, 50);
    rect(470, 530, 4, 40);
    rect(620, 540, 5, 50);//middle peg
    rect(640, 540, 5, 30);
    rect(850, 550, 8, 70); //right peg
    rect(870, 550, 8, 30);

    rect(100, 380, 190, 10); // top railing
    rect(290, 380, 110, 11);
    rect(390, 380, 110, 12);
    rect(490, 380, 110, 13);
    rect(590, 380, 110, 14);
    rect(690, 380, 110, 15);
    rect(790, 380, 110, 16);
    rect(890, 380, 110, 17);
    rect(990, 380, 110, 18);
    rect(1100, 380, 110, 23); //on right verticles
    rect(1200, 380, 110, 30); //past right verticles

    rect(100, 530, 190, 10); // bottom railing
    rect(290, 530, 110, 11);
    rect(400, 530, 110, 16);
    rect(500, 530, 110, 21);
    rect(600, 530, 110, 26);
    rect(700, 530, 110, 31);
    rect(800, 530, 110, 36);
    rect(900, 530, 110, 41);
    rect(1000, 530, 100, 46);
    rect(1100, 530, 100, 500); //on right verticles
    rect(1200, 530, 100, 60); //past right verticles

    rect(1100, 1, 6, 900); //right vertical
    rect(1170, 1, 6, 900);
    rect(1200, 1, 15, 900);
    rect() //railing (x1, y1, x2, y2, x3, y3, x4, y4)

          //rain amount
        for (var i = 0; i < 500; i++) {
            drop[i].show();
            drop[i].update();
          }
  }

function raindrop(){
  //position / location
  this.x = random(0, width);
  this.y = random(0, -height);

  this.show = function() {
    noStroke();
    fill(255); //rain color
    ellipse(this.x, this.y, 2, 10); //rain size
  }

  this.update = function() { //updates rain speed
    this.speed = random(5, 15);
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;

    if(this.y > height){
      this.y = random(0, -height);
      this.gravity = 0;
    }
  }
}

function windowResize(){
  resizeCanvas(windowWidth,windowHeight);

}
