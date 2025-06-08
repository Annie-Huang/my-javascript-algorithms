function solution(S) {
  const N = S.length;
  // console.log('N=', N);

  let maxValue = 0;
  for (let i = 0; i < N - 3; i++) {
    const firstEle = +S.slice(i, i + 2);
    // console.log('S=', S);
    // console.log('firstEle=', firstEle);

    for (let j = i + 2; j < N - 1; j++) {
      const secondEle = +S.slice(j, j + 2);
      const sum = firstEle + secondEle;

      maxValue = Math.max(maxValue, sum);
    }
  }

  return maxValue;
}

console.log("solution('43798') = ", solution('43798'));
// 141

console.log("solution('00101') = ", solution('00101'));
// 10

console.log("solution('0332331') = ", solution('0332331'));
// 66

console.log("solution('00331') = ", solution('00331'));
// 34
