function solution(N) {
  const count = N.toString()
    .split('')
    .filter((char) => char == '5').length;
  // console.log('count=', count);

  const str = N.toString();

  const arr = [];
  for (let i = 0; i < count; i++) {
    let currCount = i;
    for (let j = 0; j < str.length; j++) {
      const char = str[j];
      // console.log('char=', char);

      if (char == '5') {
        if (currCount == 0) {
          // Method 1, using splice, but because splice is changing the current arr, really annoying to separate the code.
          // const strArr = str.split('');
          // console.log('strArr = ', strArr);
          // strArr.splice(j, 1); // super annoying that keep splice as a single line of code as splice changes the original string.
          // console.log('strArr = ', strArr);
          // const newNumber = +strArr.join('');

          // Method 2.
          const strArr = str.split('');
          const newNumber = +[
            ...strArr.slice(0, j),
            ...strArr.slice(j + 1),
          ].join('');

          arr.push(newNumber);
          // console.log('arr=', arr);
          break;
        } else {
          currCount--;
        }
      }

      // console.log('----------------------');
    }
  }

  arr.sort((a, b) => b - a);

  // do the last step to change -0 to 0;
  return Number(arr[0].toString());
}

console.log('solution(15958) = ', solution(15958));
// 1958

console.log('solution(-5859) = ', solution(-5859));
// -589

console.log('solution(-5000) = ', solution(-5000));
// 0
