/*
Note:
Both solution give me 81%, I don't quite under the solution online. Decided to move on:

Google search:
'codility sorting practice NumberOfDiscIntersections quetsion answers'

https://medium.com/@deck451/codility-algorithm-practice-lesson-6-sorting-task-4-number-of-disc-intersections-a-python-378a296e760d
https://molchevskyi.medium.com/best-solutions-for-codility-lessons-lesson-6-sorting-770f931b65ad
https://www.youtube.com/watch?v=qfs3kZJd2UQ
https://www.youtube.com/watch?v=oftWtDiA0M0
https://www.youtube.com/watch?v=HV8tzIiidSw

https://app.codility.com/programmers/lessons/6-sorting/

Task 1

Task description
We draw N discs on a plane. The discs are numbered from 0 to N − 1. An array A of N non-negative integers, specifying the radiuses of the discs, is given. The J-th disc is drawn with its center at (J, 0) and radius A[J].

We say that the J-th disc and K-th disc intersect if J ≠ K and the J-th and K-th discs have at least one common point (assuming that the discs contain their borders).

The figure below shows discs drawn for N = 6 and A as follows:

  A[0] = 1
  A[1] = 5
  A[2] = 2
  A[3] = 1
  A[4] = 4
  A[5] = 0


There are eleven (unordered) pairs of discs that intersect, namely:

discs 1 and 4 intersect, and both intersect with all the other discs;
disc 2 also intersects with discs 0 and 3.
Write a function:

function solution(A);

that, given an array A describing N discs as explained above, returns the number of (unordered) pairs of intersecting discs. The function should return −1 if the number of intersecting pairs exceeds 10,000,000.

Given array A shown above, the function should return 11, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [0..2,147,483,647].
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution1(A) {
  const N = A.length;
  const rangeArr = [];

  for (let i = 0; i < N; i++) {
    const item = [i - A[i], i + A[i]];
    rangeArr.push(item);
  }

  // console.log('rangeArr = ', rangeArr);

  rangeArr.sort((a, b) => a[0] - b[0]);
  // console.log('rangeArr new= ', rangeArr);

  let exceedMax = false;
  let count = 0;
  loop1: for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      // console.log('rangeArr['+j+'][0] = ', rangeArr[j][0])
      // console.log('rangeArr['+i+'][1] = ', rangeArr[i][1])

      if (rangeArr[j][0] <= rangeArr[i][1]) {
        // console.log('get into here');
        count++;
        if (count > 10000000) {
          exceedMax = true;
          break loop1;
        }
      }
    }
  }

  return exceedMax ? -1 : count;
}

function solution(A) {
  const N = A.length;
  const rangeArr = [];

  for (let i = 0; i < N; i++) {
    const item = [i - A[i], i + A[i]];
    rangeArr.push(item);
  }

  console.log('rangeArr = ', rangeArr);

  rangeArr.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  console.log('rangeArr new= ', rangeArr);

  let exceedMax = false;
  let count = 0;
  loop1: for (let i = 0; i < N - 1; i++) {
    for (let j = N - 1; j >= i + 1; j--) {
      // console.log('rangeArr['+i+'][1] = ', rangeArr[i][1])
      // console.log('rangeArr['+j+'][0] = ', rangeArr[j][0])

      if (rangeArr[j][0] <= rangeArr[i][1]) {
        // console.log('count before =', count);
        count = count + (j - i);
        // console.log('count after =', count);

        if (count > 10000000) {
          exceedMax = true;
          break loop1;
        }
        break;
      }

      // console.log('--------------------------');

      // if (rangeArr[j][0] <= rangeArr[i][1]) {
      //   // console.log('get into here');
      //   count++;
      //   if (count > 10000000) {
      //     exceedMax = true;
      //     break loop1;
      //   }
      // }
    }
  }

  return exceedMax ? -1 : count;
}

console.log('solution([1, 5, 2, 1, 4, 0]) = ', solution([1, 5, 2, 1, 4, 0]));
// 11
