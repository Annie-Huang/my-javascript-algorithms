/*
  1. if N == 1; return 1

  2. dayCount = 1;
     min=0;
     max=0;
     shouldTriggerNewDay = true;

    for (let i = 0; i < N; i++) {
      curr = D[i];
      if(shouldTriggerNewDay) {
        min=0;
        max=0;
        shouldTriggerNewDay = false;
      }

      if(min == 0 && max == 0) {
        min = curr;
        max = curr
      } else if (curr > max) {
        if(curr - max <= X && curr - min <= X) {
          max = curr;
        } else {
          dayCount++;
          min = curr;
          max = curr;
        }
      } else if (curr < min) {
        if(min - curr <= X && max - curr <= X) {
          min = curr;
        } else {
          dayCount++;
          min = curr;
          max = curr;
        }
      } // if min <= D[i] <= max, do nothing.

    }
    return dayCount;

 */
