// http://www.codewars.com/kata/write-javascripts-call-function-using-apply
Function.prototype.call = function() {
  const args = Array.prototype.slice.apply(arguments,[1]);
  return this.apply(arguments[0], args);
};

// http://www.codewars.com/kata/anonymous-returns
name = 'The Window';
var alpha = {
  name: 'My Alpha',
  getNameFunc: function () {
    let bound = this;
    return function () {
      return bound.name;
    };
  },
};
