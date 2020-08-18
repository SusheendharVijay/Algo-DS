function minSubArrayLen(array, sum) {
  let start = 0;
  let end = 0;
  let total = 0;
  let minlen = Infinity;
  while (start < array.length) {
    if (total < sum && end < array.length) {
      total += array[end];
      end++;
    } else if (total >= sum) {
      minlen = Math.min(minlen, end - start);
      total -= array[start];
      start++;
    } else {
      break;
    }
  }

  if (minlen === Infinity) {
    return 0;
  } else {
    return minlen;
  }
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
