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


## Chapter 6. The Secret Life of Objects

#### 1. Class declarations

- The class declaration is equivalent to the constructor definition (but looks nicer).

```javascript
class Rabbit {
  // constructor function
  constructor(type) {
    this.type = type;
  }
  // constructor's prototype
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");
```

- Class declarations only allow methods—properties that hold functions—to be added to the prototype. 
We can still create such properties by directly manipulating the prototype after we defined the class.

- Class can be used both in statement and in expression positions. When used as an expression, it doesn’t define a binding, but just produces the constructor as a value. 
We are allowed to omit the class name in a class expression.

```javascript
let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello
```

#### 2. Maps

**A map** (noun) is a data structure that associates values (the keys) with other values. 
For example, we might want to map names to ages. It is possible to use objects for this:

```javascript
let ages = {
  // property name: property value
  Boris: 39,
  Liang: 22,
  Júlia: 62
};
```

- But in this situation object method `toString()` will be stored in the object as one of the properties. 
This can disorientate while working with such an object. To avoid it we can pass `null` to `Object.create`:

```javascript
console.log("toString" in Object.create(null));
// → false
```

- But more correct way is to use a special class `Map`. It  allows any type of keys and has next methods: `set`, `get`, `has`.

```javascript
let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log("Is toString's age known?", ages.has("toString"));
// → Is toString's age known? false
console.log("Is toString's age known?", "toString" in ages);
// → Is toString's age known? true
```

- `Object.keys` only returns an object’s own keys, not those in the prototype. 
- `hasOwnProperty` method ignores the object’s prototype.

```javascript
console.log({x: 1}.hasOwnProperty("x"));
// → true
console.log({x: 1}.hasOwnProperty("toString"));
// → false
console.log(Object.keys({x: 1}));
// → ["x"]
```

#### 3. Polymorphism

- **Polymorphism** - is one of the tenets of Object Oriented Programming (OOP). 

- It is the practice of designing objects to share behaviors and to be able *to override shared behaviors with specific ones*.


#### 4. Symbols

- The property names are strings (usually, but no always). So they can also be symbols. 

- **Symbols** are values created with the `Symbol` function. Unlike strings, newly created symbols are unique — we cannot create the same symbol twice.

```javascript
let sym = Symbol("name");
console.log(sym == Symbol("name"));
// → false
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);
// → 55
```

- Symbols are suitable for defining interfaces that can peacefully live alongside other properties, no matter what their names are.

```javascript
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};
​
console.log([1, 2].toString());
// → 1,2
console.log([1, 2][toStringSymbol]());
// → 2 cm of blue yarn
```

- It is possible to include symbol properties in object expressions and classes by using square brackets around the property name.

```javascript
let stringObject = {
  [toStringSymbol]() { return "a jute rope"; }
};
console.log(stringObject[toStringSymbol]());
// → a jute rope
```


#### 5. Getters, setters and statics

- The `get` syntax binds an object property to a function that will be called when that property is looked up.
- The `set` syntax binds an object property to a function to be called when there is an attempt to set that property.

```javascript
class Temperature {
  constructor(celsius) {
    this.celsius = celsius;
  }
  get fahrenheit() {
    return this.celsius * 1.8 + 32;
  }
  set fahrenheit(value) {
    this.celsius = (value - 32) / 1.8;
  }

  static fromFahrenheit(value) {
    return new Temperature((value - 32) / 1.8);
  }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30
```

- **Static methods** are methods stored in a class’ constructor, rather than its prototype.


#### 6. Inheritance

- It's possible to create a new class, much like the old class, but with new definitions for some of its properties. 

- The prototype for the new class derives from the old prototype but adds a new definition for picked method.

- The new class inherits properties and behavior from the old class.

```javascript
class SymmetricMatrix extends Matrix {
  ...
}
```


















