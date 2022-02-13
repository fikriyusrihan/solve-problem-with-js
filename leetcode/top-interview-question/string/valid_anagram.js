/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let arr = [...t];
  for (let i = 0; i < s.length; i++) {
    let idx = arr.indexOf(s[i]);
    if (idx !== -1) {
      arr.splice(idx, 1);
    } else {
      return false;
    }
  }

  if (arr.length > 0) return false;

  return true;
};
