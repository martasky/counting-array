"use strict";

window.addEventListener("DOMContentLoaded", initLoop);
const countArray = [0];
let counter = 0;
// unshift to add at the begining
// length to make sure its not longer than 9 items

function initLoop() {
  console.log(countArray);
  loop();
}

function loop() {
  counter++;

  if (countArray.length < 9) {
    countArray.unshift(counter);
  } else {
    countArray.unshift(counter);
    countArray.pop([9]);
  }

  setTimeout(loop, 600);
  console.log(countArray);
}
