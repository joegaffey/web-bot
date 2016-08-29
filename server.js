var portString = process.argv[2];
var SerialPort = require('serialport');
var port = new SerialPort(portString, { parser: SerialPort.parsers.readline('\n'), baudRate: parseInt(process.argv[3]) });

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var server = app.listen(8080);

var sse = require('server-sent-events');
var sseClient = null;

port.on('open', function() {});

port.on('error', function(err) {
  console.log('Error: ', err.message);
})

app.use(express.static(__dirname + '/public'));

app.get('/events', sse, function(req, res) {
  sseClient = res;
  console.log('Client connected');
});

port.on('data', function (data) {
  console.log("Received: " + data);
  if(sseClient !== null)
    sseClient.sse("data:" + data + '\n\n');
});

app.get('/action/:action', function(req, res) {
  port.write(req.params.action  + '\n');
  console.log('Sent to robot: ' + req.params.action);
  res.send();
});

// setInterval(function() {
//   if(sseClient !== null)
//     sseClient.sse('data:' + new Date().getSeconds() + '\n\n');
// }, 1000);
