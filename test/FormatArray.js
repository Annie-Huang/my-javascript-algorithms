function solution(A, K) {
  // Find max row length
  const maxRowLength = A.length > K ? K : A.length;
  // console.log('maxRowLength=', maxRowLength);

  // Find max word length
  let maxWordLength = 0;
  for (let i = 0; i < A.length; i++) {
    const itemLength = A[i].toString().split('').length;
    if (maxWordLength < itemLength) {
      maxWordLength = itemLength;
    }
  }
  // console.log('maxWordLength=', maxWordLength);

  // create table.
  let i = 0;
  let table = [[]];
  let currArr = table[0];
  while (A.length != 0) {
    const firstEle = A.shift();
    currArr.push(firstEle);
    i++;
    if (i == maxRowLength && A.length != 0) {
      i = 0;
      currArr = [];
      table.push(currArr);
    }
  }

  // console.log('table=', table);

  // create line
  const rowNumbers = table.length;
  const columnsNumbers = table[0].length;
  // console.log('rowNumbers=', rowNumbers);
  // console.log('columnsNumbers=', columnsNumbers);

  let cellLengthLine = '';
  for (let i = 0; i < maxWordLength; i++) {
    cellLengthLine += '-';
  }
  cellLengthLine += '+';
  // console.log('cellLengthLine=', cellLengthLine);

  let line = '+';
  for (let i = 0; i < columnsNumbers; i++) {
    line += cellLengthLine;
  }
  // console.log('line=', line);

  // create print table
  const printTableArr = [line];
  for (let i = 0; i < rowNumbers; i++) {
    const row = table[i];
    const rowLength = row.length;
    let rowPrint = '|';
    for (let j = 0; j < rowLength; j++) {
      const hyphonLen = maxWordLength - row[j].toString().length;
      for (let j = 0; j < hyphonLen; j++) {
        rowPrint += ' ';
      }
      rowPrint += row[j].toString() + '|';
    }

    printTableArr.push(rowPrint);
    if (rowLength == maxWordLength) {
      printTableArr.push(line);
    } else {
      let lasLine = '+';
      for (let j = 0; j < rowLength; j++) {
        lasLine += cellLengthLine;
      }
      printTableArr.push(lasLine);
    }
  }

  // console.log('printTableArr=', printTableArr);

  return '\n' + printTableArr.join('\n');
}

console.log(
  'solution([4, 35, 80, 123, 12345, 44, 8, 5], 10) = ',
  solution([4, 35, 80, 123, 12345, 44, 8, 5], 10),
);
/*
+-----+-----+-----+-----+-----+-----+-----+-----+
|    4|   35|   80|  123|12345|   44|    8|    5|
+-----+-----+-----+-----+-----+-----+-----+-----+
 */

console.log(
  'solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 4) = ',
  solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 4),
);
/*
+-----+-----+-----+-----+
|    4|   35|   80|  123|
+-----+-----+-----+-----+
|12345|   44|    8|    5|
+-----+-----+-----+-----+
|   24|    3|
+-----+-----+

 */

console.log(
  'solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22, 35], 4) = ',
  solution([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22, 35], 4),
);

/*
+-----+-----+-----+-----+
|    4|   35|   80|  123|
+-----+-----+-----+-----+
|12345|   44|    8|    5|
+-----+-----+-----+-----+
|   24|    3|   22|   35|
+-----+-----+-----+-----+

 */
