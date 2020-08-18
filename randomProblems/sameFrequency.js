function sameFrequency(num1, num2) {
  let lookup = {};
  if (num1.length !== num2.length) {
    return false;
  }

  for (let digit of num1.toString()) {
    lookup[digit] = (lookup[digit] || 0) + 1;
  }

  for (let digit of num2.toString()) {
    if (!lookup[digit]) {
      return false;
    } else {
      lookup[digit]--;
    }
  }
  return true;
}

console.log(sameFrequency(123, 33321));
