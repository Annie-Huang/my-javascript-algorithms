/*
https://app.codility.com/programmers/lessons/3-time_complexity/

Task 1

Task description
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

// When compare with numbers, you HAVE TO WRITE the function.
// https://www.freecodecamp.org/news/how-to-sort-javascript-array-accurately/
function compareNumbers(a, b) {
  return a - b;
}

function solution(A) {
  A.sort(compareNumbers);
  const N = A.length;
  // console.log('A=', A);
  // console.log('N=', N);

  if (N == 0 || A[0] != 1) return 1;

  let currValue = A[0];
  let found = false;
  for (let i = 1; i < N; i++) {
    if (A[i] == currValue + 1) {
      currValue = A[i];
      // console.log('currValue=', currValue);
    } else {
      currValue++;
      found = true;
      // console.log('===== currValue=', currValue);
      break;
    }
  }

  return !found ? currValue + 1 : currValue;
}

console.log('solution([2, 3, 1, 5]) = ', solution([2, 3, 1, 5]));
// 4

console.log('solution([2]) = ', solution([2]));
// 1

console.log('solution([3, 2]) = ', solution([3, 2]));
// 1
