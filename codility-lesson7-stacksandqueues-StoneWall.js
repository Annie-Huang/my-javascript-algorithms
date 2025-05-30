/*
Note: most difficult one, definitely not easy mode:
The best explaination of the problem is in here:
https://medium.com/@deck451/codility-algorithm-practice-lesson-7-stacks-and-queues-task-4-stonewall-a-python-approach-88b351f8f1ee

https://app.codility.com/programmers/lessons/7-stacks_and_queues/

Task 1

Task description
You are going to build a stone wall. The wall should be straight and N meters long, and its thickness should be constant; however, it should have different heights in different places. The height of the wall is specified by an array H of N positive integers. H[I] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H[0] is the height of the wall's left end and H[N−1] is the height of the wall's right end.

The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular). Your task is to compute the minimum number of blocks needed to build the wall.

Write a function:

function solution(H);

that, given an array H of N positive integers specifying the height of the wall, returns the minimum number of blocks needed to build it.

For example, given array H containing N = 9 integers:

  H[0] = 8    H[1] = 8    H[2] = 5
  H[3] = 7    H[4] = 9    H[5] = 8
  H[6] = 7    H[7] = 4    H[8] = 8
the function should return 7. The figure shows one possible arrangement of seven blocks.



Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array H is an integer within the range [1..1,000,000,000].
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

 */

function solution(H) {
  const N = H.length;
  let arr = [];
  let count = 0;

  for (let i = 0; i < N; i++) {
    const newHeight = H[i];

    if (arr.length == 0) {
      arr.push(newHeight);
      count++;
    }

    if (newHeight == arr[arr.length - 1]) {
      continue;
    }

    if (newHeight < arr[arr.length - 1]) {
      while (newHeight < arr[arr.length - 1] && arr.length != 0) {
        arr.pop();
      }

      if (newHeight > arr[arr.length - 1] || arr.length == 0) {
        arr.push(newHeight);
        count++;
      } else {
        // newHeight == arr[arr.length - 1]
        // do nothing;
      }

      continue;
    }

    if (newHeight > arr[arr.length - 1]) {
      arr.push(newHeight);
      count++;
    }
  }

  return count;
}

console.log(
  'solution([8, 8, 5, 7, 9, 8, 7, 4, 8]) = ',
  solution([8, 8, 5, 7, 9, 8, 7, 4, 8]),
);
// 7
