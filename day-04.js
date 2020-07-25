// http://www.codewars.com/kata/57216d4bcdd71175d6000560
function padIt(str, n) {
  let i = 0;
  while (i < n) {
    if (i % 2 === 0) {
      str = '*' + str;
    } else {
      str += '*';
    }
    i = i + 1;
  }
  return str;
}

// http://www.codewars.com/kata/5721a78c283129e416000999
function pickIt(arr) {
  let odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}

// http://www.codewars.com/kata/5721c189cdd71194c1000b9b
function grabDoll(dolls) {
  let bag = [];
  for (let i = 0; i <= dolls.length; i++) {
    if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
      bag.push(dolls[i]);
    } else {
      continue;
    }
    if (bag.length === 3) {
      break;
    }
  }
  return bag;
}

// http://www.codewars.com/kata/5722b3f0bd5583cf44001000
function giveMeFive(obj) {
  let result = [];
  for (let key in obj) {
    if (key.length === 5) result.push(key);
    if (obj[key].length === 5) result.push(obj[key]);
  }
  return result;
}
