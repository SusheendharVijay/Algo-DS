function pivot(array, start = 0, end = array.length - 1) {
  pivotVal = array[start];
  let pivotIndex = start;
  for (let i = start; i <= end; i++) {
    if (array[i] < pivotVal) {
      pivotIndex++;
      swap(array, pivotIndex, i);
    }
  }

  swap(array, start, pivotIndex);
  return pivotIndex;
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

arr = [7, 6, 8, 4, 9, 3, 2, 1, 56, 67, 45, 54, 67, 89, 90, 98, 87, 67];

function quickSort(array, start = 0, end = array.length - 1) {
  if (start >= end) {
    return array;
  }

  let pivotIndex = pivot(array, start, end);
  quickSort(array, pivotIndex + 1, end);
  quickSort(array, start, pivotIndex - 1);
}
quickSort(arr);
console.log(arr);
