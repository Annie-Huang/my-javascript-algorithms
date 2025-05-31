function solution(A) {
  const N = A.length;
  const division = Math.floor(N / 3);
  const remainder = N % 3;

  let count = 0;

  if (N <= 3) {
    return A.includes('X') ? 1 : 0;
  }

  for (let i = 0; i < division; i++) {
    const subString = A.slice(i * 3, (i + 1) * 3);
    // console.log('subString=', subString);
    if (subString.includes('X')) {
      count++;
    }
  }

  if (remainder == 0) {
    return count;
  } else {
    return count + (A.slice(-remainder).includes('X') ? 1 : 0);
  }
}

console.log(
  "solution(['.', 'X', '.', '.', 'X']) = ",
  solution(['.', 'X', '.', '.', 'X']),
);
// 2

console.log(
  "solution(['X', '.', 'X', 'X', 'X', 'X', 'X', '.', 'X', '.']) = ",
  solution(['X', '.', 'X', 'X', 'X', 'X', 'X', '.', 'X', '.']),
);
// 3

console.log(
  "solution(['X', 'X', '.', 'X', 'X', 'X', '.', '.']) = ",
  solution(['X', 'X', '.', 'X', 'X', 'X', '.', '.']),
);
// 2

console.log(
  "solution(['X', 'X', 'X', 'X']) = ",
  solution(['X', 'X', 'X', 'X']),
);
// 2

//-----------------------------------------------------------------

console.log(
  "solution(['X', '.', 'X', 'X', 'X', 'X', '.', '.']) = ",
  solution(['X', '.', 'X', 'X', 'X', 'X', '.', '.']),
);
// 2

console.log(
  "solution(['X', '.', 'X', 'X', 'X', 'X', 'X', '.']) = ",
  solution(['X', '.', 'X', 'X', 'X', 'X', 'X', '.']),
);
// 3

console.log("solution(['.', '.', '.']) = ", solution(['.', '.', '.']));
// 0

console.log("solution(['.', 'X', '.']) = ", solution(['.', 'X', '.']));
// 1

console.log('solution([]) = ', solution([]));
// 0

console.log("solution(['.', 'X']) = ", solution(['.', 'X']));
// 1

console.log("solution(['.', '.']) = ", solution(['.', '.']));
// 0
