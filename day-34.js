// https://www.codewars.com/kata/basic-subclasses-adam-and-eve/
class God{
/**
 * @returns Human[]
 */
  static create(){
   return [new Man, new Woman];
  }
}
class Human{}
class Man extends Human{}
class Woman extends Human{}

// https://www.codewars.com/kata/56ff9b53140fcca90b000530/
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, 'Labrador', 'Large', master, true);
  }
}

// https://www.codewars.com/kata/55a144eff5124e546400005a
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get info() {
    return `${this.name}s age is ${this.age}`;
  }
