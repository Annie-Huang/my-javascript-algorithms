function solution(A, B) {
  let [aHour, aMin] = A.split(':');
  let [bHour, bMin] = B.split(':');

  aHour = +aHour;
  aMin = +aMin;
  bHour = +bHour;
  bMin = +bMin;

  startMin = aHour * 60 + aMin;
  endMin = bHour * 60 + bMin;
  // console.log('endMin =', endMin);

  if (endMin < startMin) {
    endMin += 60 * 24;
  }
  // console.log('endMin =', endMin);

  if (startMin % 15 != 0) {
    startMin = (Math.floor(startMin / 15) + 1) * 15;
  }

  endMin = Math.floor(endMin / 15) * 15;

  // console.log('startMin =', startMin);
  // console.log('endMin =', endMin);

  if (startMin >= endMin) {
    return 0;
  }

  return (endMin - startMin) / 15;
}

console.log("solution('12:01', '12:44') = ", solution('12:01', '12:44'));
// 1

console.log("solution('12:01', '12:44') = ", solution('20:00', '06:00'));
// 40

console.log("solution('00:00', '23:59') = ", solution('00:00', '23:59'));
// 95

console.log("solution('12:03', '12:03') = ", solution('12:03', '12:03'));
// 0
