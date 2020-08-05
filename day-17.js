// http://www.codewars.com/kata/5731861d05d14d6f50000626
function bigToSmall(arr) {
  const newArr = [].concat(...arr);
  newArr.sort((a, b) => b - a);
  return newArr.join('>');
}

// http://www.codewars.com/kata/573156709a231dcec9000ee8
function tailAndHead(arr) {
  let res = 1;
  arr.reduce((prev, curr) => {
    let s1 = prev.toString();
    let s2 = curr.toString();
    res *= parseInt(s1[s1.length - 1]) + parseInt(s2[0]);
    return curr;
  });
  return res;
}

// http://www.codewars.com/kata/5732b0351eb838d03300101d
function blackAndWhite(arr) {
  if (!Array.isArray(arr)) return `It's a fake array`;
  if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1)
    return `It's a black array`;
  return `It's a white array`;
}

// https://www.codewars.com/kata/array-number-reduce/train/javascript
Array.prototype.reduce = function (process, initial) {
  if (initial === undefined) {
    initial = this.shift();
  }
  for (let i = 0; i < this.length; i++) {
    initial = process(initial, this[i]);
  }
  return initial;
};
