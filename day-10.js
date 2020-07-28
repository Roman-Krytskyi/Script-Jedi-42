// http://www.codewars.com/kata/5728203b7fc662a4c4000ef3
function alienLanguage(str) {
  let words = str.split(' ');
  return words = words.map(change => change.slice(0, -1).toUpperCase() + change.slice(-1).toLowerCase()).join (' ');
}

// http://www.codewars.com/kata/57284d23e81185ae6200162a
function topSecret(str) {
  let chars = str.split('');

  for (let i = 0; i < chars.length; i++) {
    let shift = chars[i].charCodeAt();
    if (shift > 67 && shift < 91 || shift > 99 && shift < 123) {
      shift -= 3;
    } else {
      if (shift < 68 && shift > 64 || shift < 100 && shift > 96)
        shift += 23;
    }
    chars[i] = String.fromCharCode(shift);
  }
  return chars.join('');
}
//question1: The top secret file number is...
answer1 = '3420';
//question2: Super agent's name is...
answer2 = 'lDK';
//question3: He stole the treasure is...
answer3 = 'Nail scissors';

// http://www.codewars.com/kata/5729b103dd8bac11a900119e
function fiveLine(s) {
  let i = s.trim();
  return `${i}\n${i}${i}\n${i}${i}${i}\n${i}${i}${i}${i}\n${i}${i}${i}${i}${i}`;
}
