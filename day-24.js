// http://www.codewars.com/kata/duplicate-arguments
function solution() {
  for (let args = 0; args < arguments.length; args++) {
    for (let checkArgs = args + 1; checkArgs < arguments.length; checkArgs++) {
      if (arguments[args] === arguments[checkArgs]) {
        return true;
      }
    }
  }
  return false;
}

// http://www.codewars.com/kata/last
function last(list) {
  if (arguments.length > 1) {
    return arguments[arguments.length - 1];
  }
  if (typeof list === 'object') {
    return list[list.length - 1];
  } else if (typeof list === 'string') {
    return list.charAt(list.length - 1);
  }
  return list;
}
