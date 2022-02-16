/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  let node = null;

  // If array is empty, return null
  if (!nums.length) return node;

  // find middle index
  let idx = parseInt(nums.length / 2);

  // slice array from its middle and assign to left and right
  let left = nums.slice(0, idx);
  let right = nums.slice(idx + 1, nums.length);

  // create new node, and do another child recursively
  node = new TreeNode(
    nums[idx],
    sortedArrayToBST(left),
    sortedArrayToBST(right)
  );

  // return the tree
  return node;
};
