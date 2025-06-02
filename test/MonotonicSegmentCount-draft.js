/*
  1. decArr = [];
     incArr = [];
     conArr = [];
     decStart = decEnd = 0;
     incStart = insEnd = 0;
     conStart = conEnd = 0;
     Within the same for loop, add into the 3 array above.
     for (let i = 0; i < N; i++) {
        ...
     }

   2.count = 0;
     for each array, e.g. decArr, incArr, conArr,
     for (let i = 0; i < decArr.length; i++) {
        length = decArr[i].length;
        count = count + (length-1) * (length) / 2
        if (count > 1000000000) {return -1}
     }
     return count;
 */
