/*
  Note: actually not sure whether this logic is correct or not as example 3 does not run against this logic....

  A.sort((a, b) => a-b)

  1. get A[0],
     const elemSum = calculate the sum of each digit.
  2. see if you can do it in a while loop.
     A.shift();
     compare A[0] with elemSum
     if(elemSum >= A[0]) {
       continue to do the same logic on elemSum; get elemSumOnSameElement;
       After the second time, elemSumOnSameElement + [each item in A]
     } else {
        A.push(elemSum);
        Do the same logic with A[0], get elemSumAnotherElement,
        After the second time, elemSumAnotherElement + [each item in A]
     }

 */
