function countUniqueValues(array) {
  let uniquePointer = 0;
  let uniqueCount = 0;

  for (let realPointer of array) {
    if (realPointer !== uniquePointer) {
      uniquePointer = realPointer;
      uniqueCount++;
    }
  }
  return uniqueCount;
}

console.log(countUniqueValues([1, 2, 3, 3, 3, 3, 3, 3, 4, 4, 5, 6, 7, 8]));
