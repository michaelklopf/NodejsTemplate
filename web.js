var express = require('express');
var http = require('http');
var sys = require('util');
var rest = require('restler');
var fs = require('fs');
var jade = require('jade');
var stylus = require('stylus');

var app = express();

app.use(stylus.middleware(__dirname + '/static'));
app.use(express.static(__dirname + '/static'));
app.use(express.bodyParser());

app.get('/', function(req, res) {
    var data = jade.renderFile(__dirname + '/index.jade');
    res.contentType('text/html');
    res.send(200, data);
});

app.post('/testpost', function(req, res) {
    console.log(req.body);
    res.send(200, JSON.stringify("Received data successfully."));
});

var port = 3000;
http.createServer(app).listen(port, function() {
    console.log('Listening on port ' + port);
});

/*
 // example for consuming another api
 rest.get('url').on('complete', function(response) {
    if (response instanceof Error) {
        sys.put('Error: ' + response.message);
    } else {
        sys.put(response);
    }
 });
*/