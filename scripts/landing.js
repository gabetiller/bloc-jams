
// Refactor the individual style calls of the landing.js script to be a single function named revealPoint that:
// takes a single argument: the index of the points class node element, and
// gets called in a for loop.
var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
  var revealPoint = function(index) {
    points[index].style.opacity = 1;
    points[index].style.transform = "scaleX(1) translateY(0)";
    points[index].style.msTransform = "scaleX(1) translateY(0)";
    points[index].style.WebkitTransform = "scaleX(1) translateY(0)";

    }

  for (var i = 0; i < points.length; i++) {
  revealPoint(i);
  }
};

window.onload = function() {
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

     window.addEventListener("scroll", function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);
         }

  });
}
