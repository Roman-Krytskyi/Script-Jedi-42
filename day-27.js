// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a
const greet_abe = () => `Hello, Abe!`;
const greet_ben = () => `Hello, Ben!`;

// https://www.codewars.com/kata/shifty-closures/train/javascript
function buildFun(n) {
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}
