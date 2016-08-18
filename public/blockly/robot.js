var robot = {};

robot.left = function(time) {
  fetch("/left");
};

robot.right = function(time) {
  fetch("/right");
};

robot.forward = function(time) {
  fetch("/forward");
};

robot.backward = function(time) {
  fetch("/backward");
};

robot.stop = function(time) {
  fetch("/stop");
};

robot.blink = function(time) {
  fetch("/blink");
};

robot.get_distance = function() {
  return Math.random() * 100; //TBD
};
