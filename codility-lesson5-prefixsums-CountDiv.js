/*
https://app.codility.com/programmers/lessons/5-prefix_sums/

Task 1

Task description
Write a function:

function solution(A, B, K);

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

 */

function solution(A, B, K) {
  const AReminder = A % K;
  let isRequiredToAdd1 = false;

  if (AReminder == 0) {
    isRequiredToAdd1 = true;
  }

  const ADivision = Math.floor(A / K);
  const BDivision = Math.floor(B / K);
  // console.log('ADivision=', ADivision);
  // console.log('BDivision=', BDivision);
  // console.log('isRequiredToAdd1=', isRequiredToAdd1);

  return BDivision - ADivision + (isRequiredToAdd1 ? 1 : 0);
}

console.log('solution(6, 11, 2) = ', solution(6, 11, 2));
// 3
