var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var bodyParser = require('body-parser');
var port = 3000;
var route = require('./routes/route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', port);

server.listen(port);
server.on('listening', onListening);
app.set('port', port);
app.use('/', route);

//on create http server listening
function onListening() {
	var addr = server.address();
	var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	console.log('running on port '+port);
}

module.exports = app;