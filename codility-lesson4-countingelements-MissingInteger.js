/*
https://app.codility.com/programmers/lessons/4-counting_elements/

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

function solution(A) {
  const obj = {};
  const N = A.length;
  let result;

  for (let i = 0; i < N; i++) {
    const key = A[i];

    if (key > 0 && !obj[key]) {
      obj[key] = 'found';
    }
  }

  const objKeysLength = Object.keys(obj).length;

  for (let key = 1; key <= objKeysLength; key++) {
    if (!obj[key]) {
      result = key;
      break;
    }
  }

  return result ? result : objKeysLength + 1;
}

console.log('solution([1, 3, 6, 4, 1, 2]) = ', solution([1, 3, 6, 4, 1, 2]));
// 5

console.log('solution([1, 2, 3]) = ', solution([1, 2, 3]));
// 4

console.log('solution([-1, -3]) = ', solution([-1, -3]));
// 1
