/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 *
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let dict = [];

  for (let i = 0; i < nums.length; i++) {
    if (!dict.includes(nums[i])) dict.push(nums[i]);
    else {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length;
};
