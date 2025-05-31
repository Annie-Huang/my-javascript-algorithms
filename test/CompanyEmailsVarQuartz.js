function solution(S, C) {
  const tempS0 = S.split(', ');
  // console.log('tempS0=', tempS0);

  const N = tempS0.length;

  // To lower case:
  const tempS1 = [];
  for (let i = 0; i < N; i++) {
    tempS1.push(tempS0[i].toLowerCase());
  }
  // console.log('tempS1=', tempS1);

  // To get initial of the first|middle name
  for (let i = 0; i < N; i++) {
    const name = tempS1[i].split(' ');
    const count = name.length;
    if (count == 2) {
      tempS1[i] = name[0][0] + ' ' + name[1];
    } else if (count == 3) {
      tempS1[i] = name[0][0] + ' ' + name[1][0] + ' ' + name[2];
    }
  }
  // console.log('tempS1=', tempS1);

  // Remove '-' and max 8 length
  for (let i = 0; i < N; i++) {
    const name = tempS1[i].split(' ');
    const lastName = name.at(-1);
    let lastNameWithHyphens = lastName
      .split('')
      .filter((letter) => letter != '-')
      .join('');
    if (lastNameWithHyphens.length > 8) {
      lastNameWithHyphens = lastNameWithHyphens.slice(0, 8);
    }

    const count = name.length;
    if (count == 2) {
      tempS1[i] = [name[0], lastNameWithHyphens].join(' ');
    } else if (count == 3) {
      tempS1[i] = [name[0], name[1], lastNameWithHyphens].join(' ');
    }
  }
  // console.log('tempS1=', tempS1);

  // Put into correct formatter;
  const tempS2 = [];
  for (let i = 0; i < N; i++) {
    tempS2.push(tempS1[i].split(' ').join(''));
  }
  // console.log('tempS2=', tempS2);

  // Create key map
  const obj = {};
  const tempS3 = [];
  for (let i = 0; i < N; i++) {
    const key = tempS2[i];
    if (!obj[key]) {
      obj[key] = 1;
      tempS3.push(tempS2[i]);
    } else {
      const newCount = obj[key] + 1;
      obj[key] = newCount;
      tempS3.push(tempS2[i] + newCount);
    }
  }
  // console.log('tempS3=', tempS3);

  // Add last part
  const tempS4 = [];
  const lowercaseCompanyName = C.toLowerCase();
  for (let i = 0; i < N; i++) {
    tempS4.push(
      tempS0[i] + ' <' + tempS3[i] + '@' + lowercaseCompanyName + '.com>',
    );
  }
  // console.log('tempS4=', tempS4);

  return tempS4.join(', ');
}

console.log(
  "solution('John Doe, Peter Parker, Mary Jane Watson-Parker, James Doe, John Elvis Doe, Jane Doe, Penny Parker', 'Example') = ",
  solution(
    'John Doe, Peter Parker, Mary Jane Watson-Parker, James Doe, John Elvis Doe, Jane Doe, Penny Parker',
    'Example',
  ),
);
