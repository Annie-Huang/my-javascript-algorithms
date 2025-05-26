/*
https://app.codility.com/demo/take-sample-test/

Task 1

Task description
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

*/

// function compareNumbers(a, b) {
//   return a - b;
// }

function solution(A) {
  // Implement your solution here
  // A.sort(compareNumbers);
  A.sort();
  // console.log('A=', A);

  let result = 1;
  const length = A.length;
  // for (let i = 0; i < length; i++) {
  //   if (A[i] <= 0) {
  //     // do nothing.
  //   } else if (A[i] === result) {
  //     // do nothing
  //   } else if (A[i] === result + 1) {
  //     result = A[i];
  //   } else if (A[i] > result + 1) {
  //     console.log('A[i]=', A[i]);
  //     console.log('result=', result);
  //     result = result + 1;
  //     console.log('result=', result);
  //     break;
  //   }
  //
  //   console.log('result=', result);
  // }

  for (let i = 0; i < length; i++) {
    if (A[i] === result + 1) {
      result = A[i];
    } else if (A[i] > result + 1) {
      //   console.log('A[i]=', A[i]);
      //   console.log('result=', result);
      result = result + 1;
      //   console.log('result=', result);
      break;
    }

    // console.log('result=', result);
  }

  if (result === A[length - 1]) {
    result = result + 1;
  }

  return result;
}

console.log('solution([1, 3, 6, 4, 1, 2]) =', solution([1, 3, 6, 4, 1, 2]));
console.log('solution([1, 2, 3]) =', solution([1, 2, 3]));
console.log('solution([-1, -3]) =', solution([-1, -3]));
