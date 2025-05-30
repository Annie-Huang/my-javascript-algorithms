/*
https://app.codility.com/programmers/lessons/7-stacks_and_queues/

Task 1

Task description
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S is made only of the following characters: '(', '{', '[', ']', '}' and/or ')'.
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
 */

function solution(S) {
  const N = S.length;
  const tempArr = [];
  const leftSideArr = ['(', '[', '{'];
  const rightSideArr = [')', ']', '}'];

  for (let i = 0; i < N; i++) {
    const key = S[i];
    // console.log('key = ', key)

    if (i == 0 && rightSideArr.includes(key)) {
      return 0;
    }

    if (leftSideArr.includes(key)) {
      tempArr.push(key);
      // console.log('tempArr=', tempArr);
      // console.log('------------------------------------')
      continue;
    }

    // console.log('tempArr start=', tempArr);
    const tempArrLastCharacter = tempArr[tempArr.length - 1];
    // console.log('tempArrLastCharacter = ', tempArrLastCharacter);

    if (
      (key == ')' && tempArrLastCharacter == '(') ||
      (key == ']' && tempArrLastCharacter == '[') ||
      (key == '}' && tempArrLastCharacter == '{')
    ) {
      tempArr.pop();
    } else {
      return 0;
    }

    // console.log('tempArr end=', tempArr);
    // console.log('------------------------------------')
  }

  return tempArr.length == 0 ? 1 : 0;
}

console.log("solution('{[()()]}') = ", solution('{[()()]}'));
// 1

console.log("solution('([)()]') = ", solution('([)()]'));
// 0
