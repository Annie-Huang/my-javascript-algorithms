/*
https://app.codility.com/programmers/lessons/4-counting_elements/

Task 1

Task description
A non-empty array A consisting of N integers is given.

A permutation is a sequence containing each element from 1 to N once, and only once.

For example, array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
is a permutation, but array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
is not a permutation, because value 2 is missing.

The goal is to check whether array A is a permutation.

Write a function:

function solution(A);

that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

For example, given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
    A[3] = 2
the function should return 1.

Given array A such that:

    A[0] = 4
    A[1] = 1
    A[2] = 3
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [1..1,000,000,000].
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(A) {
  const N = A.length;
  const obj = {};
  let permutationLength = A[0];
  let currentLength = 0;
  let isDuplicate = false;

  for (let i = 0; i < N; i++) {
    const key = A[i];
    if (key > permutationLength) {
      permutationLength = key;
    }

    if (!obj[key]) {
      obj[key] = 'found';
      currentLength++;
    } else {
      isDuplicate = true;
      break;
    }
  }

  return isDuplicate || currentLength != permutationLength ? 0 : 1;
}

console.log('solution([4, 1, 3, 2]) = ', solution([4, 1, 3, 2]));
// 1

console.log('solution([4, 1, 3]) = ', solution([4, 1, 3]));
// 0
