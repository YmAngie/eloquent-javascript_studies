// Initial version
"use strict";

function reverseArray(array) {
  let newArray = [];
  for(let el of array) {
    newArray.unshift(el);
  }
  return newArray;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]


// After looking up to Hints (add reverseArrayInPlace function)
"use strict";

function reverseArray(array) {
  let newArray = [];
  for(let el of array) {
    newArray.unshift(el);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for(let i = 0; i < Math.floor(array.length / 2); i++) {
    let tempVal = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = tempVal;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
