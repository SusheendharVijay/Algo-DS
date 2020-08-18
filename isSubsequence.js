function isSubsequence(substring, text) {
  let sub_index = 0;
  for (let text_index = 0; text_index < text.length; text_index++) {
    if (text[text_index] === substring[sub_index]) {
      sub_index++;
    }

    if (sub_index == substring.length) {
      return true;
    }
  }

  return false;
}

console.log(isSubsequence("hello", "hellw hello"));
