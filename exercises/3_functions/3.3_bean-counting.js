"use strict";

function countBs(str) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'B') {
      num += 1;
    }
  }
  return num;
}

function countChar(str, char) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      num += 1;
    }
  }
  return num;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4