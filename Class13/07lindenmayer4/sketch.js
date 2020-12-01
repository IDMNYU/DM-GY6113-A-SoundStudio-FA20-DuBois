// turtle:
var x = [];
var y = [];
var a = [];

// Lindenmayer system:
var rules = [];
var thestring;
var iterations; // how many times do we go through the loop
var d; // how far do we draw each step
var incr; // how much do we turn when we turn

var asound, bsound, csound, dsound, beatsound;

var stringpos = 0; // where am i in the string

var playrate = 1.;
var fr = 10;

function preload() {
	asound = loadSound('a.mp3');
	bsound = loadSound('b.mp3');
	csound = loadSound('c.mp3');
	dsound = loadSound('d.mp3');
	beatsound = loadSound('beat.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(fr);
	noFill();
	stroke(0);
	//frameRate(5);

	//frameRate(5);

	// groovy plant #1:
	// thestring = 'F';
	// rules[0] = ['F', 'FF-[-F+F+F]+[+F-F-F]'];
	// iterations = 4;
	// d = 5;
	// incr = radians(22.5);
	// x[0] = width/2; // our x position
	// y[0] = height; // our y position
	// a[0] = -PI/2; // our angle

	// groovy plant #2:
	thestring = 'X';
	rules[0] = ['X', 'F-[[X]+X]+F[+FX]-X'];
	rules[1] = ['F', 'FF'];
	iterations = 4;
	d = 5;
	incr = radians(22.5);
	x[0] = width/2; // our x position
	y[0] = height; // our y position
	a[0] = -PI/2; // our angle

	// weird spiral thingie:
	// thestring = 'F-F-F-F';
	// rules[0] = ['F', 'F+FF-FF-F-F+F+FF-F-F+F+FF+FF-F'];
	// iterations = 4;
	// d = 5;
	// incr = radians(90);
	// x[0] = width/2; // our x position
	// y[0] = height/2; // our y position
	// a[0] = -PI/2; // our angle

	// sierpinski triangle:
	// thestring = '-F';
	// rules[0] = ['F', 'F+F-F-F+F'];
	// iterations = 4;
	// d = 6;
	// incr = radians(90);
	// x[0] = width/2; // our x position
	// y[0] = height/2; // our y position
	// a[0] = -PI/2; // our angle

	// floor:
	// thestring = 'A'; // "axiom" or start of the string
	// iterations = 5; // how many iterations of the L-system to pre-compute
	// rules[0] = ['A', '-BF+AFA+FB-']; // first rule
	// rules[1] = ['B', '+AF-BFB-FA+']; // second rule
	// d = 20;
	// incr = radians(90);
	// x[0] = 0;
	// y[0] = height-1;
	// a[0] = 0;

	// do L-system

	for(let i = 0;i<iterations;i++)
	{
		var outstring = '';
		for(let j = 0;j<thestring.length;j++)
		{
			let cc = thestring.charAt(j); // current character
			let ismatch = 0;
			for(let k = 0;k<rules.length;k++)
			{
				if(cc==rules[k][0]) {
					outstring+=rules[k][1];
					ismatch = 1;
				}
			}
			if(ismatch==0) outstring+=cc;
		}
		thestring = outstring;
		console.log(thestring);
	}

}

function draw() {
//	background(255);

	//text(cc, width/2, height/2);

	if(stringpos<thestring.length) {
		let cc = thestring.charAt(stringpos); // current character
		if(cc=='F') {
			asound.rate(playrate);
			asound.play();
		}
		if(cc=='+') playrate*=1.1;
		if(cc=='-') playrate*=0.9;
		if(cc=='X') csound.play();
		if(cc=='[') frameRate(++fr);
		if(cc==']') frameRate(--fr);
		// if(cc=='E') {} // rest

		if(stringpos%2==0) beatsound.play();
		doTurtle(cc);
		stringpos++;
	}




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
