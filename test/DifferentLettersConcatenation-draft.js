/*
  1.
  for (let i = 0; i < N; i++) {
    remove any string that got duplicate wording within.
  }
  2. currMaxCount = 0;
     currMaxstr = ''
     currStr = ''
     for (let i = 0; i < N; i++) {
      currStr = S[i];
      for (let j = 1; j < N; i++) {
        Create map obj to loop through currStr + str[j], e.g. first one as s[0] + s[1],
        if not duplicate,
          currStr = currStr.concat(str[j]);
          if better than currMax, replace currMaxCount + currMaxStr
          j++;
        if duplicate, skip, do nothing.
      }
     }

     compare
        0-1
        01-2
        012-3
        ...
        0123456789
        1-2
        12-3
        123-4
        ...
        123456789
        2-3
        23-4
        2345-5
        ...
        23456789
        ...

     return currMaxCount


 */
