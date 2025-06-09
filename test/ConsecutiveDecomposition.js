function solution(A, B) {
  let i = 1;
  let currValue = i * (i + 1);
  let count = 0;

  while (currValue <= B) {
    if (currValue >= A) {
      count++;
    }
    i++;
    currValue = i * (i + 1);
  }

  return count;
}

console.log('solution(6, 20) = ', solution(6, 20));
// 3

console.log('solution(21, 29) = ', solution(21, 29));
// 0
