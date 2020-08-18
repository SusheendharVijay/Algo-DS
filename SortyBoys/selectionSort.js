function selectionSort(arr) {
  let min;
  let minidx;

  for (let i = 0; i < arr.length; i++) {
    min = Infinity;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minidx = j;
      }
    }

    swap(arr, i, minidx);
  }
}
const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

arr = [3, 4, 2, 5, 3, 6, 5, 7, 6, 9, 0, 1];

selectionSort(arr);

console.log(arr);
