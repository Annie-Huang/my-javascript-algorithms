/*
Task 1

Task description
A non-empty array A consisting of N integers is given. The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).

For example, array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
contains the following example triplets:

(0, 1, 2), product is −3 * 1 * 2 = −6
(1, 2, 4), product is 1 * 2 * 5 = 10
(2, 4, 5), product is 2 * 5 * 6 = 60
Your goal is to find the maximal product of any triplet.

Write a function:

function solution(A);

that, given a non-empty array A, returns the value of the maximal product of any triplet.

For example, given array A such that:

  A[0] = -3
  A[1] = 1
  A[2] = 2
  A[3] = -2
  A[4] = 5
  A[5] = 6
the function should return 60, as the product of triplet (2, 4, 5) is maximal.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−1,000..1,000].
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(A) {
  const N = A.length;
  A.sort((a, b) => b - a);

  let result;
  if (A[N - 2] <= 0 && A[N - 1] <= 0) {
    const option1 = A[0] * A[1] * A[2];
    const option2 = A[N - 1] * A[N - 2] * A[0];
    result = option1 > option2 ? option1 : option2;
  } else {
    result = A[0] * A[1] * A[2];
  }

  return result;
}

console.log(
  'solution([-3, 1, 2, -2, 5, 6]) = ',
  solution([-3, 1, 2, -2, 5, 6]),
);
// 60

console.log('solution([-5, 5, -5, 4]) = ', solution([-5, 5, -5, 4]));
// 125
