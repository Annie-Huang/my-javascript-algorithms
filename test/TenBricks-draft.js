/*
    [11, 10, 8, 12, 8, 10, 11]

    1. loop through and -10 for each element:
       [1, 0, -2, 2, -2, 0, 1]

    2. accumulate = 0;
      for (let i = 0; i < N; i++) {
        currItem = A[i];

        if (currItem == 0) {
          //do nothing
        } else if (currItem > 0) {
          if(i+1 < N) {
            nextItem = A[i+1];
            accumulate += nextItem;
            A[i+1] = nextItem + currItem;
          } else {
            return -1;
          }
        } else {
          // currItem > 0

          if(i+1 < N) {
            nextItem = A[i+1];
            accumulate += nextItem;
            A[i+1] = nextItem + currItem;
          } else {
            return -1;
          }
        }
      }
      return accumulate;
 */
