/*
    1. get the length of the message and compare with K
       if length < message, return message

    2. when we get into there that means we must include ' ...', length of 4

    3. msg.split(' '), get msgArr[];

    4. if msgArr[0].length + 4 < K, return '...'

    5. final message = msgArr[0];
       maxLength = K-4-msgArr[0].length;
       currLength = 0;
       exactWordCanFilled = false;
      for (let i = 1; i < msgArr.length; i++) {
        newLength = currLength + msgArr[i].length + 1;
        if(newLength < maxLength) {
          currLength = newLength;
          message = message + ' ' + msgArr[i];
        } else (newLength = maxLength) {
          currLength = newLength;
          message = message + ' ' + msgArr[i];
          exactWordCanFilled = true;
          break;
        } else {
          break;
        }
      }
      return message + (exactWordCanFilled ? '' : ' ...')
 */
