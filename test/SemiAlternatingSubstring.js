function solution(S) {
  const N = S.length;

  let maxLen = 0;
  let left = 0;
  for (let i = 0; i < N; i++) {
    const right = i;
    if (
      right - left + 1 >= 3 &&
      S[right] == S[right - 1] &&
      S[right - 1] == S[right - 2]
    ) {
      left = right - 1;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log("solution('baaabbabbb') = ", solution('baaabbabbb'));
// 7

console.log("solution('babba') = ", solution('babba'));
// 5

console.log("solution('abaaa') = ", solution('abaaa'));
// 4
