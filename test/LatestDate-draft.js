/*
  1.
  arr = dateStr.split('-');
  month = arr[0];
  day = arr[1]

  2. remove all invalid values:
  if(!['0', '1', '?'].includes(month[0]) ||
     (month[0] == '1' && !['0', '1', '2', '?'].includes(month[1]) ||
     !['0', '1', '2', '3' '?'].includes(day[0]) ||
     (day[0] == '3' && !['0', '1', '?'].includes(day[1]))
  ) return {'xx-xx'}

  3. create possible options:
  monthOptions = [];
  if(month[0] != '?' && month[1] != '?') {
    monthOptions.push(month);
  }
  if(month[0] == '?' &&  ['0', '1', '2'].includes(month[1])) {
    monthOptions.push('1'+month[1]);
    monthOptions.push('0'+month[1]);
  } else if (month[0] == '?' &&  ['3', '4', '5', '6', '7', '8', '9'].includes(month[1])) {
    monthOptions.push('0'+month[1]);
  }
  if(month[0] != '?')

 */
