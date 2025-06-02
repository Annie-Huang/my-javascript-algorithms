/*
    0. if S.length != 11, return false;

    1. strArr = S.split('-');

    2. if strArr.length != 3, return false;

    3. charArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      for (let i = 0; i < strArr.length; i++) {
        str = str[i];
        if(str.length != 3) {return false;}

        if((str.split('').filter(letter => charArr.includes(letter))).length != 3) {
          return false;
        }
      }
      return true;

    4. There is test case like '12-3456-789' that need to fail.
 */
