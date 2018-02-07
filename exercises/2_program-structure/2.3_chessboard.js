"use strict";

let string = '';
const size = 8;
let newString = createNewString(string, size);

function createNewString(string, size) {
  for (let i = 1; i <= size; i++ ) {
    for (let j = 1; j <= size; j++) {
      if (((i + j) % 2) === 0) {
        string += ' ';
      } else {
        string += '#';
      }
    }
    string += '\n';
  }
  return string;
}

console.log(newString);