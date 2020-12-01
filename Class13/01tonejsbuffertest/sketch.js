const player = new Tone.Player("https://tonejs.github.io/audio/drum-samples/breakbeat.mp3").toDestination();
player.loop = true;
player.autostart = true;

function setup(){
  createCanvas(windowWidth, windowHeight);

}

function draw()
{
}
