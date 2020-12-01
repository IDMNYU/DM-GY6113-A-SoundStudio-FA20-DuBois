console.log('hi there');

var foo = require('./lukeserver.js');
var server = foo.startServer(80);
foo.debugServer(false);

// socket.io stuff:
var io = require('socket.io')(server);
// this runs when we connect:


var POLLSPEED = 30; // how many seconds

var hashtagtosearch = "donald trump"; // what hashtag are we searching for?

// our twitter library
var Twit = require('twit');

// initialize twitter library and include our configuration file
var T = new Twit(require('./config.js'));

// query JSON for our search
var searchQuery = {q: hashtagtosearch, count: 100, result_type: "recent"}; 

// data stack for responses
var searchResults = [];

//
// STEP 1 : start application engine
//

checkTwitter(); // do it at the beginning...
setInterval(checkTwitter, 1000 * POLLSPEED); // ...and run every minute afterwards

// find the latest tweet with our hashtag; parse when done
function checkTwitter() {
	//console.log("polling twitter...");
	T.get('search/tweets', searchQuery, function (error, data) {
	  // log out any errors and responses
	  // console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	for(var i = 0;i<data.statuses.length;i++)
	  	{
	  		var foo = {};
	  		foo.text = data.statuses[i].text;
	  		foo.faves = data.statuses[i].favorite_count;
	  		foo.retweets = data.statuses[i].retweet_count;
	  		while(searchResults.length>99)
	  		{
	  			searchResults.shift();
	  		}
	  		searchResults.push(foo);
	  	}
	  	io.emit('tweets', searchResults); // test message
	  }
	  // original search fucked up:
	  else {
	  	console.log('error with search:', error);
	  }
	});
}



io.on('connection', function (socket) {
	console.log('socket connection!!!');
  	io.emit('tweets', searchResults); // test message
});

