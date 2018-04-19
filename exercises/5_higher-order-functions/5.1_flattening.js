'use strict';

let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArray = arrays.reduce(function(flattened, current) {
  return flattened.concat(current);
});
                                   
console.log(flattenedArray);

// [1, 2, 3, 4, 5, 6]