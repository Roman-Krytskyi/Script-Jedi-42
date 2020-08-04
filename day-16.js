// http://www.codewars.com/kata/572df796914b5ba27c000c90
function sortIt(arr) {
  const newArr = JSON.parse(JSON.stringify(arr));
  newArr.sort((a, b) => {
    let sortA = arr.filter((i) => i === a).length;
    let sortB = arr.filter((i) => i === b).length;
    if (sortA === sortB) {
      return b - a;
    } else if (sortA > sortB) {
      return 1;
    } else return -1;
  });
  return newArr;
}

// http://www.codewars.com/kata/572fdeb4380bb703fc00002c
function isolateIt(arr) {
  const newArr = arr.map((val, id) => {
    if (val.length % 2 === 0) {
      return val.slice(0, val.length / 2) + '|' + val.slice(val.length / 2);
    }
    if (val.length % 2 !== 0) {
      return val.slice(0, val.length / 2) + '|' + val.slice(val.length / 2 + 1);
    }
  });
  return newArr;
}

// http://www.codewars.com/kata/573023c81add650b84000429
function countGrade(scores) {
  let count = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };

  scores.filter((x) => {
    if (x === 100) {
      count[`S`]++;
    } else if (x < 100 && x >= 90) {
      count[`A`]++;
    } else if (x < 90 && x >= 80) {
      count[`B`]++;
    } else if (x < 80 && x >= 60) {
      count[`C`]++;
    } else if (x < 60 && x >= 0) {
      count[`D`]++;
    } else {
      count[`X`]++;
    }
  });
  return count;
}

// http://www.codewars.com/kata/57308546bd9f0987c2000d07

function mirrorImage(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      arr[i].toString().split('').reverse().join('') === arr[i + 1].toString()
    ) {
      return [arr[i], arr[i + 1]];
    }
  }
  return [-1, -1];
}

