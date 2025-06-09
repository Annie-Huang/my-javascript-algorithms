function solution(E) {
  const N = E.length;
  let maxEmployee = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = i + 1; j < 10; j++) {
      let count = 0;

      for (let k = 0; k < N; k++) {
        const currEmpDayArr = E[k].split('');
        // console.log('currEmpDayArr=', currEmpDayArr);
        if (
          currEmpDayArr.includes(i.toString()) ||
          currEmpDayArr.includes(j.toString())
        ) {
          count++;
        }
      }

      maxEmployee = Math.max(maxEmployee, count);
    }
  }

  return maxEmployee;
}

console.log(
  "solution(['039', '4', '14', '32', '', '34', '7']) = ",
  solution(['039', '4', '14', '32', '', '34', '7']),
);
// 5

console.log(
  "solution(['801234567', '180234567', '0', '189234567', '891234567', '98', '9']) = ",
  solution([
    '801234567',
    '180234567',
    '0',
    '189234567',
    '891234567',
    '98',
    '9',
  ]),
);
// 7

console.log(
  "solution(['5421', '245', '1452', '0345', '53', '354']) = ",
  solution(['5421', '245', '1452', '0345', '53', '354']),
);
// 6
