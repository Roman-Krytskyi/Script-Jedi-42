// http://www.codewars.com/kata/a-function-within-a-function
const always = (n) => () => n;

// https://www.codewars.com/kata/singleton-pattern/train/javascript
var Singleton = (function(){
  let instance;
  
  return function () {
    return instance || (instance = this)
  }
}) ();
