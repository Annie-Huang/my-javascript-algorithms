/*
https://app.codility.com/programmers/lessons/1-iterations/

Task 1

Task description
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

 */
function solution(N) {
  // Implement your solution here
  const binaryString = N.toString(2);
  // In theory, I don't even need to delete the leading 0, as it will not exist in normal binary conversion.
  const bStrWithoutLeading0 = binaryString.replace(/^0+/, '');
  const bStrWithout0BothEnd = bStrWithoutLeading0
    .split('')
    .reverse()
    .join('')
    .replace(/^0+/, '')
    .split('')
    .reverse()
    .join('');

  // console.log('N=', N);
  // console.log('binaryString=', binaryString);
  // console.log('bStrWithoutLeading0=', bStrWithoutLeading0);
  // console.log('bStrWithout0BothEnd=', bStrWithout0BothEnd);

  if (!bStrWithout0BothEnd.includes('0')) return 0;

  // console.log('get into here.');

  let finalResult = 0;
  let currentResult = 0;
  for (let i = 1; i < bStrWithout0BothEnd.length - 1; i++) {
    // console.log('bStrWithout0BothEnd[i]=', bStrWithout0BothEnd[i])
    if (bStrWithout0BothEnd[i] == 0) {
      // console.log('get into XXXX');
      currentResult++;

      // console.log('finalResult=', finalResult);
      // console.log('currentResult=', currentResult);
      // console.log('----------------------------------------');
    } else {
      // console.log('get into XXXX');

      // console.log('finalResult b=', finalResult);
      // console.log('currentResult b=', currentResult);

      if (finalResult < currentResult) {
        finalResult = currentResult;
      }
      currentResult = 0;

      // console.log('finalResult a=', finalResult);
      // console.log('currentResult a=', currentResult);
      // console.log('----------------------------------------');
    }
  }

  if (finalResult < currentResult) {
    finalResult = currentResult;
  }

  return finalResult;
}

console.log('solution(1041) =', solution(1041));
// 10000010001
// 5

console.log('solution(15) =', solution(15));
// 1111
// 0

console.log('solution(32) =', solution(32));
// 100000
// 0

console.log('solution(9) =', solution(9));
// 1001
// 2

console.log('solution(529) =', solution(529));
// 1000010001
// 4

console.log('solution(20) =', solution(20));
// 10100
// 1

console.log('solution(15) =', solution(15));
// 1111
// 0
