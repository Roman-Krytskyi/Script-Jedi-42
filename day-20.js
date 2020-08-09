// http://www.codewars.com/kata/5735e39313c205fe39001173
const countAnimals = (animals,count) => count.map(el=>(animals.match(new RegExp(el,"g"))||[]).length);

// http://www.codewars.com/kata/573975d3ac3eec695b0013e0
function findSimilarity(str, word) {
  let innerWord = word[0] + word.slice(1, -1).replace(/./g, '.') + word.slice(-1);
  let check = new RegExp('^' + innerWord + '$');
  return str
    .split(' ')
    .filter((v) => check.test(v))
    .join(' ');
}

// https://www.codewars.com/kata/573bca07dffc1aa693000139

var regex = /^-?9.*0000$/;
