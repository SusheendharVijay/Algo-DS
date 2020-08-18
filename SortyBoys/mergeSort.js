function merge(arr1, arr2) {
  let mergedArray = [];
  let p1 = 0;
  let p2 = 0;
  let merged_idx = 0;
  while (p1 != arr1.length && p2 != arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      mergedArray[merged_idx++] = arr1[p1++];
    } else {
      mergedArray[merged_idx++] = arr2[p2++];
    }
  }

  while (p2 < arr2.length) {
    mergedArray[merged_idx++] = arr2[p2++];
  }

  while (p1 < arr1.length) {
    mergedArray[merged_idx++] = arr1[p1++];
  }

  return mergedArray;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let arr1 = mergeSort(array.slice(0, array.length / 2));
  let arr2 = mergeSort(array.slice(array.length / 2));
  return merge(arr1, arr2);
}
arr1 = [1, 4, 4, 45, 67, 89, 90];
arr2 = [4, 5, 6, 7, 8, 9, 10, 23, 34];

array = [87, 76, 65, 45, 34, 23, 1, 2, 3, 34, 45, 90, 89];
console.log(mergeSort(array));
