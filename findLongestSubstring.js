function findLongestSubstring(string) {
  let maxlen = -Infinity;
  let start = 0;
  let end = 0;
  let seen = {};
  while (start < string.length) {
    if (!seen[string[end]]) {
      seen[string[end]] = 1;
      end++;
      maxlen = Math.max(maxlen, end - start);
    } else {
      seen[string[start]] = undefined;
      start++;
    }

    if (end === string.length) {
      console.log(start);
      console.log(end);
      break;
    }
  }

  if (maxlen === -Infinity) {
    return 0;
  } else {
    return maxlen;
  }
}
console.log(findLongestSubstring("susheendhar"));
