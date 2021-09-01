"use strict";

window.addEventListener("DOMContentLoaded", initLoop);
const array = [0];
let counter = 0;
// unshift to add at the begining
// length to make sure its not longer than 9 items

function initLoop() {
  console.log(array);
  loop();
}

function loop() {
  counter++;

  if (array.length < 9) {
    array.unshift(counter);
  } else {
    array.unshift(counter);
    array.pop([9]);
  }

  setTimeout(loop, 600);
  console.log(array);
}
