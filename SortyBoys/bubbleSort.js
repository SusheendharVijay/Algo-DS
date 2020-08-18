/*
basic steps in bubble sort 
- loop that runs array.length amount of times 
    - another loop that loops over the elements till the unsorted part.
        - compare arr[j] and a[j+1] 
            - if arr[j] is greater swap the values else continue; 
    
    unsorted--
*/
function bubbleSort(array) {
  let noSwaps = 0;
  for (let i = array.length; i > 0; i--) {
    noSwaps = 0;
    for (let j = 0; j <= i - 1; j++) {
      if (array[j] > array[j + 1]) {
        noSwaps = 1;
        swap(array, j, j + 1);
      }
    }
    if (!noSwaps) return;
  }
}

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

array = [3, 5, 6, 8, 5, 3, 4, 2, 5, 6, 9, 0];
bubbleSort(array);

console.log(array);
