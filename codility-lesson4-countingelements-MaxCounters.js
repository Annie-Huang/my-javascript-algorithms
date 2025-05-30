/*
https://app.codility.com/programmers/lessons/4-counting_elements/

Task 1

Task description
You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
For example, given integer N = 5 and array A such that:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the values of the counters after each consecutive operation will be:

    (0, 0, 1, 0, 0)
    (0, 0, 1, 1, 0)
    (0, 0, 1, 2, 0)
    (2, 2, 2, 2, 2)
    (3, 2, 2, 2, 2)
    (3, 2, 2, 3, 2)
    (3, 2, 2, 4, 2)
The goal is to calculate the value of every counter after all operations.

Write a function:

function solution(N, A);

that, given an integer N and a non-empty array A consisting of M integers, returns a sequence of integers representing the values of the counters.

Result array should be returned as an array of integers.

For example, given:

    A[0] = 3
    A[1] = 4
    A[2] = 4
    A[3] = 6
    A[4] = 1
    A[5] = 4
    A[6] = 4
the function should return [3, 2, 2, 4, 2], as explained above.

Write an efficient algorithm for the following assumptions:

N and M are integers within the range [1..100,000];
each element of array A is an integer within the range [1..N + 1].
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

 */

function solution(N, A) {
  let obj = {};

  let currentMax = 0;
  let accumulatedMax = 0;

  for (let i = 0; i < A.length; i++) {
    const key = A[i];

    if (key >= 1 && key <= N) {
      // console.log('key = ', key);
      // console.log('obj['+key+'] = ' + obj[key]);

      if (!obj[key]) {
        obj[key] = 1;
        if (currentMax == 0) {
          currentMax = 1;
        }
      } else {
        const newValue = obj[key] + 1;
        // console.log('newValue = ', newValue);

        obj[key] = newValue;
        // console.log('obj['+key+'] new = ' + obj[key]);

        if (newValue > currentMax) {
          currentMax = newValue;
        }
      }
    } else if (key == N + 1) {
      accumulatedMax = accumulatedMax + currentMax;
      obj = {};
      currentMax = 0;
    }

    // console.log('currentMax = ', currentMax);
    // console.log('accumulatedMax = ', accumulatedMax);
    // console.log('-------------------------------------')
  }

  let resultArr = [];
  for (let key = 1; key <= N; key++) {
    resultArr.push(accumulatedMax + (obj[key] ? obj[key] : 0));
  }

  return resultArr;
}

console.log(
  'solution(5, [3, 4, 4, 6, 1, 4, 4]) = ',
  solution(5, [3, 4, 4, 6, 1, 4, 4]),
);
// [ 3, 2, 2, 4, 2 ]
