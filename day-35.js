// https://www.codewars.com/kata/js-prototypes-module-number-1-object-prototypes
Object.prototype.description = "TODO: GIVE ME A DESCRIPTION";

// https://www.codewars.com/kata/javascript-class-like-objects
let Animal = class{
    constructor(name, type) {
      this.type = type;
      this.name = name;
    }
  toString(){return `${this.name} is a ${this.type}`};
}
