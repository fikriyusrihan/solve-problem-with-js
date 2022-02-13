const isPalindrome = function (str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) return false;

    start++;
    end--;
  }

  return true;
};

const isPalindromeR = function (str, start, end) {
  if (start >= end) return true;
  else {
    if (str[start] !== str[end]) return false;
    else {
      isPalindromeR(str, start + 1, end - 1);
    }
  }
};

