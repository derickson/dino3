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