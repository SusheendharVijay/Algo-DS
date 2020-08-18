function binarySearch(list, val) {
  let left = 0;
  let right = list.length - 1;
  let mid;

  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (list[mid] === val) {
      return mid;
    }
    if (list[mid] > val) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (list[left] === val) {
    return left;
  } else {
    return -1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
