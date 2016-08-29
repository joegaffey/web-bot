var actions = {};
actions.stop = 0;
actions.forward = 1;
actions.backward = 2;
actions.right = 3;
actions.left = 4;
actions.ledOn = 5;
actions.ledOff = 6;
actions.ping = 7;

var sensors = {};
sensors.distance = -1;

var es = new EventSource("/events");

// es.onmessage = function (event) {
//   console.log(event);
//   sensors.distance = parseInt(event.data);
// };

es.addEventListener('message', function(e) {
  console.log(e.data);
  sensors.distance = parseInt(e.data);
}, false);

robot_left = function() {
  fetch('/action/' + actions.left);
};

robot_right = function(time) {
  fetch('/action/' + actions.right);
};

robot_forward = function(time) {
  fetch('/action/' + actions.forward);
};

robot_backward = function(time) {
  fetch('/action/' + actions.backward);
};

robot_ledOn = function() {
  fetch('/action/' + actions.ledOn);
};

robot_ledOff = function() {
  fetch('/action/' + actions.ledOff);
};

robot_stop = function() {
  fetch('/action/' + actions.stop);
};

robot_ping = function() {
  fetch('/action/' + actions.ping);
};

robot_get_distance = function() {
  return sensors.distance;
};
