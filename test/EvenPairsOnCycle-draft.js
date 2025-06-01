/*
   [4,2,5,8,7,3,7]
   1. add the first element into the last position of the arrNew: [4,2,5,8,7,3,7,4]

   2.
   create a methods:
   function isEven(n) {
       return n % 2 == 0;
    }
    function isOdd(n) {
       return Math.abs(n % 2) == 1;
    }

   3.
   count = 0;
   N = arrNew.length
   for (let i = 0; i < N; i++) {
      if(i+1 < N) {
        if(arrNew[i] is even) {
          if(arrNew[i+1] is even) {
            count++;
            i++;
          } else {
            // do nothing.
          }

        } else if (arrNew[i] is odd) {
          if(arrNew[i+1] is even) {
            // do nothing
          } else {
            count++;
            i++;
          }
        }

      } else {
        break;
      }
   }
   return count;

 */
