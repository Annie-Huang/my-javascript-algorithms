/*
    [7,3,1,1,4,5,4,9]
    1.count = 0;
      create obj, if key = 1, count++; not add 1 into the obj, so the obj becomes:
      {
        3: 1
        4: 2
        5: 1
        7: 1
        9: 1
      }
      count = 2 now.

    2. if Object.keys(obj).length == 0; return count;

    3.Get the keys and sorted in ascending order.
      orderedKeys = Object.keys(obj).sort((a, b) => (+a)-(+b));
      will return:
      ['3', '4', '5', '7', '9']

    4.
      currCapacity = +orderedKeys[0];
      orderKeysLength = orderedKeys.length;
      for (let i = 0; i < orderKeysLength; i++) {
        currKey = orderedKeys[i];
        currValue = obj[currKey];
        currKeyInDigit = +currKey;

        if(currValue = currKeyInDigit) {
          count++;
        } else if(currValue > currKeyInDigit) {
          count = count + Math.ceiling(currValue / currKeyInDigit);     // ceiling means count more more time
          remainder = currValue % currKeyInDigit;

          if(remainder == 0) {
            // do nothing.
          } else if(i+1 == orderKeysLength) {
            // do nothing.
          } else {
            nextKey = orderedKeys[i+1];
            nextValue = ojb[nextKey];
            obj[nextKey] = remainder + nextValue - currKeyInDigit;
          }
        } else {
            // Case when currValue < currKeyInDigit
            if(i+1 == orderKeysLength) {
              count++;
            } else {
              count++;
              nextKey = orderedKeys[i+1];
              nextValue = ojb[nextKey];
              obj[nextKey] = currValue + nextValue - currKeyInDigit;
            }
        }
      }
      return count;

 */
