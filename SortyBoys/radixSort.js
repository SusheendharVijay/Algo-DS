// helper functions

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function countDigits(number) {
  if (number === 0) {
    return 1;
  }
  return Math.floor(Math.log10(Math.abs(number))) + 1;
}

function mostDigits(array) {
  let max = -Infinity;
  for (let num of array) {
    max = Math.max(max, countDigits(num));
  }

  return max;
}

function radixSort(array) {
  let maxDigits = mostDigits(array);
  for (let k = 0; k < maxDigits; k++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let num of array) {
      buckets[getDigit(num, k)].push(num);
    }

    array = [].concat(...buckets);
  }
  return array;
}

arr = [3, 4, 5, 65, 45, 34, 23, 54, 6, 4, 89, 900];
console.log(radixSort(arr));
