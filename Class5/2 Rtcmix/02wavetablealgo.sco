rtsetparams(44100, 2) // set my audio to 44.1k, mono

load("WAVETABLE") // loads in the WAVETABLE instrument

wave = maketable("wave", 1000, 1, 0.3, 0.2)
amp = 1000
ampenv = maketable("line", 1000, 0,0, 0.1,1, 0.2,1, 0.3,0)

// this will make 278.0 hz sine wave tone for 3.4 seconds
for(i =0;i<100;i=i+1)
{
WAVETABLE(i*0.1, 0.3, amp*ampenv, irand(100, 1000), random(), wave)

}