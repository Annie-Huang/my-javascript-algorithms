function solution(A) {
  const N = A.length;
  let currDirection = 'undetermined';
  let hillCount = 0;
  let valleyCount = 0;
  let eitherCount = 0;

  if (N == 1) {
    return 1;
  }

  for (let i = 1; i < N; i++) {
    if (A[i] == A[i - 1]) {
      // do nothing;
    } else if (A[i] > A[i - 1]) {
      if (currDirection == 'undetermined') {
        currDirection = 'up';
        eitherCount++;
      } else if (currDirection == 'up') {
        // do nothing;
      } else {
        // 'down' direction
        currDirection = 'up';
        valleyCount++;
      }
    } else {
      if (currDirection == 'undetermined') {
        currDirection = 'down';
        eitherCount++;
      } else if (currDirection == 'up') {
        hillCount++;
        currDirection = 'down';
      } else {
        // 'down' direction
        // do nothing.;
      }
    }
  }

  return hillCount + valleyCount + eitherCount + 1;
}

console.log('solution([1]) = ', solution([1]));
// 1

console.log('solution([1, 2]) = ', solution([1, 2]));
// 2

console.log('solution([2, 1]) = ', solution([2, 1]));
// 2

console.log(
  'solution([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5]) = ',
  solution([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5]),
);
// 4

console.log('solution([-3, -3]) = ', solution([-3, -3]));
// 1
