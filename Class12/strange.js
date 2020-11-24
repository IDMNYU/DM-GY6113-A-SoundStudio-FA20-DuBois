// this is strange
//
// attractor is generated via:
outlets = 3;
//
//	X = sin(A*y)-z*cos(B*x)
//	Y = z*sin(C*x)-cos(D*y)
//	Z = E*sin(x)

var x, y, z;
var A, B, C, D, E;

function reset()
{
	x = 0;
	y = 0;
	z = 0;
	A = Math.random()*4-2;
	B = Math.random()*4-2;
	C = Math.random()*4-2;
	D = Math.random()*4-2;
	E = Math.random()*4-2;
}

function bang()
{
 var newX = Math.sin(A*y)-z*Math.cos(B*x);
 var newY = z*Math.sin(C*x)-Math.cos(D*y);
 var newZ = E*Math.sin(x);	

	outlet(2, newZ);
	outlet(1, newY);
	outlet(0, newX);

	x = newX;
	y = newY;
	z = newZ;
}

function barf()
{
	post('hi there');
	outlet(0, Math.random());
}

function yikes(x)
{
	outlet(0, x*2);
}