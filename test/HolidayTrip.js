function solution(P, S) {
  let totalPeople = P.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  // console.log('totalPeople=', totalPeople);

  S.sort((a, b) => b - a);
  // console.log('S=', S);

  let carTotal = 0;
  let i = 0;
  while (totalPeople > 0) {
    if (totalPeople > S[i]) {
      carTotal += 1;
      totalPeople -= S[i];
      i++;
    } else {
      return carTotal + 1;
    }
  }
  // console.log('get into here...');
}

console.log(
  'solution([1, 4, 1], [1, 5, 1]) = ',
  solution([1, 4, 1], [1, 5, 1]),
);
// 2

console.log(
  'solution([4, 4, 2, 4], [5, 5, 2, 5]) = ',
  solution([4, 4, 2, 4], [5, 5, 2, 5]),
);
// 3

console.log(
  'solution([2, 3, 4, 2], [2, 5, 7, 2]) = ',
  solution([2, 3, 4, 2], [2, 5, 7, 2]),
);
// 2
