// https://www.codewars.com/kata/basics-generators-number-1/javascript
function* generator() {
  let i = 1;
  while (true) {
    let value = yield i++;
    if (value !== undefined) i = value;
  }
}

// https://www.codewars.com/kata/5637ead70013386e30000027/
function* generator(a) {
  let b = 1;
  while (b++) {
    yield `${a} x ${b-1} = ${a*(b-1)}`
  }
}
