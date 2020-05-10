# Scope Activity #1

## Instructions

* Open `Unsolved/index.html` in a browser and then open the console.

* With your neighbor, compare the results in the console to the JavaScript in `index.html` and answer the questions in the comments.

* **HINT**: Read the [MDN docs on closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)



function myLocalScope() {
    'use strict';
  
    // Only change code below this line
  var myVar = "Data stored";
    console.log('inside myLocalScope', myVar);
  }
myLocalScope();

function timesFive(num) {
    return num * 5;
  }

  function timesFive(num) {
    return num * 5;
  
  }
  
  console.log(timesFive(5));
  console.log(timesFive(2));
  console.log(timesFive(0));

  // Setup
var sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
    sum = sum + 5;
}
sum();

// Only change code above this line

addThree();
addFive();