var x, y, d, a, t;

function setup() {
	createCanvas(windowWidth, windowHeight);

  x = width/2;
  y = height/2;
  d = 20; // how many pixels to draw each step
  a = 0; // starting angle
  t = radians(45); // how much am i turning each time

  background(255);
  fill(0);
	strokeWeight(10);
}

function draw() {

}

function keyTyped() {
  if(key=='c')
  {
    background(255);
    x = width/2;
    y = height/2;
    d = 20; // how many pixels to draw each step
    a = 0; // starting angle
    t = radians(45); // how much am i turning each time
  }
  if(key=='F')
  {
    let newx = x + d * cos(a);
    let newy = y + d * sin(a);
    line(x, y, newx, newy);
    x = newx;
    y = newy;
  }
  if(key=='+')
  {
    a+=t;
  }
  if(key=='-')
  {
    a-=t;
  }

}
