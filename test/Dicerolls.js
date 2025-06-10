function solution(A, F, M) {
  const N = A.length;

  const sumA = A.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  const missingTotal = (N + F) * M - sumA;
  // console.log('F=', F);
  // console.log('missingTotal=', missingTotal);

  if (missingTotal < F || missingTotal > F * 6) {
    return [0];
  }

  const initValue = Math.floor(missingTotal / F);
  // console.log('initValue=', initValue);
  const finalArr = new Array(F).fill(initValue);
  // console.log('finalArr=', finalArr);

  let remainder = missingTotal % F;
  let i = 0;
  while (remainder != 0) {
    finalArr[i] += 1;
    i++;
    remainder--;
  }

  return finalArr;
}

console.log('solution([3, 2, 4, 3], 2, 4) = ', solution([3, 2, 4, 3], 2, 4));
// [6, 6]

console.log('solution([1, 5, 6], 4, 3) = ', solution([1, 5, 6], 4, 3));
// [3, 2, 2, 2]

console.log('solution([1, 2, 3, 4], 4, 6) = ', solution([1, 2, 3, 4], 4, 6));
// [0]

console.log('solution([6, 1], 1, 1) = ', solution([6, 1], 1, 1));
// [0]
