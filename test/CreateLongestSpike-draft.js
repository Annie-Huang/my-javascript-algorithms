/*

e.g. 2, 3, 3, 2, 2, 1

1. loop through the arr to order it, find the min and the max, order the arr and assign it to a newArr,
2. loop through the arr to create the map obj, list the element and the appear number of times
   {
     2: 3 times
     3: 2 times
     1: 1 time,
   }

3. create two array left[] and right[]
   for (let i = 0; i < N; i++) {
      currValue = newArr[i]
      if(currValue == newArr[i-1]) {
        continue;
      }
      
      add into the start of rightArr, remove count;
      if(i+1<N && newArr[i+1] == max) {
        add into the start of rightArr;
        Break;
      }
      if(i+1<N && newArr[i+1] == currValue) {
         add into leftArr, remove count;
         i++;
      }
   }
   return leftArr.length + rightArr.length.

 */
