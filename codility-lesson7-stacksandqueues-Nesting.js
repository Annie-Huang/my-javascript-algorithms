/*
https://app.codility.com/programmers/lessons/7-stacks_and_queues/

Task 1

Language:


English

Task description
A string S consisting of N characters is called properly nested if:

S is empty;
S has the form "(U)" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, string "(()(())())" is properly nested but string "())" isn't.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000,000];
string S is made only of the characters '(' and/or ')'.
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(S) {
  const N = S.length;
  const arr = [];

  for (let i = 0; i < N; i++) {
    if (S[i] == '(') {
      arr.push(S[i]);
    } else {
      if (arr.length == 0) {
        return 0;
      } else {
        arr.pop();
      }
    }
  }

  return arr.length == 0 ? 1 : 0;
}

console.log("solution('(()(())())') = ", solution('(()(())())'));
// 1

console.log("solution('())') = ", solution('())'));
// 0
