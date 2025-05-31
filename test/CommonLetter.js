function solution(S) {
  const N = S.length;
  const M = S[0].length;

  for (let i = 0; i < M; i++) {
    const obj = {};
    for (let j = 0; j < N; j++) {
      // console.log('i=', i);
      // console.log('j=', j);
      // console.log('S[' + j + '][' + i + ']=' + S[j][i]);
      const key = S[j][i];

      if (!obj[key]) {
        obj[key] = [1, [j]];
      } else {
        let newCount = obj[key][0] + 1;
        obj[key][1].push(j);
        let newStrPositions = obj[key][1];

        // console.log('newCount=', newCount);
        // console.log('obj[key][1]=', obj[key][1]);
        // console.log('newStrPositions=', newStrPositions);

        if (newCount == 2) {
          return [...newStrPositions, i];
        }
      }

      // console.log('------------------------');
    }
  }

  return [];
}

console.log(
  "solution(['abc', 'bca', 'dbe']) = ",
  solution(['abc', 'bca', 'dbe']),
);
// [0, 2, 1]

console.log(
  "solution(['zzz', 'ferz', 'zdsr', 'gftd']) = ",
  solution(['zzz', 'ferz', 'zdsr', 'gftd']),
);
// mine return [0,2,0]
// answer return [0,1,3], both are right.

console.log("solution(['gr', 'sd', 'rg']) = ", solution(['gr', 'sd', 'rg']));
// []

console.log("solution(['bdafg', 'ceagi']) = ", solution(['bdafg', 'ceagi']));
// [0, 1, 2]
