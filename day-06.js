// https://www.codewars.com/kata/maximum-multiple/train/javascript
let maxMultiple = (divisor, bound) => {
  for (let n = bound; n >= 0; n--) if (n % divisor === 0) return n;
};

// https://www.codewars.com/kata/is-he-gonna-survive/train/javascript
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

// https://www.codewars.com/kata/59441520102eaa25260000bf
function unusualFive() {
  return 'fives'.length;
}
