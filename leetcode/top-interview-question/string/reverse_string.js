/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
 * 
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let temp = s[start];
    s[start] = s[end];
    s[end] = temp;

    start++;
    end--;
  }

  console.log(s);
};
