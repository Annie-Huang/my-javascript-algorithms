/*
  I don't think this is a easy question:

  (dir, radius, [-1, -2, 4, 1, 3, 0], [5, 4, 3, 3, 1, -1])
  1.
  create a coordination pairs:
  arr = [[-1, 5], [-2, 4], [4, 3], [1, 3], [3, 1], [0, -1]]

  2. check flash degree.
  newArr = [];
  if (dir == U) {
     // remove these pairs:
     for (let i = 0; i < N; i++) {
        if((Y>0 && X>0 && X>Y) ||
           (Y>0 && X<0 && Math.abs(X)>Y) ||
           (Y < 0)) {
          // do nothing;
        } else {
          newArr.push(arr[i])
        }
     }
   }
   else if (dir == D) {// do similar logic}
   else if (dir == L) {// do similar logic}
   else if (dir == R) {// do similar logic}

   3, check flash length:
   newArr3 = [];
   for (let i = 0; i < newArr2.length; i++) {
       if(Math.sqrt(X * X + Y * Y) < Radius}{
          newArr3.push(newArr2[i])
       }
   }
   return newArr3.length;
 */
