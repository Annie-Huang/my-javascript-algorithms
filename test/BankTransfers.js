function solution(R, V) {
  let N = R.length;
  let initABalance = 0;
  let initBBalance = 0;
  let currABalance = initABalance;
  let currBBalance = initBBalance;

  for (let i = 0; i < N; i++) {
    let bank = R[i];

    if (bank == 'A') {
      currABalance = currABalance + V[i];
      currBBalance = currBBalance - V[i];
      if (currBBalance < 0) {
        initBBalance = initBBalance + Math.abs(currBBalance);
        currBBalance = 0;
      }
    } else {
      currABalance = currABalance - V[i];
      currBBalance = currBBalance + V[i];
      if (currABalance < 0) {
        initABalance = initABalance + Math.abs(currABalance);
        currABalance = 0;
      }
    }
  }

  return [initABalance, initBBalance];
}

console.log(
  "solution('BAABA', [2, 4, 1, 1, 2]) = ",
  solution('BAABA', [2, 4, 1, 1, 2]),
);
// [2, 4]

console.log(
  "solution('ABAB', [10, 5, 10, 15]) = ",
  solution('ABAB', [10, 5, 10, 15]),
);
// [0, 15]

console.log("solution('B', [100, 0]) = ", solution('B', [100, 0]));
// [100, 0]
