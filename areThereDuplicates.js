function areThereDuplicates(...myArgs) {
  let uniqueCounter;
  myArgs.sort();

  for (let element of myArgs) {
    if (element !== uniqueCounter) {
      uniqueCounter = element;
    } else {
      return true;
    }
  }

  return false;
}
