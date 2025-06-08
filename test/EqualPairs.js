function solution(A) {
  const obj = {};
  const N = A.length;

  if (N % 2 != 0) return false;

  for (let i = 0; i < N; i++) {
    const key = A[i];

    if (!obj[key]) {
      obj[key] = 1;
    } else {
      obj[key] += 1;
    }
  }

  // console.log('obj=', obj);

  const valueArr = Object.values(obj);
  for (let i = 0; i < valueArr.length; i++) {
    // console.log('valueArr[i]=', valueArr[i]);
    if (valueArr[i] % 2 != 0) {
      return false;
    }
  }

  return true;
}

console.log('solution([1,2,2,1]) = ', solution([1, 2, 2, 1]));
// true

console.log('solution([7,7,7]) = ', solution([7, 7, 7]));
// false

console.log('solution([1,2,2,3]) = ', solution([1, 2, 2, 3]));
// false

console.log('solution([0]) = ', solution([0]));
// false

console.log(
  'solution([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9]) = ',
  solution([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]),
);
// true

console.log(
  'solution([1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10]) = ',
  solution([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10]),
);
// false
