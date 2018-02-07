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

We can set the default value to the argument, which can be omitted by adding it like `argument = value`. 


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

#### 1. 
