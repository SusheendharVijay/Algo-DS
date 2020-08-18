function maxSubArraySum(array, num) {
  let sum = 0;
  let max = -Infinity;

  for (let i = 0; i < num; i++) {
    sum += array[i];
  }

  for (i = num; i < array.length; i++) {
    sum = sum - array[i - num] + array[i];
    max = Math.max(sum, max);
  }
  return max;
}

console.log(maxSubArraySum([100, 200, 300, 400], 2));
