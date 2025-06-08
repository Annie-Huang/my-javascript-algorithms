function solution(S) {
  const N = S.length;
  // console.log('N=', N);

  let occupyArr = [];
  for (let i = 0; i < N; i++) {
    occupyArr.push(i);
  }
  // console.log('occupyArr=', occupyArr);
  // console.log('----------------');

  let canMoveCount = 0;
  for (let i = 0; i < N; i++) {
    const movement = S[i];
    // console.log('i=', i);
    // console.log('movement=', movement);

    if (['^', 'v'].includes(movement)) {
      occupyArr = occupyArr.filter((item) => item != i);
      // console.log('occupyArr=', occupyArr);
      occupyArr.filter((item) => item != i);
      // console.log('occupyArr=', occupyArr);
      canMoveCount++;
    } else if (movement == '<') {
      if (!occupyArr.includes(i - 1)) {
        occupyArr = occupyArr.filter((item) => item != i);
        // console.log('occupyArr=', occupyArr);
        occupyArr.push(i - 1);
        // console.log('occupyArr=', occupyArr);
        canMoveCount++;
      }
    } else {
      if (i == N - 1) {
        occupyArr.push(i + 1);
        // console.log('occupyArr=', occupyArr);
        canMoveCount++;
      }
    }

    // console.log('canMoveCount=', canMoveCount);
    // console.log('----------------');
  }

  return canMoveCount;
}

console.log("solution('><^v') = ", solution('><^v'));
// 2

console.log("solution('<<^<v>>') = ", solution('<<^<v>>'));
// 6

console.log("solution('><><') = ", solution('><><'));
// 0
