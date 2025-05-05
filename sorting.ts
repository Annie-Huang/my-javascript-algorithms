function bubbleSort(array: number[]) {
  for (let n = array.length; n >= 0; n--) {
    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        // Swap elements
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }

  return array;
}

console.log(bubbleSort([3, 5, 8, 2, 6, 10, 9, 4, 7, 1]));

// console.log('annie');
