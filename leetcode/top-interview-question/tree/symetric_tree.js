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
var isSymmetric = function (root) {
  if (!root) return true;

  let leftValue = !root.left ? null : root.left.val;
  let rightValue = !root.right ? null : root.right.val;

  if (leftValue != rightValue) return false;

  return validate(root.left, root.right);
};

const validate = function (left, right) {
  if (!left && !right) return true;

  if (!left || !right) return false;

  let leftLeftValue = !left.left ? null : left.left.val;
  let rightRightValue = !right.right ? null : right.right.val;

  let leftRightValue = !left.right ? null : left.right.val;
  let rightLeftValue = !right.left ? null : right.left.val;

  if (leftLeftValue !== rightRightValue) return false;
  if (leftRightValue !== rightLeftValue) return false;

  return validate(left.left, right.right) && validate(left.right, right.left);
};
