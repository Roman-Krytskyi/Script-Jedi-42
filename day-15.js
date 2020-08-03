// http://www.codewars.com/kata/572ab0cfa3af384df7000ff8
const shuffleIt = (arr, ...lasts) => {
  const solution = [...arr];

  lasts.forEach(([one, two]) => {
    const [first, second] = [solution[one], solution[two]];
    [solution[one], solution[two]] = [second, first];
  });

  return solution;
};

// http://www.codewars.com/kata/572af273a3af3836660014a1
const infiniteLoop = (arr, d, n) => {
  for (let i = 1; i <= n; i++) {
    if (d === 'left') {
      arr[2].push(arr[0].shift());
      arr[1].push(arr[2].shift());
      arr[0].push(arr[1].shift());
    }
    if (d === 'right') {
      arr[0].unshift(arr[2].pop());
      arr[1].unshift(arr[0].pop());
      arr[2].unshift(arr[1].pop());
    }
  }
  return arr;
};

// http://www.codewars.com/kata/572cb264362806af46000793
function threeInOne(arr) {
  let solution = [];
  for (var i = 0; i < arr.length; i += 3) {
    solution.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
  return solution;
}
