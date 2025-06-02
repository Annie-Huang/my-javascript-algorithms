/*
  [3,8,2,3,3,2]

  1.create obj to do count:
     {
        '3': 3;
        '8': 1;
        '2': 2;
     }

  2.keyArr = Object.keys(obj);
    matchArr = [];
    for (let i = 0; i < keyArr.length; i++) {
      if(+i == keyArr[i]) {
        matchArr.push(keyArr[i])
      }
    }

  3.if matchArr.length = 0, return 0

  4.matchArr.sort((a,b) => b-a);
    return matchArr[0]

 */
