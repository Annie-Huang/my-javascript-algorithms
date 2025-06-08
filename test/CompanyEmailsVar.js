function solution(S, C) {
  const tempArr1 = S.split(', ');
  console.log('tempArr1=', tempArr1);
  const N = tempArr1.length;

  // to lower case
  let tempArr2 = tempArr1.map((item) => item.toLowerCase());
  console.log('tempArr2=', tempArr2);

  // remove '-'
  tempArr2 = tempArr2.map((item) =>
    item
      .split('')
      .filter((letter) => letter != '-')
      .join(''),
  );
  console.log('tempArr2=', tempArr2);

  // remove middle name
  tempArr2 = tempArr2.map((item) => {
    const names = item.split(' ');
    return (names.length == 3 ? [names[0], names[2]] : names).join('.');
  });
  console.log('tempArr2=', tempArr2);

  // create a count obj, and update tempArr2
  const obj = {};
  for (let i = 0; i < N; i++) {
    const key = tempArr2[i];
    if (!obj[key]) {
      obj[key] = 1;
    } else {
      const newValue = obj[key] + 1;
      tempArr2[i] += newValue;
      obj[key] = newValue;
    }
  }
  console.log('tempArr2=', tempArr2);

  const tempArr3 = [];
  for (let i = 0; i < N; i++) {
    tempArr3.push(
      tempArr1[i] + ' <' + tempArr2[i] + '@' + C.toLowerCase() + '.com>',
    );
  }
  console.log('tempArr3=', tempArr3);

  return tempArr3.join(', ');
}

console.log(
  "solution('John Doe, Peter Benjamin Parker, Mary Jane Watson-Parker, John Elvis Doe, John Evan Doe, Jane Doe, Peter Brian Parker', 'Example') = ",
  solution(
    'John Doe, Peter Benjamin Parker, Mary Jane Watson-Parker, John Elvis Doe, John Evan Doe, Jane Doe, Peter Brian Parker',
    'Example',
  ),
);
// John Doe <john.doe@example.com>, Peter Benjamin Parker <peter.parker@example.com>, Mary Jane Watson-Parker <mary.watsonparker@example.com>, John Elvis Doe <john.doe2@example.com>, John Evan Doe <john.doe3@example.com>, Jane Doe <jane.doe@example.com>, Peter Brian Parker <peter.parker2@example.com>
