function averagePair(array, avg) {
  let left = 0;
  let right = array.length - 1;
  let mean = 0;
  while (left < right) {
    mean = (array[left] + array[right]) / 2;

    if (mean === avg) {
      return true;
    }

    if (mean > avg) {
      right--;
    } else if (mean < avg) {
      left++;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
