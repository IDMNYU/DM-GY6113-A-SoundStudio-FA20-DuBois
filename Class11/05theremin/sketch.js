var synth;

synth = new Tone.Oscillator(440, "sine").toDestination();

function setup(){
  createCanvas(windowWidth, windowHeight);
  synth.start();
}

function draw()
{
  synth.frequency.value = map(mouseX, 0, width, 200, 800); // Hz
  synth.volume.value = map(mouseY, 0, height, 0, -24); // decibels
}
