/*
  1. sumOfDigitInN = N.toString().split('').reduce(
      (accumulator, currentValue) => +accumulator + +currentValue,
      0,
    );

  2. newN = N+1;
    while(true) {
      newSum =  newN.toString().split('').reduce(
        (accumulator, currentValue) => +accumulator + +currentValue,
        0,
      );

      if(newSum = sumOfDigitInN) {
        return newN;
      }
    }
 */
