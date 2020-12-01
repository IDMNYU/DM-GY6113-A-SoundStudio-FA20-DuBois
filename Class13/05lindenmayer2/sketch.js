// turtle:
var x = [];
var y = [];
var a = [];

var d; // how far do we draw each step
var incr; // how much do we turn when we turn

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	noFill();
	stroke(0);

	d = 20;
	incr = radians(22.5);
	x[0] = width/2; // our x position
	y[0] = height; // our y position
	a[0] = -PI/2; // our angle


}

function draw() {
//	background(255);
}

function keyTyped()
{
		doTurtle(key);
}


function doTurtle(k) {
	if(k==' ') background(255);
	if(k=='F') {
		let tx = x[x.length-1];
		let ty = y[y.length-1];
		let ta = a[a.length-1];
		let newx = tx + d * cos(ta);
		let newy = ty + d * sin(ta);
		line(tx,ty,newx,newy);
		ellipse(newx, newy, 5/x.length, 5/x.length);
		x[x.length-1] = newx;
		y[y.length-1] = newy;
	}
	if(k=='f') {
		let tx = x[x.length-1];
		let ty = y[y.length-1];
		let ta = a[a.length-1];
		let newx = tx + d * cos(ta);
		let newy = ty + d * sin(ta);
		//line(tx,ty,newx,newy);
		//ellipse(newx, newy, 20/x.length, 20/x.length);
		x[x.length-1] = newx;
		y[y.length-1] = newy;
	}
	if(k=='+') {
		a[a.length-1] += incr;
	}
	if(k=='-') {
		a[a.length-1] -= incr;
	}
	if(k=='[') { // push up a branch
		let tx = x[x.length-1];
		let ty = y[y.length-1];
		let ta = a[a.length-1];
		x.push(tx);
		y.push(ty);
		a.push(ta);
	}
	if(k==']') { // pop down a brach
		x.pop();
		y.pop();
		a.pop();
	}
}
