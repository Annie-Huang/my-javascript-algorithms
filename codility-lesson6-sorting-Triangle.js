/*
Task 1

Language:


English

Task description
An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
Triplet (0, 2, 4) is triangular.

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
the function should return 1, as explained above. Given array A such that:

  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

 */

function solution(A) {
  const N = A.length;
  A.sort((a, b) => a - b);
  let foundTriangular = false;

  for (let i = 0; i < N - 2; i++) {
    if (A[i] + A[i + 1] > A[i + 2]) {
      if (A[i] + A[i + 2] > A[i + 1] && A[i + 1] + A[i + 2] > A[i]) {
        foundTriangular = true;
        break;
      }
    }
  }

  return foundTriangular ? 1 : 0;
}

console.log(
  'solution([10, 2, 5, 1, 8, 20]) = ',
  solution([10, 2, 5, 1, 8, 20]),
);
// 1

console.log('solution([10, 50, 5, 1]) = ', solution([10, 50, 5, 1]));
// 0
