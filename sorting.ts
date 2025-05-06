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

// console.log(bubbleSort([3, 5, 8, 2, 6, 10, 9, 4, 7, 1]));

// Insertion sort is slightly better than bubble sort as you may not need to loop to the start of the array in 'j' everything to get it sorted.
function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) {
    const value = array[i];
    let j = i - 1;

    for (j; j >= 0; j--) {
      if (array[j] > value) {
        array[j + 1] = array[j];
      } else {
        break;
      }
    }

    console.log('j=', j);
    array[j + 1] = value;
  }

  return array;
}

// const array = [3, 5, 8, 2, 6, 10, 9, 4, 7, 1];
const array = [1, 9, 7, 4, 3, 2, 6, 10, 5, 8];
// const array = [1, 9];
console.log('array=', array);
console.log('insertionSort=', insertionSort(array));
