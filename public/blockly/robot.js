var robot = {};

robot.left = function(time) {
  syncRequest("/left/" + time);
};

robot.right = function(time) {
  syncRequest("/right/" + time);
};

robot.forward = function(time) {
  syncRequest("/forward/" + time);
};

robot.backward = function(time) {
  syncRequest("/backward/" + time);
};

robot.stop = function() {
  syncRequest("/stop");
};

robot.blink = function(time) {
  syncRequest("/blink/" + time);
};

robot.ledOn = function() {
  syncRequest("/led-on");
};

robot.ledOff = function() {
  syncRequest("/led-off");
};

robot.get_distance = function() {
  return syncRequest('/distance');
};

// Can't figure out how to get reult back to Blockly using fetch/promises/callbacks
// Crappy workaround using synchronous xhr (wtf!) follows
function syncRequest(url) {
  AJAX = new XMLHttpRequest();
  if (AJAX) {
     AJAX.open("GET", url, false);
     AJAX.send(null);
     return AJAX.responseText;
  }
  else {
     return false;
  }
}
