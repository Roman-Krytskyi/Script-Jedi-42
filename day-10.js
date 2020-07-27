// http://www.codewars.com/kata/5728203b7fc662a4c4000ef3
function alienLanguage(str) {
  let words = str.split(' ');
  return words = words.map(change => change.slice(0, -1).toUpperCase() + change.slice(-1).toLowerCase()).join (' ');
}
