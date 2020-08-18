// naive algorithm for searching for a given substring

/*
procedure

- loop over the big string
    - if the selected charcter matches with first character of substring then 
    - loop over the second string 
        - check if the characters are the same 
        - if one character doesnt fit then break loop  
        - if you reach the end of the substring then count++
    else continue looping over the bigger string

- return count; 





*/
function naiveStringSearch(string, substring) {
  let count = 0;

  for (let long_idx = 0; long_idx <= string.length; long_idx++) {
    if (string[long_idx] === substring[0]) {
      let flag = 1;
      for (let idx = 1; idx < substring.length; idx++) {
        if (string[long_idx + idx] !== substring[idx]) {
          flag = 0;
          break;
        }
      }
      if (flag) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveStringSearch("omgomgcomggogn", "omgf")); // expected answer = 3;
