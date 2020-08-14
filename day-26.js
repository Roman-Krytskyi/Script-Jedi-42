//http://www.codewars.com/kata/power-bind
Function.prototype.bind = function (ctx) {
  var newFunc = this
  return function(...args) {
    return newFunc.call(this === global ? ctx :this, ...args)
  }
}

// https://www.codewars.com/kata/sort-with-arrow-functions
var OrderPeople = function(people){
  return people.sort((a,b) => a.age - b.age );
}
