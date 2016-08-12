var SerialPort = require('serialport');
var port = new SerialPort('COM4');

var express = require('express');
var sse = require('server-sent-events');
var app = express();

port.on('open', function() {});

// open errors will be emitted as an error event
port.on('error', function(err) {
  console.log('Error: ', err.message);
})

app.use(express.static(__dirname + '/public'));

app.get('/events', sse, function(req, res) {
  //TBD
});

app.get('/forward', function(req, res) {
  port.write('001#', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });
});

app.get('/stop', function(req, res) {
  port.write('000#', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });
});

app.get('/back', function(req, res) {
  port.write('002#', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });
});

app.get('/right', function(req, res) {
  port.write('003#', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });
});

app.get('/left', function(req, res) {
  port.write('004#', function(err) {
    if (err) {
      return console.log('Error on write: ', err.message);
    }
    console.log('message written');
  });
});

app.listen(8080);
