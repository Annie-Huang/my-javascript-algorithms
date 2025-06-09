function solution(S) {
  const N = S.length;
  if (N == 1) {
    return false;
  }

  let verticalMovement = 0;
  let horizontalMovement = 0;

  for (let i = 0; i < N; i++) {
    const movement = S[i];
    if (movement == '>') {
      horizontalMovement++;
    } else if (movement == '<') {
      horizontalMovement--;
    } else if (movement == '^') {
      verticalMovement++;
    } else {
      verticalMovement--;
    }
  }

  if (verticalMovement != 0 || horizontalMovement != 0) {
    // console.log('get into here.');
    return false;
  }

  const verticalArr = ['^', 'v'];
  const horizontalArr = ['>', '<'];
  const newS = S + S[0];
  let count = 0;

  for (let i = 0; i < N; i++) {
    const currMovement = newS[i];
    const nextMovement = newS[i + 1];

    if (
      (verticalArr.includes(currMovement) &&
        horizontalArr.includes(nextMovement)) ||
      (horizontalArr.includes(currMovement) &&
        verticalArr.includes(nextMovement))
    ) {
      count++;
    }
  }
  // console.log('count=', count);

  return count == 4;
}

console.log("solution('^^^<<<<vvv>>>>') = ", solution('^^^<<<<vvv>>>>'));
// true

console.log("solution('<vvv>>^^^<') = ", solution('<vvv>>^^^<'));
// true

console.log("solution('<^^^>v') = ", solution('<^^^>v'));
// false
