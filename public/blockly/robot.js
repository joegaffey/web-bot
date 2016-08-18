var robot = {};

robot.left = function(time) {
  fetch("/left/" + time);
};

robot.right = function(time) {
  fetch("/right/" + time);
};

robot.forward = function(time) {
  fetch("/forward/" + time);
};

robot.backward = function(time) {
  fetch("/backward/" + time);
};

robot.stop = function() {
  fetch("/stop");
};

robot.blink = function(time) {
  fetch("/blink/" + time);
};

robot.ledOn = function() {
  fetch("/led-on");
};

robot.ledOff = function() {
  fetch("/led-off");
};

robot.get_distance = function() {
  var res = '';
  fetch("/distance").then(function(response) {
    return response.text();
  }).then(function(text) {
    res = text;
  });
  return res;
};
