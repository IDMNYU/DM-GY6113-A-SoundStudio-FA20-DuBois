// this is a comment
/* this is also a comment */

<<< "print something out" >>>;

// => is the chuck operator

SinOsc thesine => dac;

125::ms => dur beat; // dur is a data type
4::beat => dur measure;

thesine.gain(0.1); // set its volume to 0.2

while(true) {

Std.rand2f(100, 500) => thesine.freq; // set its frequency
    1::beat => now;
}
