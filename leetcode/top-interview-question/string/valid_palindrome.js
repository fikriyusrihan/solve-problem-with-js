/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let lowercase = s.toLowerCase();

  // Removing non alphanumeric characters
  let str = lowercase.replace(/[^a-z0-9]/gi, "");

  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) return false;

    start++;
    end--;
  }

  return true;
};
