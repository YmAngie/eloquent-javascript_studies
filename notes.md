# Notes by chapters

## Chapter 1. Values, Types, and Operators

#### 1. Backtick-quoted strings (*template literals*):

- are able to span lines,
- can embed other values (the expression written inside ${} in the template literal, will be computed, converted to a string, and included at that position).

```javascript
`half of 100 is ${100 / 2}`
// half of 100 is 50
```


## Chapter 2. Program structure

#### 1. Remember about the switch statement!

```javascript
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
    break;
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```


## Chapter 3. Functions

#### 1. Number of arguments:

- if you pass too many, the extra ones are ignored,
- if you pass too few, the missing parameters get assigned the value `undefined`.

**Pros:** 
This behavior can be used to allow a function to be called with different amounts of arguments.

**Cons:**
You won't be informed about the wrong number of arguments in the function.

```javascript
function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5
```

#### 2. Default argument

We can set the default value to the argument, which can be omitted, by adding it like `argument = value`. 


```javascript
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```

## Chapter 4. Data Structures: Objects and Arrays

#### 1. Adding the object (short-hand)

Instead of declaring properties like `events: events`, we just give a property name. 

```javascript
let journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}
addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);
console.log(journal);
```

#### 2. Rest parameters

To make function accept any number of arguments, we can put three dots before the function’s last parameter.

```javascript
function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}
console.log(max(4, 1, 9, -2));
// → 9
```

When such a function is called, the rest parameter is bound to an array containing all further arguments. If there are other parameters before it, their values aren’t part of that array. 

#### 3. Destructuring

Destructuring allows us to assign values from object or array to variables.

```javascript
let {prop : varName = default, ...} = object
```

**Colon (:)** allows us to assign the value of `prop` propery to the variable `varName` (can not be used with arrays, because of order significancy).

**Equal sign (=)** gives a default value, if no value exist.


```javascript
let [var1 = default, var2, ...rest] = array
```

We can use existing variable and not only create new one. But in this way we have to use parentheses. 

#### 4. Ternary operator in default parameter

We can use ternary operator to set default values for function parameters.

```javascript
function range(start, end, step = start < end ? 1 : -1) {
  //
}
```

#### 5. Remember about the looping through an array!

```javascript
for (let value of array) {
  sum += value;
}
```

## Chapter 5. Higher-Ordered Functions

#### 1. Arrow functions (*reminder*)

Parenthesize are not necessary when using with one parameter
```javascript
(singleParam) => { statements }
singleParam => { statements }
```

Function without parameters needs parenthesize
```javascript
() => { statements }
() => expression 
```

Parenthesize the body to return an object literal expression
```javascript
params => ({foo: bar})
```

Arrow functions can have either a "concise body" or the usual "block body".
In a concise body, only an expression is specified, which becomes the explicit return value. In a block body, you must use an explicit return statement.

```javascript
// Concise body syntax, implied "return"
var func = x => x * x;                  

// With block body, explicit "return" needed
var func = (x, y) => { return x + y; }; 
```

Arrow functions do not have their own:

- `this`, the `this` value of the enclosing execution context is used,
- `arguments` object, thus, `arguments` will be simply a reference to the arguments of the enclosing scope














