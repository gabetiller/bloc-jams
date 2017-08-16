
// Refactor the individual style calls of the landing.js script to be a single function named revealPoint that:
// takes a single argument: the index of the points class node element, and
// gets called in a for loop.

var revealPoint = function() {
var points = document.getElementsByClassName('point');
for (var i=0; i<points.length; i++) {
  points[i].style.opacity = 1;
  points[i].style.transform = "scaleX(1) translateY(0)";
  points[i].style.msTransform = "scaleX(1) translateY(0)";
  points[i].style.WebkitTransform = "scaleX(1) translateY(0)";

  }

}
