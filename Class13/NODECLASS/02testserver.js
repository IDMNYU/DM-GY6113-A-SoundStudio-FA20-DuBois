console.log('hi there');

var foo = require('./server.js');
var server = foo.startServer(80);
foo.debugServer(true);
