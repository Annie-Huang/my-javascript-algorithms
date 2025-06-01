/*

   [10000000, 10000000, 5, 5, 5, 2, 2, 2, 0, 0]
   1. find out each value appear times through obj key
   {
      10000000: 2 times;
      5: 3 times;
      2: 3 times;
      0: 2 times;
   }

   2. get the times value: [2, 3, 3, 2]
   3. sorted it descending order [3, 3, 2, 2]
   4. collect repeatitive into a seperate array ones:
      original unique number: [3, 2], last value is 2.   <----- A
      remaining unique number: [3, 2], length is 2.      <----- B

   5. since the current value is 2 (from A), so we need the next 2 number (from B)
      that is less than 2 (from A) is [1, 0], Pay attention that it can only subtract until 0.

   result = 3+2 (from B) - (1+0) (from A) = 5 - 1 = 4.
 */
