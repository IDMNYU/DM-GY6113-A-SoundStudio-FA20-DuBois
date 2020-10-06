// this is a comment
/* this is also a comment */

<<< "print something out" >>>;

// => is the chuck operator
BlitSaw thesaw => LPF thefilter => JCRev theverb => dac;
BlitSquare thesquare => thefilter;

thesaw.gain(0.2);
thesquare.gain(0.2);
thefilter.freq(800);
thefilter.Q(2);
0.1 => theverb.mix;

125::ms => dur beat; // dur is a data type
4::beat => dur measure;

[0, 2, 4, 5, 7, 9, 11] @=> int thepitches[];

0 => int currentbeat;
float f;

while(true) {
    Std.rand2(0, 4) * 12 => int theoctave;
    Std.rand2(0, thepitches.cap()-1) => int thechoice;
    Std.mtof(40+theoctave+thepitches[thechoice]) => float thefreq;
    thefreq => thesaw.freq;
    thefreq*0.99 => thesquare.freq;
    
    Std.rand2f(200, 10000) => thefilter.freq;
    
    (currentbeat+1)%4 => currentbeat;
    1::beat => now;
}
