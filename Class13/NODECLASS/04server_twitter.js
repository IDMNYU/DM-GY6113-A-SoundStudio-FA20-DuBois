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
		checkTwitter();
});

// TWITTER stuff:

var POLLSPEED = 30; // how often do i want to check twitter, in seconds

var hashtagtosearch = 'turkey'; // what hashtag are we searching for?

// our twitter library
var Twit = require('twit');

// initialize twitter library and include our configuration file (authorization)
var T = new Twit(require('./config.js'));

// query JSON for our search
var searchQuery = {q: hashtagtosearch, count: 10, result_type: "recent"};

// data stack for responses
var searchResults = [];

//
// STEP 1 : start application engine
//

setInterval(checkTwitter, 1000 * POLLSPEED); // ...and run every minute afterwards

// find the latest tweet with our hashtag; parse when done
function checkTwitter() {
	//console.log("polling twitter...");
	T.get('search/tweets', searchQuery, function (error, data) {
	  // log out any errors and responses
	  // console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
			//console.log(data);
			searchResults = []; // erase
			for(let i = 0;i<data.statuses.length;i++)
			{
				console.log(i + ' by @' + data.statuses[i].user.screen_name + ': ' + data.statuses[i].text);
				let foo = {};
				foo.user = data.statuses[i].user.screen_name;
				foo.text = data.statuses[i].text;
				searchResults.push(foo);
			}
			io.emit('thestuff', searchResults);
	  }
	  // original search fucked up:
	  else {
	  	console.log('error with search:', error);
	  }
	});
}
