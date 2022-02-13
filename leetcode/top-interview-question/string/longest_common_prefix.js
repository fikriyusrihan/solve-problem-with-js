/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let searching = true;
  let counter = 0;

  if (strs.length === 1) return strs[0];

  while (searching) {
    for (let i = 1; i < strs.length; i++) {
      if (
        strs[0].slice(0, counter + 1) !== strs[i].slice(0, counter + 1) ||
        strs[i].length <= counter
      ) {
        searching = false;
        counter--;
        break;
      }
    }
    counter++;
  }

  return strs[0].slice(0, counter);
};
