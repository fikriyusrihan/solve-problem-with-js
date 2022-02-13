/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let arr = [...s];

  for (let i = 0; i < arr.length; i++) {
    let found = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        found = true;
        break;
      }
    }

    if (!found) return i;
  }

  return -1;
};
