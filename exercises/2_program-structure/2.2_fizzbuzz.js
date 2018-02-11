"use strict";

// Fizz, Buzz
for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 != 0)) {
    console.log('Fizz');
  } else if ((i % 5 === 0) && (i % 3 != 0)) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
  

// Fizz, Buzz, FizzBuzz
for (let i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log('FizzBuzz');
  } else if ((i % 3 === 0) && (i % 5 != 0)) {
    console.log('Fizz');
  } else if ((i % 5 === 0) && (i % 3 != 0)) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}


// Fizz, Buzz, FizzBuzz (02/11/2018 version)
"use strict";

for (let i = 1; i <= 100; i++) {
  let processedI = '';

  if (i % 3 == 0) {
    processedI += 'Fizz';
  } 
  if (i % 5 == 0) {
    processedI += 'Buzz';
  }
  
  console.log(processedI || i);
}
