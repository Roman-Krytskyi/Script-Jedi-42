// http://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(arr) {
  const length = Math.min(...arr.map((shortest) => shortest.length));
  return arr.map((shortest) => shortest.slice(0, length));
}

// http://www.codewars.com/kata/57277a31e5e51450a4000010
function firstToLast(str, c) {
  return str.includes(c) ? str.lastIndexOf(c) - str.indexOf(c) : -1;
}

// http://www.codewars.com/kata/57280481e8118511f7000ffa
function splitAndMerge(string, separator) {
  return string
    .split(' ')
    .map((words) => words.split('').join(separator))
    .join(' ');
}
