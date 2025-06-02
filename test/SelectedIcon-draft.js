/*
    1.count = 0;
      for (let i = 0; i < N; i++) {
        iconXPos = A[i];
        iconYPos = B[i];

        if(A[i] == X && B[i] == Y){
          return i;
        } else if (A[i] == X) {
          if(Math.abs(B[i]-Y) <= 20) {
            return i;
          }
        } else if (B[i] == Y) {
          if(Math.abs(A[i]-X) <= 20) {
            return i;
          }
        } else {
          width = Math.abs(A[i]-X);
          height = Math.abs(B[i]-Y);

          if(Math.sqrt(width * width + height * height) <= 20) {
            return i
          }
        }
      }
      return -1

 */
