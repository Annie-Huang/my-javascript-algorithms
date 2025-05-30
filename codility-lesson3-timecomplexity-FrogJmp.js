/*
https://app.codility.com/programmers/lessons/3-time_complexity/

Task 1

Task description
A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

Count the minimal number of jumps that the small frog must perform to reach its target.

Write a function:

function solution(X, Y, D);

that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Write an efficient algorithm for the following assumptions:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(X, Y, D) {
  if (X == Y) return 0;

  const division = Math.floor((Y - X) / D);
  const remainder = (Y - X) % D;

  return division + (remainder == 0 ? 0 : 1);
}

console.log('solution(10, 85, 30) = ', solution(10, 85, 30));
// 3

console.log('solution(2, 11, 3) = ', solution(2, 11, 3));
// 3
