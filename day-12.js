// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript
function areEqual(s1, s2) {
  for (let a of s1) if (!s2.has(a)) return false;
  for (let a of s2) if (!s1.has(a)) return false;
  return true;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}
