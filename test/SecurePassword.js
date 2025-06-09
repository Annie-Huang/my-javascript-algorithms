function solution(S) {
  if (S.split('').includes(' ')) {
    return false;
  }

  let hasDigit = false;
  let hasLowerCase = false;
  let hasUpperCase = false;
  let isMin6Chars = false;
  let countChars = 0;
  let hasSpecialChar = false;
  const specialCharArr = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
  ];

  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    if (++countChars == 6 && !isMin6Chars) {
      isMin6Chars = true;
    }

    if (!hasDigit && /^\d+$/.test(char)) {
      hasDigit = true;
    } else if (!hasLowerCase && /[a-z]/.test(char)) {
      hasLowerCase = true;
    } else if (!hasUpperCase && /[A-Z]/.test(char)) {
      hasUpperCase = true;
    } else if (!hasSpecialChar && specialCharArr.includes(char)) {
      hasSpecialChar = true;
    }

    if (
      isMin6Chars &&
      hasDigit &&
      hasLowerCase &&
      hasUpperCase &&
      hasSpecialChar
    ) {
      return true;
    }
  }

  return false;
}

console.log("solution('FooBar123!') = ", solution('FooBar123!'));
// true

console.log("solution('foobar123!') = ", solution('foobar123!'));
// false

console.log("solution('FooBar123') = ", solution('FooBar123'));
// false

console.log("solution('F0bar! F0bar!') = ", solution('F0bar! F0bar!'));
// false

console.log("solution('Fo0*') = ", solution('Fo0*'));
// false
