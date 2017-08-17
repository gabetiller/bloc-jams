// for Each should take two arguments, an array and a function
// and then call the function on each element in the array
function forEach(array, funct) {
  for (var i=0; i<array.length; i++){
    funct(array[i]);
  }
}

// cmd + [ cmd + ] - indenting
// cmd + d – select word, run again to select next copy of word
