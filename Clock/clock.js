function setup(){
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); //arc function = DEGREES


}
function draw(){

background(33);

let time = new Date
let mls = millis();
let scn = second();
let mnt = minute();
let hr = hour();
let m = month();

push()
stroke (66);
fill(66)
ellipse(windowWidth/2, windowHeight/2, 540, 540);

  translate(windowWidth/2, windowHeight/2);
  rotate(-90);

  strokeWeight(15);

  stroke (0, 0, 100)//milli movement
  noFill ();
  let end1 = map(mls, 0, 999, 0, 359)
  arc (0, 0, 520, 520, 0, end1);

strokeWeight(25);
  stroke (0, 0, 120);//seconds movement
  let end2 = map(scn, 0, 59, 0, 359);
  arc (0, 0, 475, 475, 0, end2);

strokeWeight(35);
  stroke (0, 0, 140);//minutes movement
  let end3 = map(mnt, 0, 59, 0, 359);
  arc (0, 0, 400, 400, 0, end3);

strokeWeight(45);
  stroke (0, 0, 160);//hours movement
  let end4 = map(hr % 12, 0, 12, 0, 359);
  arc (0, 0, 300, 300, 0, end4);
pop()

push()
  translate(windowWidth/2, windowHeight/2);
  rotate(-90);

  strokeWeight(45);

  stroke (0, 100, 0)//milli movement
  noFill ();
  let end5 = map(mls, 0, 999, 0, 359)
  arc (0, 0, 795, 795, 0, end5);

strokeWeight(35);
  stroke (0, 120, 0);//seconds movement
  let end6 = map(scn, 0, 59, 0, 359);
  arc (0, 0, 750, 750, 0, end6);

strokeWeight(25);
  stroke (0, 140, 0);//minutes movement
  let end7 = map(mnt, 0, 59, 0, 359);
  arc (0, 0, 675, 675, 0, end7);

strokeWeight(15);
  stroke (0, 160, 0);//hours movement
  let end8 = map(hr % 12, 0, 12, 0, 359);
  arc (0, 0, 575, 575, 0, end8);
pop();

}

function resizeCanvas(){
windowResized(windowWidth, windowHeight)

}
