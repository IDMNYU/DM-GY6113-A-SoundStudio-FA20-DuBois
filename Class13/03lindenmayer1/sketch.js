var thestring = 'A';
var rules = [];
// rules[0] = ['A', 'B'];
// rules[1] = ['B', 'BA'];

rules[0] = ['A', 'BC'];
rules[1] = ['B', 'BEA'];
rules[2] = ['C', 'DAEA'];
rules[3] = ['D', 'BE'];


var iterations = 15; // how many times do we go through the loop

var asound, bsound, csound, dsound, beatsound;

var stringpos = 0; // where am i in the string

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

function preload() {
	asound = loadSound('a.mp3');
	bsound = loadSound('b.mp3');
	csound = loadSound('c.mp3');
	dsound = loadSound('d.mp3');
	beatsound = loadSound('beat.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	textSize(64);
	frameRate(5);
}

function draw() {
	background(255);
	fill(0);

	let cc = thestring.charAt(stringpos); // current character

	text(cc, width/2, height/2);
	if(cc=='A') asound.play();
	if(cc=='B') bsound.play();
	if(cc=='C') csound.play();
	if(cc=='D') dsound.play();
	if(cc=='E') {} // rest

	if(stringpos%2==0) beatsound.play();

	stringpos = (stringpos+1) % thestring.length;
}
