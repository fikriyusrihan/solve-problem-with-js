/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return validate(root, null, null);
};

let validate = function (root, low, high) {
  if (!root) return true;

  if (low) {
    if (root.val <= low.val) return false;
  }

  if (high) {
    if (root.val >= high.val) return false;
  }

  return validate(root.left, low, root) && validate(root.right, root, high);
};
