rtsetparams(44100, 1) // set my audio to 44.1k, mono

load("WAVETABLE") // loads in the WAVETABLE instrument

// this will make 278.0 hz sine wave tone for 3.4 seconds
WAVETABLE(0, 3.4, 20000, 278.0)
WAVETABLE(2, 5.6, 10000, 433.29)
WAVETABLE(1, 0.2, 500, 1000)