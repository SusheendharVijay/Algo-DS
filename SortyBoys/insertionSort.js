/*
Basic steps in insertion sort

- loop over the length of the array starting from 1(index i) 
    -loop from i-1 to 0 (index j)
        make new pointer w with initial val i
        if(arr[w]<arr[j])
            - swap(arr,w,j)
            - w = j
        

*/
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0) {
      if (arr[j] > currentVal) {
        arr[j + 1] = arr[j];
        j--;
      } else {
        break;
      }
    }

    arr[j + 1] = currentVal;
  }
}
array = [3, 5, 6, 8, 5, 3, 4, 2, 5, 6, 9, 0];
insertionSort(array);
console.log(array);
