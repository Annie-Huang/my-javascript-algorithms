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

function solution(message, K) {
  const msgArr = message.split(' ');
  const dotsLen = 4; // ' ...' == 4
  let remainingLen = K;

  // console.log('msgArr=', msgArr);

  if (msgArr[0].length + 4 > K) {
    return '...';
  }

  const arrLen = msgArr.length;
  let i = 1;
  let str = msgArr[0];
  remainingLen = remainingLen - msgArr[0].length;
  // console.log('remainingLen=', remainingLen);

  while (remainingLen > 0 && i < arrLen) {
    const word = msgArr[i];
    if (word.length + 1 <= K) {
      str = str + ' ' + word;
      i++;
      remainingLen = K - str.length;
      // console.log('remainingLen=', remainingLen);
      // console.log('i=', i);
      // console.log('str=', str);
      // console.log('------------------------');
    } else {
      break;
    }
  }

  if (i == arrLen) {
    return str;
  } else {
    // case where K <=0

    // console.log('get into here...');

    let currlen2 = str.length;
    // console.log('currlen2=', currlen2);
    let msgArr2 = str.split(' ');
    // console.log('msgArr2=', msgArr2);
    let arr2Len = msgArr2.length;

    // Will stop looping if cutting the last element can fix into K
    while (currlen2 - msgArr2[arr2Len - 1].length - 1 + dotsLen > K) {
      currlen2 = currlen2 - msgArr2[arr2Len - 1].length - 1;
      msgArr2.splice(arr2Len - 1, 1);
      arr2Len = msgArr2.length;

      // console.log('-----------------------------');
      // console.log('currlen2=', currlen2);
      // console.log('msgArr2=', msgArr2);
      // console.log('arr2Len=', arr2Len);
      // console.log('-----------------------------');
    }

    msgArr2.splice(msgArr2.length - 1, 1);

    return msgArr2.join(' ') + ' ...';
  }
}

console.log(
  "solution('And now here is my secret', 15) = ",
  solution('And now here is my secret', 15),
);
// 'And now ...'

console.log(
  "solution('There is an animal with four legs', 15) = ",
  solution('There is an animal with four legs', 15),
);
// 'There is an ...'

console.log("solution('super dog', 4) = ", solution('super dog', 4));
// '...'

console.log("solution('super dog', 4) = ", solution('how are you', 20));
// 'how are you'
