// http://www.codewars.com/kata/5722fd3ab7162a3a4500031f
function whatNumberIsIt(n) {
  switch (n) {
    case Number.MAX_VALUE:
      return 'Input number is Number.MAX_VALUE';
    case Number.MIN_VALUE:
      return 'Input number is Number.MIN_VALUE';
    case -Infinity:
      return 'Input number is Number.NEGATIVE_INFINITY';
    case Infinity:
      return 'Input number is Number.POSITIVE_INFINITY';
    case Number(n):
      return 'Input number is ' + n;
    default:
      return 'Input number is Number.NaN';
  }
}

//function whatNumberIsIt(n) {
//  switch (n) {
//    case Number.MAX_VALUE:
//      return 'Input number is Number.MAX_VALUE';
//    case Number.MIN_VALUE:
//      return 'Input number is Number.MIN_VALUE';
//    case -Infinity:
//      return 'Input number is Number.NEGATIVE_INFINITY';
//    case Infinity:
//      return 'Input number is Number.POSITIVE_INFINITY';
//    case NaN : 
//      return 'Input number is Number.NaN'
//    default:
//      return 'Input number is ' + n;
//  }
//}
//Таке рішення викликає проблему: Expected: '\'Input number is Number.NaN\'', instead got: '\'Input number is NaN\''. Не можу зрозуміти, що тут не так?


// https://www.codewars.com/kata/57238ceaef9008adc7000603
function colorOf(r, g, b) {
  r.toString(16).length < 2 ? (r = '0' + r.toString(16)) : (r = r.toString(16));
  g.toString(16).length < 2 ? (g = '0' + g.toString(16)) : (g = g.toString(16));
  b.toString(16).length < 2 ? (b = '0' + b.toString(16)) : (b = b.toString(16));
  return '#' + r + g + b;
}

// http://www.codewars.com/kata/57256064856584bc47000611
function howManySmaller(arr, n) {
  return arr.filter((result) => +result.toFixed(2) < n).length;
}
