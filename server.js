var portString = process.argv[2];
var SerialPort = require('serialport');
var port = new SerialPort(portString);

var express = require('express');
var sse = require('server-sent-events');
var app = express();

var actions = {};
actions.stop = '000#';
actions.forward = '001#';
actions.back = '002#';
actions.right = '003#';
actions.left = '004#';
actions.blink = '005#';
actions.distance = '006#';
actions.led-on = '007#';
actions.led-off = '008#';

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
  var msg = actions.stop;
  writeMessage(msg);
});

app.get('/forward/:time', function(req, res) {
  var time = req.params.time;
  console.log('Request to move forward for ' + time + 'ms');
  var msg = actions.forward + time + ";";
  writeMessage(msg);
});

app.get('/back/:time', function(req, res) {
  var time = req.params.time;
  console.log('Request to move backward for ' + time + 'ms');
  var msg = actions.back + time + ";";
  writeMessage(msg);
});

app.get('/right/:time', function(req, res) {
  var time = req.params.time;
  console.log('Request to turn right for ' + time + 'ms');
  var msg = actions.right + time + ";";
  writeMessage(msg);
});

app.get('/left/:time', function(req, res) {
  var time = req.params.time;
  console.log('Request to turn left for ' + time + 'ms');
  var msg = actions.left + time + ";";
  writeMessage(msg);
});

app.get('/blink/:time', function(req, res) {
  var time = req.params.time;
  console.log('Request to blink for ' + time + 'ms');
  var msg = actions.blink + time + ";";
  writeMessage(msg);
});

app.get('/distance', function(req, res) {
  var msg = actions.distance + time + ";";
  writeMessage(msg);
  res.send(readMessage());
});

app.get('/led-on', function(req, res) {
  console.log('Request to turn on led');
  var msg = actions.led-on;
  writeMessage(msg);
});

app.get('/led-off', function(req, res) {
  console.log('Request to turn off led');
  var msg = actions.led-off;
  writeMessage(msg);
});

app.listen(8080);
