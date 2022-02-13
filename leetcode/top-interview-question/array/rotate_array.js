/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let numToRotate = k % nums.length;
  let temp = nums.splice(nums.length - numToRotate);
  nums.splice(0, 0, ...temp);
};
