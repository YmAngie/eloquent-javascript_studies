'use strict';

function loop(value, testFunction, updateFunction, bodyFunction) {
  for (let i = 1; i <= value; value--) {
    if (testFunction(value) === false) {
      return;
    } else {
      bodyFunction(value);
      updateFunction();
    }
  }
}

loop(3, n => n > 0, n => n - 1, console.log);

// → 3
// → 2
// → 1


// After looking up to Solutions
'use strict';

function loop(start, testFunction, updateFunction, bodyFunction) {
  for (let value = start; testFunction(value); value = updateFunction(value)) {
    bodyFunction(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1