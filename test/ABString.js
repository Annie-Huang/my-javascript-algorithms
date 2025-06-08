function solution(S) {
  let hasSeenB = false;
  let arr = S.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'b' && !hasSeenB) {
      hasSeenB = true;
    } else if (arr[i] == 'a' && hasSeenB) {
      return false;
    }
  }

  return true;
}

console.log("solution('aabbb') = ", solution('aabbb'));
// true
console.log("solution('ba') = ", solution('ba'));
// false

console.log("solution('aaa') = ", solution('aaa'));
// true

console.log("solution('b') = ", solution('b'));
// true

console.log("solution('abba') = ", solution('abba'));
// false
