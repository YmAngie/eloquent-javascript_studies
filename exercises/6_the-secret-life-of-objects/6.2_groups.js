'use strict';

class Group {
  constructor() {
    this.array = [];
  }
  
  add(value) {
    let indexOfValue = this.array.indexOf(value);
    if (indexOfValue === -1) {
      this.array.push(value);
    }
  }
	
  delete(value) {
    let indexOfValue = this.array.indexOf(value);
    if (indexOfValue !== -1) {
      this.array.splice(this.indexOfValue, 1);
    }
  }

  has(value) {
    if (this.array.indexOf(value) !== -1) return true;
    return false;
  }
  
  static from(itterableObject) {
    let group = new Group;
    
    for (let element of itterableObject) {
      group.add(element);
    };
    
    return group;
  }
}


// After looking up the Solutions (refactor add and delete methods)
'use strict';

class Group {
  constructor() {
    this.array = [];
  }
  
  add(value) {
    if (!this.has(value)) this.array.push(value);
  }
	
  delete(value) {
    if(this.has(value)) this.array.splice(this.array.indexOf(value), 1);
  }

  has(value) {
    if (this.array.indexOf(value) !== -1) return true;
    return false;
  }
  
  static from(itterableObject) {
    let group = new Group;
    
    for (let element of itterableObject) {
      group.add(element);
    };
    
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
