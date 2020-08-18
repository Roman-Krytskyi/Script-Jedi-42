// https://www.codewars.com/kata/how-new-works
var myObj = {};
myObj.__proto__ = MyObject.prototype;
MyObject.call(myObj);

// http://www.codewars.com/kata/replicate-new
function nouveau(Constructor, ...args) {
  const mainValue = Object.create(Constructor.prototype);
  const newValue = Constructor.apply(mainValue, args);
  return newValue === Object(newValue) ? newValue : mainValue;
}

