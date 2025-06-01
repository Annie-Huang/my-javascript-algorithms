/*

  1. first split '\n', get the total length, N
  2. then for each row, split with ','
  3. In the first row, find the position of C: pos
  4. create a tempArr,
     for (let i = 1; i < N; i++) {
       tempArr.push(2ndRowOrAbove[pos])
     }
  5. sorted array with (a, b) => b-a;
  6. get the first element of tempArr.

  Test against edge case where there is only one column
 */
