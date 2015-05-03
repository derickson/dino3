/**
	DinoTrap
	A localized game involving dinosaurs, traps, etc
*/

// ######## Express Imports
var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
	methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 3000,
    publicDir = __dirname + '/public';


// TODO Handlers For Socket Based Client App Setup

// TODO Event handlers for incoming track data
	
// TODO Event Handlers for incoming alerts
	
// TODO Persistence Handlers for MongoDB and Elasticsearch
	
// TODO Query Handlers for MongoDB and Elasticsearch
	
// TODO Applicaiton Logic, which is able to do utilize all of the above handlers


//// ######## Static Server

app.get("/", function (req, res) {
  res.redirect("/index.html");
});
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(publicDir));


// ######## Error Handling

app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));


console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);

app.listen(port, hostname);