/*
create a map and go through the string to add the count of A, B, N

  {
   A: countA,
   B: countB,
   C: countC,
  }

  Then divide for
  {
   A: 3,
   B: 1,
   N: 2,
  }
  Math floor to get the whole number,
  get the min of the division.

  pay attention to edge case, if not appear, cannot divide,
  if === 0 after Math.floor(division), also not return, it means, e.g. that it only got 1 or 2 A where we need at least 3 A.

 */
