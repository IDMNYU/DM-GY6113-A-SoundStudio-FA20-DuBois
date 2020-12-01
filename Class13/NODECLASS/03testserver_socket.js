console.log('hi there');

var foo = require('./server.js');
var server = foo.startServer(80);
foo.debugServer(true);

// socket.io stuff:
var io = require('socket.io')(server);
// this runs when we connect:
io.on('connection', function (socket) {
	console.log('socket connection!!!');
  	io.emit('donut', {'red': 0, 'green': 0, 'blue': 0}); // test message
});

setInterval(doStuff, 1000);

function doStuff()
{
  let r = Math.random()*255;
  let g = Math.random()*255;
  let b = Math.random()*255;
  io.emit('donut', {'red': r, 'green': g, 'blue': b}); // test message
}
