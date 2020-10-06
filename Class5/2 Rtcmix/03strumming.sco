   rtsetparams(44100, 2)
   load("STRUM")

   srand(0.314)

   makegen(1, 24, 1000, 0,1, 1,1) // amplitude envelope
   pitches = {7.00, 7.02, 7.05, 7.07, 7.10, 8.00, 8.07} // 8.pc notation
	lpitches = len(pitches)
   
   for (st = 0; st < 15; st = st + 0.1) {
      pindex = trand(0, lpitches)
      pitch = pitches[pindex]
      START(st, 1.0, pitch, 1.0, 0.1, 10000.0, 1, random())
   }