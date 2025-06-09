function solution(inner, outer, points_x, points_y) {
  const N = points_x.length;
  let count = 0;

  for (let i = 0; i < N; i++) {
    const x = points_x[i];
    const y = points_y[i];
    const currRadius = Math.sqrt(x * x + y * y);
    // console.log('currRadius=', currRadius);
    if (currRadius > inner && currRadius < outer) {
      count++;
    }
  }

  return count;
}

console.log(
  'solution(1, 3, [0, 1, 2, -2, 3], [0, 1, 4, 1, 0]) = ',
  solution(1, 3, [0, 1, 2, -2, 3], [0, 1, 4, 1, 0]),
);
// 2

console.log(
  'solution(2, 4, [4, 0, 1, -2], [-4, 4, 3, 0]) = ',
  solution(2, 4, [4, 0, 1, -2], [-4, 4, 3, 0]),
);
// 1
