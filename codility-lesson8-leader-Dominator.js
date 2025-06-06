/*
https://app.codility.com/programmers/lessons/8-leader/

Task 1

Language:


English

Task description
An array A consisting of N integers is given. The dominator of array A is the value that occurs in more than half of the elements of A.

For example, consider array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
The dominator of A is 3 because it occurs in 5 out of 8 elements of A (namely in those with indices 0, 2, 4, 6 and 7) and 5 is more than a half of 8.

Write a function

function solution(A);

that, given an array A consisting of N integers, returns index of any element of array A in which the dominator of A occurs. The function should return −1 if array A does not have a dominator.

For example, given array A such that

 A[0] = 3    A[1] = 4    A[2] =  3
 A[3] = 2    A[4] = 3    A[5] = -1
 A[6] = 3    A[7] = 3
the function may return 0, 2, 4, 6 or 7, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(A) {
  const N = A.length;
  const threshold = N / 2;
  // console.log('threahold = ', threshold);
  const obj = {};

  if (N == 1) {
    return 0;
  }

  for (let i = 0; i < N; i++) {
    const key = A[i];
    if (!obj[key]) {
      obj[key] = [i];
      // console.log('obj =', obj);
    } else {
      obj[key].push(i);
      // console.log('obj =', obj);
      if (obj[key].length > threshold) {
        // console.log('get into here.... obj[key] = ', obj[key]);
        return obj[key][0];
      }
    }
  }

  return -1;
}

console.log(
  'solution([3, 4, 3, 2, 3, -1, 3, 3]) = ',
  solution([3, 4, 3, 2, 3, -1, 3, 3]),
);
// 0
// any position it ocurrs, so it can be [ 0, 2, 4, 6, 7 ]
