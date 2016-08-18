var portString = process.argv[2];
var SerialPort = require('serialport');
var port = new SerialPort(portString);

var express = require('express');
var sse = require('server-sent-events');
var app = express();

port.on('open', function() {});

port.on('error', function(err) {
  console.log('Error: ', err.message);
})

app.use(express.static(__dirname + '/public'));

app.get('/events', sse, function(req, res) {
  //TBD
});

function writeMessage(msg) {
  port.write(msg, function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('Message written: ' + msg);
  });
}

app.get('/stop', function(req, res) {
  console.log('Request to stop');
  var msg = '000#';
  writeMessage(msg);
});

app.get('/forward/:time', function(req, res) {
  var time = req.params.time;
  console.log('Request to move forward for ' + time + 'ms');
  var msg = '001#' + time + ";";
  writeMessage(msg);
});

app.get('/back/:time', function(req, res) {
  var time = req.params.time;
  console.log('Request to move backward for ' + time + 'ms');
  var msg = '002#' + time + ";";
  writeMessage(msg);
});

app.get('/right/:time', function(req, res) {
  var time = req.params.time;
  console.log('Request to turn right for ' + time + 'ms');
  var msg = '003#' + time + ";";
  writeMessage(msg);
});

app.get('/left/:time', function(req, res) {
  var time = req.params.time;
  console.log('Request to turn left for ' + time + 'ms');
  var msg = '004#' + time + ";";
  writeMessage(msg);
});

app.get('/blink/:time', function(req, res) {
  var time = req.params.time;
  console.log('Request to blink for ' + time + 'ms');
  var msg = '005#' + time + ";";
  writeMessage(msg);
});

app.get('/distance', function(req, res) {
  var msg = '006#' + time + ";";
  writeMessage(msg);
});

app.listen(8080);
