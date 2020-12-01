var socket = io(); // this starts the network connection

  function setup() {
    createCanvas(800, 600);

    // this happens later:
    socket.on('donut', function(data) {
      console.log(data);
      fill(data.red, data.green, data.blue)
      background(255-data.red, 255-data.green, 255-data.blue);
    });


  }

  function draw() {
    ellipse(mouseX, mouseY, 50, 50);

  }
