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
  // Can't figure out how to get reult back to Blockly using fetch/promises/callbacks
  // Crappy workaround using synchronous xhr (wtf!) follows
  AJAX = new XMLHttpRequest();
  if (AJAX) {
     AJAX.open("GET", '/distance', false);
     AJAX.send(null);
     return AJAX.responseText;
  }
  else {
     return false;
  }
};
