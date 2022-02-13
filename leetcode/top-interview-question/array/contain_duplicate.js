/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  while (nums.length > 0) {
    let x = nums.shift();

    if (nums.includes(x)) return true;
  }

  return false;
};
