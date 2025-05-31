function solution(A) {
  const N = A.length;

  // Find maxLength:
  const tempA = [...A];
  tempA.sort((a, b) => b - a);
  // console.log('tempA=', tempA);
  let maxLength = tempA[0].toString(2).length;
  // console.log('maxLength=', maxLength);

  const binaryArr = [];
  for (let i = 0; i < N; i++) {
    const binaryValue = A[i].toString(2);
    if (binaryValue.length < maxLength) {
      binaryArr.push(binaryValue.padStart(maxLength, '0'));
    } else {
      binaryArr.push(binaryValue);
    }
  }
  // console.log('binaryArr=', binaryArr);

  let maxSubsetNo = 1;

  for (let i = 0; i < maxLength; i++) {
    const currMax = binaryArr.filter((item) => item[i] == '1').length;
    // console.log('currMax=', currMax);
    if (currMax > maxSubsetNo) {
      maxSubsetNo = currMax;
    }
  }

  return maxSubsetNo;
}

console.log('solution([13, 7, 2, 8, 3]) = ', solution([13, 7, 2, 8, 3]));
// 3

console.log('solution([1, 2, 4, 8]) = ', solution([1, 2, 4, 8]));
// 1

console.log('solution([16, 16]) = ', solution([16, 16]));
// 2
