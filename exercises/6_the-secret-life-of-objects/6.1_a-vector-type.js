'use strict';

class Vec {
  constructor(x, y) {
    this.x = x,
    this.y = y
  }
  
  plus(anotherVector) {
    this.vectorAfterPlus;
    this.vectorAfterPlus = {
      x: this.x + anotherVector.x,
      y: this.y + anotherVector.y
    }
    return this.vectorAfterPlus;
  }
  
  minus(anotherVector) {
    this.vectorAfterMinus;
    this.vectorAfterMinus = {
      x: this.x - anotherVector.x,
      y: this.y - anotherVector.y
    }
    return this.vectorAfterMinus;
  }
}


// After looking up the Hints (add get method)
'use strict';

class Vec {
  constructor(x, y) {
    this.x = x,
    this.y = y
  }
  
  plus(anotherVector) {
    this.vectorAfterPlus;
    this.vectorAfterPlus = {
      x: this.x + anotherVector.x,
      y: this.y + anotherVector.y
    }
    return this.vectorAfterPlus;
  }
  
  minus(anotherVector) {
    this.vectorAfterMinus;
    this.vectorAfterMinus = {
      x: this.x - anotherVector.x,
      y: this.y - anotherVector.y
    }
    return this.vectorAfterMinus;
  }
  
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}


// After looking up the Solutions (refactor plus and minus methods)
'use strict';

class Vec {
  constructor(x, y) {
    this.x = x,
    this.y = y
  }
  
  plus(anotherVector) {
    return new Vec(this.x + anotherVector.x, this.y + anotherVector.y);
  }
  
  minus(anotherVector) {
    return new Vec(this.x - anotherVector.x, this.y - anotherVector.y);
  }
  
  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5