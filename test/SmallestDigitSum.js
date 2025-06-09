function solution(N) {
  if (N < 0) {
    return 0;
  } else if (N <= 9) {
    return N;
  }

  let str = '';

  while (N >= 9) {
    str = 9 + str;
    N -= 9;
  }

  return N > 0 ? N + str : str;
}

console.log('solution(16) = ', solution(16));
// 79

console.log('solution(19) = ', solution(19));
// 199

console.log('solution(7) = ', solution(7));
// 7
