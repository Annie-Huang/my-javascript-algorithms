/*
  Need to run against data, not sure if I am right.

  (N=20, K=10)
  (N=10, K=10)
  (N=4, K=10)
  1.
  if(N>=K) {
    return 1;
  }

  count = 0;
  finish = false;
  while(K > 0) {
    if(N => K) {
      count++
      return count;
    } else if (N < K) {
      if(N <= 0) {
        return -1;
      }
      count++;
      K = K-N;
      N = N-1;
    }
  }

 */
