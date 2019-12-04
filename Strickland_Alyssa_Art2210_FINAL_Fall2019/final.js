var drop = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 1000; i++) {
    drop[i] = new raindrop();
  }

}

function draw(){
  background(225);
  //sky
fill(50);
  rect(-1, -1, 2000, 10);
fill(52);
    rect(-1, 9, 2000, 10);
fill(54);
    rect(-1, 19, 2000, 10);
fill(56);
    rect(-1, 29, 2000, 10);
fill(58);
    rect(-1, 39, 2000, 10);
fill(60);
    rect(-1, 49, 2000, 10);
fill(62);
    rect(-1, 59, 2000, 10);
fill(64);
    rect(-1, 69, 2000, 10);
fill(66);
    rect(-1, 79, 2000, 10);
fill(68);
    rect(-1, 89, 2000, 10);
fill(70);
    rect(-1, 99, 2000, 10);
fill(72);
    rect(-1, 109, 2000, 10);
fill(74);
    rect(-1, 119, 2000, 10);
fill(76);
    rect(-1, 129, 2000, 10);
fill(80);
    rect(-1, 139, 2000, 10);
fill(85);
    rect(-1, 149, 2000, 10);
fill(90);
    rect(-1, 159, 2000, 10);
fill(95);
    rect(-1, 169, 2000, 10);
fill(100);
    rect(-1, 179, 2000, 10);
fill(105);
    rect(-1, 189, 2000, 10);
fill(110);
    rect(-1, 199, 2000, 10);
fill(115);
    rect(-1, 209, 2000, 10);
fill(120);
    rect(-1, 219, 2000, 10);
fill(125);
    rect(-1, 229, 2000, 10);
fill(130);
    rect(-1, 239, 2000, 10);
fill(135);
    rect(-1, 249, 2000, 10);
fill(140);
    rect(-1, 259, 2000, 10);
fill(145);
    rect(-1, 269, 2000, 10);
fill(150);
    rect(-1, 279, 2000, 10);
fill(155);
    rect(-1, 289, 2000, 10);
fill(155);
    rect(-1, 299, 2000, 10);
fill(160);
    rect(-1, 309, 2000, 10);
fill(165);
    rect(-1, 319, 2000, 10);
fill(170);
    rect(-1, 329, 2000, 10);
fill(175);
    rect(-1, 339, 2000, 10);
fill(180);
    rect(-1, 349, 2000, 10);
fill(185);
    rect(-1, 359, 2000, 10);
fill(190);
    rect(-1, 369, 2000, 10);
fill(195);
    rect(-1, 379, 2000, 10);
fill(200);
    rect(-1, 389, 2000, 10);
fill(205);
    rect(-1, 399, 2000, 10);
fill(210);
    rect(-1, 409, 2000, 10);
fill(215);
    rect(-1, 419, 2000, 10);
fill(220);
    rect(-1, 429, 2000, 10);


//city
noStroke();

  fill(215); //background left building
    rect(2, 200, 350, 330);
    rect(15, 160, 200, 40);
    rect(135, 130, 200, 700);
    rect(400, 45, 400, 700); //middle buildings
    rect(1100, 130, 100, 500); // right buildings

  fill(200);
      rect(850, 40, 100, 500);//right buildings
      rect(780, 80, 75, 460);
      rect(1050, 200, 200, 500);
      rect(160, 60, 150, 700);//left buildings
      rect(500, 200, 240, 700);//middle building

      //blue higlight
      fill(200, 200, 225);
        triangle(310, 60, 160, 860, 160, 60); //left
        triangle(500, 200, 740, 200, 500, 900); //middle
        rect(850, 40, 100, 40); //right
        triangle(780, 80, 855, 80, 780, 540);
        triangle(1050, 200, 1050, 700, 1250, 200);

  fill(185);
    rect(940, 70, 75, 500); //right buildings
  fill(160);
    rect(250, 400, 500, 700);

    //windows
      fill(255);
        rect(10, 200, 5, 10); //left
        rect(10, 220, 5, 10);
        rect(10, 240, 5, 10);
        rect(10, 260, 5, 10);
        rect(10, 280, 5, 10);
        rect(10, 300, 5, 10);
        rect(10, 320, 5, 10);
        rect(10, 340, 5, 10);
        rect(10, 360, 5, 10);
        rect(10, 380, 5, 10);
        rect(50, 200, 5, 10); //next
        rect(50, 220, 5, 10);
        rect(60, 200, 5, 10);
        rect(70, 200, 5, 10);
        rect(90, 250, 5, 10);
        rect(90, 270, 5, 10);
        rect(90, 290, 5, 10);
        rect(100, 250, 5, 10);
        rect(100, 290, 5, 10);

        rect(400, 100, 300, 40); //middle
        rect(400, 150, 200, 40);
        rect(500, 300, 200, 40);
        rect(500, 250, 100, 20);
        rect(400, 500, 300, 40);//bottom
        rect(300, 410, 200, 40);
        rect(160, 100, 100, 30);//next
        rect(160, 150, 100, 30);

        rect(900, 100, 20, 400);//right
        rect(840, 300, 20, 200);
        rect(860, 120, 50, 10);
        rect(860, 150, 50, 10);
        rect(860, 180, 50, 10);
        rect(860, 210, 50, 10);
        rect(1090, 300, 5, 10);//right
        rect(1090, 320, 5, 10);
        rect(1090, 340, 5, 10);
        rect(1150, 340, 5, 10);
        rect(1150, 360, 5, 10);
        rect(1150, 320, 5, 10);
        rect(1200, 320, 40, 100);
        rect(1100, 100, 100, 30);

        rect(1000, 100, 10, 400);

    //water
  fill(65);
    rect(-1, 550, 1500, 300);//forground //grey
  fill(80);
    rect(-1, 550, 1350, 40);
  fill(95);
    rect(-1, 550, 1200, 10);
  fill(255);
    rect(15, 550, 500, 1);
    rect(20, 555, 400, 2);
    rect(100, 570, 200, 3);
    rect(120, 575, 200, 4);

  fill(0); //black
    rect(-1, 390, 100, 150); // rect(location x, location y, line w, line h)
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
