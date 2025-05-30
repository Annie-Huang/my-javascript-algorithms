/*
https://app.codility.com/programmers/lessons/8-leader/

Task 1

Task description
A non-empty array A consisting of N integers is given.

The leader of this array is the value that occurs in more than half of the elements of A.

An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N − 1] have leaders of the same value.

For example, given array A such that:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
we can find two equi leaders:

0, because sequences: (4) and (3, 4, 4, 4, 2) have the same leader, whose value is 4.
2, because sequences: (4, 3, 4) and (4, 4, 2) have the same leader, whose value is 4.
The goal is to count the number of equi leaders.

Write a function:

function solution(A);

that, given a non-empty array A consisting of N integers, returns the number of equi leaders.

For example, given:

    A[0] = 4
    A[1] = 3
    A[2] = 4
    A[3] = 4
    A[4] = 4
    A[5] = 2
the function should return 2, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000,000..1,000,000,000].
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

  let leader;
  for (let i = 0; i < N; i++) {
    const key = A[i];
    if (!obj[key]) {
      obj[key] = [i];
      // console.log('obj =', obj);
    } else {
      obj[key].push(i);
      // console.log('obj =', obj);
      if (obj[key].length > threshold) {
        leader = key;
        break;
      }
    }
  }

  if (leader == undefined) {
    return 0;
  }

  /* ----------- the following code is when we are able to find the EquiLeader ----------- */
  //   console.log('leader=', leader);
  let count = 0;
  const leaderCountArr = A[0] == leader ? [1] : [0];
  for (let i = 1; i < N; i++) {
    leaderCountArr.push(
      A[i] == leader ? leaderCountArr[i - 1] + 1 : leaderCountArr[i - 1],
    );
  }
  //   console.log('leaderCountArr=', leaderCountArr);

  const totalLeaderCount = leaderCountArr.at(-1);
  for (let i = 0; i < N - 1; i++) {
    const leftLeaderCount = leaderCountArr[i];
    const rightLeaderCount = totalLeaderCount - leftLeaderCount;
    const originLeftSideCount = i + 1;
    const originRightSideCount = N - originLeftSideCount;

    if (
      leftLeaderCount > originLeftSideCount / 2 &&
      rightLeaderCount > originRightSideCount / 2
    ) {
      count++;
    }
  }

  return count;
}

console.log('solution([4, 3, 4, 4, 4, 2]) = ', solution([4, 3, 4, 4, 4, 2]));
// 2

console.log(
  'solution([4, 4, 2, 5, 3, 4, 4, 4]) = ',
  solution([4, 4, 2, 5, 3, 4, 4, 4]),
);
// 3
