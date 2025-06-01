/*
  let currPosition = 0;
  let finished = false;

  if(N == 1) {
    return S;
  }

  const arr = [];
  for (let i = 0; i < S.length; i++) {
    arr.push(+S[i])
  }


  while(!finished) {
     let N = arr.length;
     if(currPosition+1 < N) {
        if(arr[currPositon] + arr[currentPosition + 1] <= 9) {
           // remove current the next position and replace by the sum.
           replacement = arr[currPositon] + arr[currentPosition + 1];
           if(currentPosition == 0) {
             arr = [replacement].concat(arr.slice(2))
           } else {
             arr = arr.slice(0, currPosition).concat([replacement]).concat(arr.slice(currPosition+2))
           }

        } else if {
           currenPosition++;
        }

     } else (currPosition+1 == N) {
        finished = true;
     }
  }

 */
