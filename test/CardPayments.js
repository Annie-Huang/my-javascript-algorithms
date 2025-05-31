function solution(A, D) {
  const N = A.length;

  const monthObj = {};
  for (let i = 0; i < N; i++) {
    const month = D[i].split('-')[1];
    if (!monthObj[month]) {
      monthObj[month] = [A[i]];
    } else {
      monthObj[month].push(A[i]);
    }
  }
  // console.log('monthObj=', monthObj);

  const transationSum = A.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  // console.log('transationSum=', transationSum);

  const monthKeysArr = Object.keys(monthObj);
  // console.log('monthKeysArr=', monthKeysArr);
  let skipCardFeeMonthCount = 0;
  for (let i = 0; i < monthKeysArr.length; i++) {
    const key = monthKeysArr[i];
    const monthTransactions = monthObj[key];
    const cardTransactions = monthTransactions.filter((item) => item < 0);
    // console.log('cardTransactions=', cardTransactions);
    const cardTransactionsNo = cardTransactions.length;
    const cardTransactionsSum = cardTransactions.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    // console.log('cardTransactionsNo = ', cardTransactionsNo);
    // console.log('cardTransactionsSum = ', cardTransactionsSum);
    if (cardTransactionsNo >= 3 && Math.abs(cardTransactionsSum) >= 100) {
      skipCardFeeMonthCount++;
    }
  }
  // console.log('skipCardFeeMonthCount=', skipCardFeeMonthCount);
  // console.log('----------------------');

  return transationSum - (12 - skipCardFeeMonthCount) * 5;
}

console.log(
  "solution([100, 100, 100, -10],['2020-12-31', '2020-12-22', '2020-12-03', '2020-12-29']) = ",
  solution(
    [100, 100, 100, -10],
    ['2020-12-31', '2020-12-22', '2020-12-03', '2020-12-29'],
  ),
);
// 230

console.log(
  "solution([180, -50, -25, -25], ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31']) = ",
  solution(
    [180, -50, -25, -25],
    ['2020-01-01', '2020-01-01', '2020-01-01', '2020-01-31'],
  ),
);
// 25

console.log(
  "solution([1, -1, 0, -105, 1], ['2020-12-31', '2020-04-04', '2020-04-04', '2020-04-14', '2020-07-12', '2020-01-31']) = ",
  solution(
    [1, -1, 0, -105, 1],
    [
      '2020-12-31',
      '2020-04-04',
      '2020-04-04',
      '2020-04-14',
      '2020-07-12',
      '2020-01-31',
    ],
  ),
);
// -164

console.log(
  "solution([100, 100, -10, -20, -30], ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08']) = ",
  solution(
    [100, 100, -10, -20, -30],
    ['2020-01-01', '2020-02-01', '2020-02-11', '2020-02-05', '2020-02-08'],
  ),
);
// 80

console.log(
  "solution([-60, 60, -40, -20], ['2020-10-01', '2020-02-02', '2020-10-10', '2020-10-30']) = ",
  solution(
    [-60, 60, -40, -20],
    ['2020-10-01', '2020-02-02', '2020-10-10', '2020-10-30'],
  ),
);
// -115
