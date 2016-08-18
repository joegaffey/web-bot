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

robot.get_distance = function() {
  return Math.random() * 100; //TBD
};
