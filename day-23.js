// http://www.codewars.com/kata/unpacking-arguments
const spread = (func, args) => func(...args);

// http://www.codewars.com/kata/for-the-sake-of-argument
const numbers = (...num) => num.every(el => typeof el === 'number');
